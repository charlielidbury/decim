require('dotenv').config()

const express = require('express');
const request = require('request');
const { redirect } = require('statuses');
const app = express();
const port = process.env.PORT || 5000;
// const cors = require('cors');
const path = require('path');

const base = "https://api.monzo.com/";

// app.use(cors());

app.get("/api/ping", (req, res) => {
    res.status(200);
    res.json("pong");
});

app.listen(port, () => {
    console.log(`Server is up at port ${port}`);
});

const oauthDetails = {
    client_id: process.env.client_id,
    client_secret: process.env.client_secret,
    redirect_uri: 'http://localhost:5000/api/callback'
};

let accessToken = null;

app.get('/api/auth', (req, res) => {
    const { client_id, redirect_uri } = oauthDetails;
    const monzoAuthUrl = 'https://auth.monzo.com';
    res.type = ('json');
    const link = `${monzoAuthUrl}?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code`
    res.json(link)

    //     res.type('html');
    //     res.send(`
    //     <body onload="document.form1.submit()">
    //     <h1>Hello</h1>
    //         <form name="form1" action="${monzoAuthUrl}">
    //             <input type="hidden" name="client_id" value="${client_id}" />
    //             <input type="hidden" name="redirect_uri" value="${redirect_uri}" />
    //             <input type="hidden" name="response_type" value="code" />
    //         </form>
    //     </body>
    //   `);
});

app.get('/api/authcheck', (req, res) => {
    console.log("Access token:", accessToken)
    try {
        const { token_type, access_token } = accessToken;

        request.get(base + '/ping/whoami', {
            headers: {
                Authorization: `${token_type} ${access_token}`
            }
        }, (req, response, body) => {
            res.send(body)
        });
    } catch (error) {
        console.log(error);
    }

})

app.get('/api/callback', (req, res) => {
    console.log("hit callback")
    const { client_id, client_secret, redirect_uri } = oauthDetails;
    const { code } = req.query;
    const monzoAuthUrl = base + 'oauth2/token';

    request.post({
        url: monzoAuthUrl,
        form: {
            grant_type: 'authorization_code',
            client_id,
            client_secret,
            redirect_uri,
            code
        }
    }, (err, response, body) => {
        accessToken = JSON.parse(body);
        res.redirect('/');
    });
});

app.get('/api/accounts', (req, res) => {
    const { token_type, access_token } = accessToken;

    request.get(base + 'accounts', {
        headers: {
            Authorization: `${token_type} ${access_token}`
        }
    }, (req, response, body) => {
        const { code } = JSON.parse(body);

        if (code == 'forbidden.insufficient_permissions') {
            console.log("Not yet authorised");
            res.redirect('/')
        } else {
            const { accounts } = JSON.parse(body)
            res.send(body);
        }
    });
});

app.get('/api/transactions/:acc_id', (req, res) => {
    const { acc_id } = req.params;
    const { token_type, access_token } = accessToken;
    const transactionsUrl = base + `transactions?expand[]=merchant&account_id=${acc_id}`;

    request.get(transactionsUrl, {
        headers: {
            Authorization: `${token_type} ${access_token}`
        }
    }, (req, response, body) => {
        const { transactions } = JSON.parse(body);
        res.send(body);
    });
});

app.use(express.static('public'));
app.listen(3000);
require('dotenv').config()

const express = require('express');
const request = require('request');
const { redirect } = require('statuses');
const app = module.exports = express();
const transactionsHandler = require('./transactions');
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

// app.locals.accessTokens[userID] = accessToken
app.locals.accessTokens = {};

// app.get('/api/authcheck', (req, res) => {
//     console.log("Access token:", accessToken)
//     try {
//         const { token_type, access_token } = accessToken;

//         request.get(base + '/ping/whoami', {
//             headers: {
//                 Authorization: `${token_type} ${access_token}`
//             }
//         }, (req, response, body) => {
//             res.send(body)
//         });
//     } catch (error) {
//         console.log(error);
//     }

// })

app.get('/api/callback', (req, res) => {
    const { accessTokens } = app.locals;
    const { client_id, client_secret, redirect_uri } = oauthDetails;
    console.log(req.query);
    const { code } = req.query;
    const monzoAuthUrl = base + 'oauth2/token';

    accessTokens[sessionId] = null;

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
        // stores accessToken on server for future use
        const accessToken = JSON.parse(body);
        console.log(accessToken);
        accessTokens[sessionId] = {
            accessToken,
            accId
        };
        // redirects to home page
        res.redirect('/');
    });
});

// all the stuff to do with transactions
app.use("/api/transactions", transactionsHandler);


// app.get('/api/accounts', (req, res) => {
//     const { token_type, access_token } = accessToken;

//     request.get(base + 'accounts', {
//         headers: {
//             Authorization: `${token_type} ${access_token}`
//         }
//     }, (req, response, body) => {
//         const { code } = JSON.parse(body);

//         if (code == 'forbidden.insufficient_permissions') {
//             console.log("Not yet authorised");
//             res.redirect('/')
//         } else {
//             const { accounts } = JSON.parse(body)
//             res.send(body);
//         }
//     });
// });

// app.get('/api/transactions/:acc_id', (req, res) => {
//     const { acc_id } = req.params;
//     const { token_type, access_token } = accessToken;
//     const transactionsUrl = base + `transactions?expand[]=merchant&account_id=${acc_id}`;

//     request.get(transactionsUrl, {
//         headers: {
//             Authorization: `${token_type} ${access_token}`
//         }
//     }, (req, response, body) => {
//         const { transactions } = JSON.parse(body);
//         res.send(body);
//     });
// });

app.use(express.static('public'));
app.listen(3000);
require('dotenv').config()

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
// const cors = require('cors');
const path = require('path');

// app.use(cors());

app.use(express.static('public'));

app.get("/api/ping", (req, res) => {
    res.status(200);
    res.json("pong");
});

app.listen(port, () => {
    console.log(`Server is up at port ${port}`);
});
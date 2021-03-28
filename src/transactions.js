const express = require("express");
const sqlite = require("better-sqlite3");
const { locals } = require(".");

const db = sqlite("store/db.sqlite");

const router = express.Router();

router.get("/:sessionId", (req, res) => {
    const userID = req.params.userID;
    const accessToken = req.params.accessToken;

    // figures out when the last proccessed transaction was
    const { lastTx } = db.prepare(`
        SELECT MAX(timestamp) AS lastTx
        FROM taction
        WHERE user = ${userID}
    `).get();

    // gets all the ones after that
    const transactions = await monzo.getTransactions(userID, accessToken);

    // adds all those to the database
    transactions.forEach(transaction => {
        // if the merchant doesn't exist, add it
        const merchant = db.prepare(`
            SELECT *
            FROM merchant
            WHERE group = ${transaction.merchant.group}
        `).get();

        let tags;

        if (merchant) {
            // get its tags
            tags = db.prepare(`
                SELECT *
                FROM tagged
                WHERE merchant = ?
            `).all(transaction.merchant.group);
        } else {
            // insert it
            db.prepare(`
                INSERT INTO merchant(group)
                VALUES (?)
            `).run(transaction.merchant.group);
        }

        db.prepare(`
            INSERT INTO merchant()
            SELECT
            WHERE NOT EXISTS (
                SELECT *
                FROM merchant
                WHERE group = ${transaction.merchant.group}
            )
        `).run();

        // if transaction doesn't exist, add it
        db.prepare(`
            INSERT INTO taction(id, user, timestamp, multiplier, opinionated)
            SELECT
                ${transaction.id},
                ${userID},
                ${transaction.created},
                (
                    SELECT 
                ),
                0
            WHERE NOT EXISTS (
                SELECT *
                FROM taction
                WHERE id = ${transaction.id}
            )
        `).run();
    });

    // sends back all the ones the user wanted
    const result = db.prepare(`
        SELECT *
        FROM taction
        WHERE user = ${userID}
    `).all();

});

module.exports = router;
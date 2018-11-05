const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// Setup a POST route to add a new employee to the database
router.post('/', (req, res) => {
    const dataObject = req.body;
    const sqlText = `INSERT INTO feedback (feeling, understanding, support, comments) VALUES 
  ($1, $2, $3, $4)`;
    pool.query(sqlText, [dataObject.feeling, dataObject.understanding, dataObject.support, dataObject.comments])
        .then((result) => {
            console.log(`Added to the database`, dataObject);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
})


module.exports = router;
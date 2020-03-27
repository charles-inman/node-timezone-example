const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 4000 || process.env.PORT ;

const db = require('./db/index.js');
const search = require('./db/search.js');
const bodyParser = require('body-parser')


const init = async () => {

    app.use(cors());

    const jsonParser = bodyParser.json();

    const setupDB = await db.insertInitData();

    app.get('/all', async (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        const allData = await db.connection(search.getAll);

        res.send(JSON.stringify(allData));
    });

    app.post('/search', jsonParser, async (req, res) => {
        res.setHeader('Content-Type', 'application/json');

        const allData = await db.connection(search.findName, req.body.query);

        res.send(allData);
    });

    app.listen(PORT);

    console.log(`Listening on port: ${PORT} - ${setupDB}`);
}

const canInit = async () => {

    let canLoad = false;
    while (!canLoad) {
        canLoad = await db.checkDBReady()
    }

    await init();
}

canInit();

const mysql = require('mysql');
const dbInit = require('./init.js');

const connectionAuth = {
    host     : 'localhost' ,
    user     : 'root',
    password : 'helloworld',
    database : 'testapp',
    port: process.env.DB_PORT || 3308
};

module.exports.checkDBReady = async() => {

    return await new Promise(resolve => {
        const connection = mysql.createConnection(connectionAuth);
        connection.connect();
        connection.query('SELECT 1 + 1 AS solution', (error, results, fields) => {
            if (error) {
                console.log(error);
                resolve(false);
            }

            resolve(true);
        });
        connection.end();
    });
}

module.exports.insertInitData = async () => {


    const connection = mysql.createConnection(connectionAuth);
    connection.connect();

    // Remove table if exists
    try {
        await dbInit.initTableCheck(connection);
        await dbInit.removeInitTable(connection);
    }
    catch (e) {
        // if no such table ignore
        if(e.code !== 'ER_NO_SUCH_TABLE') {
            throw e;
        }
    }

    const createTable = await dbInit.setupTable(connection)

    const fileSetup = await dbInit.retrieveTimezonesFromFile()

    const success = await dbInit.insertIntoTable(connection, fileSetup.TimeZones.TimeZone);

    connection.end();

    return 'Created SQL data: ' + success;
}

module.exports.connection = async (action, query) => {
    const connection = mysql.createConnection(connectionAuth);
    connection.connect();

    const res = await action(connection, query);

    connection.end();

    return res;
}
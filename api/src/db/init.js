const fs = require('fs');
const xml2js = require('xml2js');

const tableName = 'timezones'
module.exports.initTableCheck = (connection) => {

    return new Promise((resolve, reject) => {

        connection.query(`SELECT 1 FROM ${tableName} LIMIT 1;`
        , function (error, results) {
            if (error) reject(error);

            resolve(results);
        });

    });
}

module.exports.removeInitTable = (connection) => {

    return new Promise((resolve, reject) => {

        connection.query(`DROP TABLE ${tableName};`
            , function (error, results) {
                if (error) reject(error);

                resolve(results);
            });

    });
}


module.exports.setupTable = (connection) => {

    return new Promise(resolve => {

        connection.query(`CREATE TABLE ${tableName} ( ID int NOT NULL, Name varchar(255), Hours int, Mins int, Secs int,  UNIQUE (ID));`, function (error, results) {
            if (error) throw error;

            resolve(results);
        });

    });
}

module.exports.retrieveTimezonesFromFile = () => {

    return new Promise(resolve => {
        const parser = new xml2js.Parser({attrkey: "ATTR"});

        let xml_string = fs.readFileSync("src/timezones.xml", "utf8");

        parser.parseString(xml_string, function (error, result) {
            if (error === null) {
                resolve(result);
            } else {
                throw "File not read";
            }
        });
    });
}

module.exports.insertIntoTable = (connection, data) => {

    const insertString = `INSERT INTO ${tableName} (ID,Name,Hours,Mins,Secs) VALUES ?`;

    const values = data.map(data => {
        return [
            parseInt(data.Id[0]),
            data.Name[0],
            parseInt(data.Hours[0]),
            parseInt(data.Mins[0]),
            parseInt(data.Secs[0])
        ]
    });

    return new Promise(resolve => {

        connection.query(insertString, [values], function (error, results) {
            if (error) throw error;

            resolve(results.affectedRows);
        });

    });
}
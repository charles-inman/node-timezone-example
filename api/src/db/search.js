const tableName = 'timezones'

module.exports.getAll = async (connection) => {

    return await new Promise(resolve => {
        // Generally you never want to put * instead declare each column
        connection.query(`SELECT * FROM ${tableName}`, function (err, result, fields) {
            if (err) throw err;

            resolve(result);
        });
    });
}

module.exports.findName = async (connection, query) => {

    return await new Promise(resolve => {
        // Generally you never want to put * instead declare each column
        connection.query(`SELECT * FROM ${tableName} WHERE Name LIKE ${connection.escape('%' + query + '%')}`, function (err, result, fields) {
            if (err) throw err;

            resolve(result);
        });
    });
}
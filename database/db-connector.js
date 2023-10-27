// Get an instance of mysql we can use in the app
var mysql = require('mysql2')

// Create a 'connection pool' using the provided credentials
let pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'mysql',
    database: 'circlenet',
    multipleStatements: true
});

// Export it for use in our applicaiton
module.exports.pool = pool;
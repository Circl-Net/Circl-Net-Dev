// Get an instance of mysql we can use in the app
var mysql = require('mysql')

// Create a 'connection pool' using the provided credentials
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '159357@',
    database: 'mysql'
});

// Export it for use in our applicaiton
module.exports.pool = pool;
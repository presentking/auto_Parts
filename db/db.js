// Use the MariaDB Node.js Connector
let mysql = require('mysql2')
module.exports = mysql.createPool({
    host: 'localhost',
    port: "3306",
    user: 'root',
    password: '',
    database: 'auto_parts'
});


//const user = ["Tom", 29];
// const sql = ";
//

// connection.query("INSERT INTO auto_parts(id, name, price, car_models_id) VALUES(12, 'Движок',112002, 1)",function(err, results) {
//     if(err) console.log(err);
//     else console.log("Данные добавлены");
// });

// connection.query("DELETE FROM auto_parts WHERE name = 'Движок'",function(err, results) {
//     if(err) console.log(err);
//     else console.log("Данные удалены");
// });

// connection.query('UPDATE auto_parts SET price = 13645 WHERE id = 8', function (error, results, fields) {
//     if (error) throw error;
//     else console.log("Данные изменены");
// });
//
// connection.query('SELECT * FROM auto_parts', function (error, results, fields) {
//     if (error) throw error;
//     console.log('', results);
// });
// connection.end();
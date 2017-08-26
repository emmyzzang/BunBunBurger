
// Connection to the db exported for the ORM to run

const mysql = require('mysql'); 
let connection; 

if (process.env.JAWSDB_URL) {
	connection  = mysql.createConnection(process.env.JAWSDB_URL); 
}

else {

	connection = mysql.createConnection({
			port: 3306, 
			host: 'localhost',
			user: 'root',
			password: '',
			database: 'burgers_db'
	});
}

connection.connect(function(err) {
	if (err) {
		console.error('NO LOG HORIZON MEMES FOR U! Error connecting: ' + err.stack); 
		return;
	}
		console.log('Just Living in the Database Database! Connected as id: ' + connection.threadId);  

});

module.exports = connection; 
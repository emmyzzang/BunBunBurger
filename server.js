// ==============================================
// DEPENDENCIES
// ==============================================

const methodOverride = require('method-override');
const express = require('express'); 
const exphbs = require('express-handlebars');
const mysql = require('mysql');
const bodyParser = require('body-parser'); 

// SETUP EXPRESS SERVER
// ==============================================
let app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

// Tells app to use handlebars to create the layout
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


// Import and use router from controller.js file
let router = require('./controllers/burgers_controller.js');
app.use('/', router);


// DEFINE PORT AND START SERVER LISTEN
// ==============================================
var PORT = 3000;
app.listen(process.env.PORT || PORT);
console.log("Local host:" + PORT);
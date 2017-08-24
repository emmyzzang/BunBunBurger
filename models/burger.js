// Import (require) orm.js
// ==============================================================================
const orm = require('../config/orm.js');


// A model that uses burger specific inputs to call ORM functions
// ==============================================================================
let burger = {
	selectAll: function (cb) {
		orm.selectAll('burgers', function (res) {
			cb(res);
		});
	},
	// cols and vals are arrays
	insertOne: function (cols, vals, cb) {
		orm.insertOne('burgers', cols, vals, function (res) {
			cb(res);
		});
	},
	updateOne: function (objColVals, condition, cb) {
		orm.updateOne('burgers', objColVals, condition, function (res) {
			cb(res);
		});
	},
	deleteOne: function (condition, cb) {
		orm.deleteOne('burgers', condition, function (res) {
			cb(res);
		});
	}
};


// Export ORM as a module 
// ==============================================================================
module.exports = burger;

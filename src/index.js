var hinduNames = require('./names.json');
var uniqueRandomArray = require('unique-random-array');
module.exports = {
	all:hinduNames,
	random:uniqueRandomArray(hinduNames)
};
//v.map(function(x){return x.innerText;})

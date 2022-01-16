const path = require('path');

module.exports = {
  entry: {
	'Home' : './javascript/Home.js',
	'viewproject' : './javascript/viewproject.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },
};
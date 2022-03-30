const path = require('path');

module.exports = {
  entry: {
	'homePage' : './javascript/homePage.js',
	'createProject' : './javascript/createProject.js',
	'updateProject' : './javascript/updateProject.js',
	'viewProject' : './javascript/viewProject.js',
	'createTask' : './javascript/createTask.js',
	'updateTask' : './javascript/updateTask.js',
	'viewTask' : './javascript/viewTask.js',
	'viewTasks' : './javascript/viewTasks.js',
	'createWorkpackage' : './javascript/createWorkpackage.js',
	'updateWorkpackage' : './javascript/updateWorkpackage.js',
	'createEmployee' : './javascript/createEmployee.js',
	'viewEmployees' : './javascript/viewEmployees.js',
	'viewWorkpackages' : './javascript/viewWorkpackages.js',
	'createDeliverable' : './javascript/createDeliverable.js',
	'updateDeliverable' : './javascript/updateDeliverable.js',
	'viewDeliverables' : './javascript/viewDeliverables.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },
};
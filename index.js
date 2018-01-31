var fetch_data = require('./dependency.js');
fetch_data('AutoCustoms');

//get instance of the commander
var cli = require('commander');

//set the versioning for the app
cli
    .version('1.0.0')
    .description('GitHub Info Collecter')

cli.parse(process.argv);
var fetch_data = require('./dependency.js');


//get instance of the commander
var cli = require('commander');

//set the versioning for the app
cli
    .version('1.0.0')
    .description('GitHub Info Collecter')

//add commands 
cli
    .command('user <username>')
    .alias('u')
    .description('get public repositories for a given user')
    .action((username)=>{
        fetch_data(username);
    });

cli.parse(process.argv);
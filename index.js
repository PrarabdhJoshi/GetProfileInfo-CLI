#!/usr/bin/env node



//get instance of the commander
var cli = require('commander');
var fetch_data = require('./dependency.js');
//set the versioning for the app
cli
    .version('1.0.0')
    .description('GitHub Info Collecter')

//add command to display user repositories. Give option asc or dsc for ordering
cli
    .command('user <username> <order>')
    .alias('u')
    .description('get public repositories for a given user and sort the result based on your desired ordering')
    .action((username,order)=>{
        fetch_data(username,order,1);
    });

cli.parse(process.argv);
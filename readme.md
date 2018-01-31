GitHub Info Collecter

A Node.js command line application to display to public repositories for any GitHub user that is passed as an argument.

Installation: 
Clone/download the repository on your system. 
cd to the cloned/extracted folder and run 
npm intall 
eg
Run npm link

For Windows Users:
Use GitBash to run the command as
gitinfo-cli [options]

For Linux Users:
Use Terminal Window to run the command as
gitinfo-cli [options]

Usage:

[1]. Help
gitinfo-cli --help

[2]. Version
gitinfo-cli --version

[3]. Get user's public Repositories
gitinfo-cli user <username> <ordering-mode>

Supported Ordering Modes-> use 'asc' for displaying results in Ascending Order
                        -> use 'dsc' for displaying results in Descending Order


eg. gitinfo-cli user AutoCustoms dsc
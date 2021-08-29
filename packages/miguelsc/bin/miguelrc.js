#! /usr/bin/env node
const { program } = require('commander');
const inquirer = require('inquirer');
program.version('0.0.1');
program
    .option('-d, --debug', 'output extra debugging')
    .option('-n, --name <type>', '设置项目名字');

program.parse(process.argv);
const options = program.opts();


/*针对有选项*/
inquirer
    .prompt([
        /* Pass your questions in here */
    ])
    .then((answers) => {
        // Use user feedback for... whatever!!
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });

if(options.name) {
    const { exec } = require('child_process');
    exec(`git clone https://github.com/tank537285/miguelrc.git ${options.name}`);
};




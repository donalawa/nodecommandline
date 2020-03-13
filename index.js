const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

const inquirer  = require('./lib/inquirer');
const files = require('./lib/file');

clear();

console.log(
  chalk.red(
    figlet.textSync('Dona CMD', { horizontalLayout: 'full' })
  )
);

if (files.directoryExists('.git')) {
    console.log(chalk.red('Already a Git repository!'));
    process.exit();
  }


  const run = async () => {
    const credentials = await inquirer.askGithubCredentials();
    console.log(credentials);
  };
  
  run();
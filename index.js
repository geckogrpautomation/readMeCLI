// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const objJS = require("./obj");
const markUpJS = require("./markUp");
const fileJS = require("./file");

// TODO: Create an array of questions for user input
const licList = ["PDL", "GNU/LGPL" , "PrivatPermissive","Copyleft", "Proprietary"];
 
//Create objects from constructors which are defined in objJS.js
let projectTitle = new objJS.InquirerInpNumCnfrmPass("projtitle", "input", "What is the name of your Project");
let readmeTitle = new objJS.InquirerInpNumCnfrmPass("readmetitle", "input", "What is the title of your Readme?");
let description = new objJS.InquirerInpNumCnfrmPass("description", "input", "Please enter a description about your project.");
let contributors = new objJS.InquirerInpNumCnfrmPass("contributor", "input", "Please enter the contributors to the project and if more than one separate via a comma.");
let usage = new objJS.InquirerInpNumCnfrmPass("usage", "input", "Please add a link to a video of how / when to use the code.");
let preReq = new objJS.InquirerInpNumCnfrmPass("prereq", "input", "What are the required prerequisites or project dependancies and if more than one separate via a comma.?");
let installation = new objJS.InquirerInpNumCnfrmPass("installation", "input", "Please define the NPM installation steps separated by a comma Eg 1 - npm init, 2 - npm install inquirer?");
let builtWith = new objJS.InquirerInpNumCnfrmPass("builtwith", "input", "Please define the technologies used in this project separated by a comma Eg 1 - HTML, 2 - JS?");
let license = new objJS.InquirerListChkBx("license", "list", "Select correct license type of this project.",licList, "Proprietary" );
let gitHubLink = new objJS.InquirerInpNumCnfrmPass("githublink", "input", "Please provide the link to your project's GitHub repository?");
let gitHubClone = new objJS.InquirerInpNumCnfrmPass("githubclone", "input", "Please provide the link to initiate a clone of your project's repository?");
let gitHubEmail= new objJS.InquirerInpNumCnfrmPass("githubemail", "input", "Please provide your public GitHub profile email contact?");
let gitHubUName= new objJS.InquirerInpNumCnfrmPass("githubname", "input", "Please provide your GitHub username?");

//Add prompts and raw lists to inquirer
inquirer
 .prompt([ 
  projectTitle,
  readmeTitle,
  description,
  contributors,
  usage,
  preReq,
  installation,
  builtWith,
  license,
  gitHubLink,
  gitHubClone,
  gitHubEmail,
  gitHubUName
])
 .then(answers => {
 //Create markup text
  let markUp = markUpJS.createMKup(answers);
  //Check if file exist in directory
  fileJS.checkFile(`${answers.readmetitle}.md`,markUp);        
  })
  //Catch error and console log it
  .catch(error => {
    console.log (error);
  });



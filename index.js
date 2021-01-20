// TODO: Include packages needed for this application
let fs = require("fs");
let inquirer = require("inquirer");
let obj = require('./obj');
// TODO: Create an array of questions for user input
let licList = ["PDL", "GNU/LGPL" , "PrivatPermissive","Copyleft", "Proprietary"];


//Create objects from constructors which are defined in obj.js
let projectTitle = new obj.InquirerInpNumCnfrmPass("projtitle", "input", "What is the name of your Project");
let readmeTitle = new obj.InquirerInpNumCnfrmPass("readmetitle", "input", "What is the title of your Readme?");
let description = new obj.InquirerInpNumCnfrmPass("description", "input", "Please enter a description about your project.");
let contributors = new obj.InquirerInpNumCnfrmPass("contributor", "input", "Please enter the contributors to the project and if more than one separate via a comma.");
let usage = new obj.InquirerInpNumCnfrmPass("usage", "input", "Please add a link to a video of how / when to use the code.");
let preReq = new obj.InquirerInpNumCnfrmPass("prereq", "input", "What are the required prerequisites or project dependancies?");
let installation = new obj.InquirerInpNumCnfrmPass("installation", "input", "Please define the installation steps separated by a comma Eg 1 - npm init, 2 - npm install inquirer?");
let builtWith = new obj.InquirerInpNumCnfrmPass("builtwith", "input", "Please define the technologies used in this project separated by a comma Eg 1 - HTML, 2 - JS?");
let license = new obj.InquirerListChkBx("license", "list", "Select correct license type of this project.",licList, "Proprietary" );
let gitHubLink = new obj.InquirerInpNumCnfrmPass("githublink", "input", "Please provide the link to your project's GitHub repository?");
let gitHubClone = new obj.InquirerInpNumCnfrmPass("githubclone", "input", "Please provide the link to initiate a clone of your project's repository?");
let gitHubEmail= new obj.InquirerInpNumCnfrmPass("githubemail", "input", "Please provide your public GitHub profile email contact?");
let gitHubUName= new obj.InquirerInpNumCnfrmPass("githubname", "input", "Please provide your GitHub username?");


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
 //Call write file function after promise is ok
  writeToFile(answers);
  
  })
  //Catch error and console log it
  .catch(error => {
    console.log (error);
  });



// TODO: Create a function to write README 
function writeToFile(answers) {

//Define read me filename with file extension  
let filename = `${answers.readmetitle}.md`
//Read me file template
let readmeFormatted = 
`
#${answers.projtitle}
## `filename`

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]


<br />
<p align="center">
  <a href="${answers.githublink}">${answers.githubname}
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">${answers.projtitle}</h3>

  <p align="center">
  <h4 align="center">Project Description</h3>
    ${answers.description}
    <br />
    <a href="${answers.githublink}<strong>Link to the repo. »</strong></a>
    <br />
    <br />
    <a href="${answers.githublink}/issues">Bug Report</a>
    ·
    <a href="${answers.githublink}/issues">Feature Request</a>
  </p>
</p>


<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#builtWith">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

${answers.description}

[![Product Name Screen Shot][product-screenshot]](https://example.com)


### Built With

${answers.builtwith}


## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

*${answers.prereq}
  

### Installation

1. Clone the repo.
   Open Git Bash or similar into your required directory.

   git clone ${answers.githubclone}
   
2. Install NPM packages
   
   npm install

   The repo should have a package.JSON and a package-lock.JSON file which lists all the dependancies. Hence only npm install is required.
   

## Usage video

See below link for a link on how to use our code.

${answers.usage}


## Contributors

Thanks to all the contributors on this project. You are legends! 

* ${answers.contributor}

In order to contribute. Please follow the below:

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request


## License

Distributed under the folllowing license:

${answers.license}


## Contact

${answers.githubname} - ${answers.githubemail} - email

Project Link: ${answers.githublink})

`;

  fs.appendFile(filename, readmeFormatted, function (err) {
    if (err) {
    throw err;
    }
    else{
      console.log('Saved!');
    }  
  });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
//init();

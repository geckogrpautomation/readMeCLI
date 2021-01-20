// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const obj = require('./obj');
// TODO: Create an array of questions for user input
const licList = ["PDL", "GNU/LGPL" , "PrivatPermissive","Copyleft", "Proprietary"];


//Create objects from constructors which are defined in obj.js
let projectTitle = new obj.InquirerInpNumCnfrmPass("projtitle", "input", "What is the name of your Project");
let readmeTitle = new obj.InquirerInpNumCnfrmPass("readmetitle", "input", "What is the title of your Readme?");
let description = new obj.InquirerInpNumCnfrmPass("description", "input", "Please enter a description about your project.");
let contributors = new obj.InquirerInpNumCnfrmPass("contributor", "input", "Please enter the contributors to the project and if more than one separate via a comma.");
let usage = new obj.InquirerInpNumCnfrmPass("usage", "input", "Please add a link to a video of how / when to use the code.");
let preReq = new obj.InquirerInpNumCnfrmPass("prereq", "input", "What are the required prerequisites or project dependancies and if more than one separate via a comma.?");
let installation = new obj.InquirerInpNumCnfrmPass("installation", "input", "Please define the NPM installation steps separated by a comma Eg 1 - npm init, 2 - npm install inquirer?");
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


//Build read me file via template and user input
function writeToFile(answers) {

//Define read me filename with file extension  
let filename = `${answers.readmetitle}.md`

//Split user strings via , delimiter
let contributorArr = answers.contributor.split(",");

let preReqArr = answers.prereq.split(",");

let installationArr = answers.installation.split(",");

let builtWithArr = answers.builtwith.split(",");


//Define markup strings
let contributorMarkup = "";
let preReqMarkup = "";
let installationMarkup = "";
let builtWithMarkup = "";
let str = "";

//Build required markup for insertion into template for each of the required string arrays derived from the comma separated user input.
contributorArr.forEach(data => {
  str = "";
  str = (`* ${data} \n`);
  contributorMarkup = contributorMarkup.concat(str);  
});
console.log(contributorMarkup);

preReqArr.forEach(data => {
  str = "";
  str = (`* ${data} \n`);
  preReqMarkup = preReqMarkup.concat(str);  
});
console.log(preReqMarkup);

installationArr.forEach(data => {
  str = "";
  str = (`* ${data} \n`);
  installationMarkup = installationMarkup.concat(str);  
});
console.log(installationMarkup);

builtWithArr.forEach(data => {
  str = "";
  str = (`* ${data} \n`);
  builtWithMarkup = builtWithMarkup.concat(str);  
});
console.log(builtWithMarkup);

//Read me file template
let readmeFormatted = 
`

#${answers.projtitle}
<br/>
##${filename}
<br/>
<p align="center">
  <a href="${answers.githublink}">${answers.githubname}
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>
  <h2 align="center">${answers.projtitle}</h3> 
  <h4 align="center">Project Description</h3>
  <p align="center">${answers.description}    
    <br/>
    <a href="${answers.githublink}<strong>Link to the repo. »</strong></a>
    <br/>
    <br/>
    <a href="${answers.githublink}/issues">Bug Report</a>
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
      <a href="getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisite">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#usage-video">Installation</a></li>        
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>


## About The Project

${answers.description}

[![Product Name Screen Shot][product-screenshot]](https://example.com)


### Built With

${builtWithMarkup}


## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisite

${preReqMarkup}
  

### Installation

1. Clone the repo.
   Open Git Bash or similar into your required directory.

   git clone ${answers.githubclone}
   
2. Install NPM packages
   
${installationMarkup}

The repo should have a package.JSON and a package-lock.JSON file which lists all the dependancies. Hence only npm install is required.
   

## Usage video

See below link for a link on how to use our code.

${answers.usage}


## Contributing

Thanks to all the contributors on this project. You are legends! 

${contributorMarkup}

In order to contribute. Please follow the below:

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request


## License

Distributed under the folllowing license:

* ${answers.license}


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


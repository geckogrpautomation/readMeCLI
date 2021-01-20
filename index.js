// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const obj = require('./obj');
const { Console } = require("console");
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
 //Create markup text
  let markUp = createMKup(answers);
  //Check if file exist in directory
  checkFile(`${answers.readmetitle}.md`,markUp);        
  })
  //Catch error and console log it
  .catch(error => {
    console.log (error);
  });

//Build read me file via template and user input
function createMKup(answers) {

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

preReqArr.forEach(data => {
  str = "";
  str = (`* ${data} \n`);
  preReqMarkup = preReqMarkup.concat(str);  
});

installationArr.forEach(data => {
  str = "";
  str = (`* ${data} \n`);
  installationMarkup = installationMarkup.concat(str);  
});

builtWithArr.forEach(data => {
  str = "";
  str = (`* ${data} \n`);
  builtWithMarkup = builtWithMarkup.concat(str);  
});

//Read me file template
let readmeFormatted = `

#${answers.projtitle}
<br/>
##${filename}
<br/>
<p align="center">
  <a href="${answers.githublink}">
    <img src="./pic/readme.jpg" alt="Logo" width="240" height="240">
  </a>
  <h1 align="center">Project Title - ${answers.projtitle}</h1> 
  <h2 align="center">Project Description</h2>
  <p align="center">${answers.description}    
    <br/>
    <a href="${answers.githublink}<strong>Link to the repo.</strong></a>
    <br/>
    <br/>
    <a href="${answers.githublink}/issues">Bug Report</a>
    <a href="${answers.githublink}/issues">Feature Request</a>
  </p>
</p>

<details open="open">
  <summary><h3 style="display: inline-block">Table of Contents</h3></summary>
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


## About The Project.

${answers.description}



### Built With.

${builtWithMarkup}


## Getting Started.

<h4>To get the code and download the dependancies to succesfully execute your own version see below....</h4>

### Prerequisite

${preReqMarkup}
  

### Installation

1. Clone the repo.
   Open Git Bash or similar into your required directory.

   git clone ${answers.githubclone}
   
2. Install NPM packages
   
${installationMarkup}

The repo should have a package.JSON and a package-lock.JSON file which lists all the dependancies. Hence only npm install is required. 
   

### Usage video

See below link for a link on how to use our code.

${answers.usage}


## Contributing

Thanks to all the contributors on this project. You are legends! 

${contributorMarkup}

In order to contribute. Please follow the below:

1. Fork our Project.
2. Start creating your extra features. (git checkout -b feature/AmazingFeature)
3. Commit your changes. (git commit -m 'Add some AmazingFeature')
4. Push to the branch you have checked out. (git push origin feature/AmazingFeature)
5. Create a pull request and add an admin to verify the code.

## License

Distributed under the folllowing license:

* ${answers.license}


## Contact

${answers.githubname} - ${answers.githubemail} - email

Project Link: ${answers.githublink})

`;
return readmeFormatted;
}


//Check to see if file exists.
function checkFile(filename,markUp){
   
  try {
    if(fs.existsSync(filename)) {
      console.log("The file exists. Manually delete the file.");
    } else {
      writeFile(filename,markUp);
        
    }
} catch (err) {
    console.error(err);
}


//Write file if it doesnt exist.
function writeFile(filename,markUp){
 
  fs.writeFile(filename, markUp, (err) => { 
    if (err){ 
      console.log(err); 
    }
    else { 
      console.log("<---------- File written successfully ---------->\n"); 
      console.log("<---------- The contents of the file written was ---------->\n"); 
      console.log(fs.readFileSync(filename, "utf8")); 
    }
    
})}

//End writeFile function
}


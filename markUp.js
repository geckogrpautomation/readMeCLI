//Build read me file via template and user input
function createMKup(answers) {

  //Define read me filename with file extension  
  let filename = `${answers.readmetitle}.md`
  
  //Create bullet point markup for the require data
  let contributorMarkup = buildBulletSection(answers.contributor, ",");
  let preReqMarkup = buildBulletSection(answers.prereq, ",");
  let installationMarkup = buildNPMBulletSection(answers.installation,",");
  let builtWithMarkup = buildBulletSection(answers.builtwith, ",");
  
    
  //Read me file template with auto filled placeholders
  let readmeFormatted = `
  
  #${answers.projtitle}
  <br/>
  ##${filename}
  <br/>
  
  ![Issues]
  ![Forks]
  ![Stars]
  ![License]   


  <p align="center">
    <a href="${answers.githublink}">
      <img src="./pic/readme.jpg" alt="Logo" width="240" height="240">
    </a>
    <h1 align="center">Project Title - ${answers.projtitle}</h1> 
    <h2 align="center">Project Description</h2>
    <p align="center">${answers.description}    
      <br/>
      <a href="${answers.githublink}"<strong>Link to the repo.</strong></a>
      <br/>
      <br/>
      <a href="${answers.githublink}/issues">Bug Report</a>
      <a href="${answers.githublink}/issues">Feature Request</a>
    </p>
  </p>
  
  <details open="open">
    <summary><h3>Table of Contents</h3></summary>
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
        <li><a href="#usage-video">Usage Video</a></li>        
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact/Questions</a></li>
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
  
  Distributed under the following license:
  
  ![License] 
  
  
  ## Contact / Questions.
  
  Github - ${answers.githubname} --- Email -  ${answers.githubemail}
  
  Project Link: -  ${answers.githublink}

 
  [Issues]: https://img.shields.io/github/issues/geckogrpautomation/readMeCLI
  [Forks]: https://img.shields.io/github/forks/geckogrpautomation/readMeCLI
  [Stars]: https://img.shields.io/github/stars/geckogrpautomation/readMeCLI
  [License]: https://img.shields.io/github/license/geckogrpautomation/readMeCLI

  `;
    return readmeFormatted;
  }
  
  
// Split strings based upon   
function buildBulletSection(str,del){

  let arr = "";
  arr = str.split(del);
  str = "";

  arr.forEach(data => {
    str = str.concat(`* ${data} \n `);  
  });

  return str;
}

module.exports = {
  createMKup,
  buildBulletSection,
}

function buildNPMBulletSection(str,del){

  let arr = "";
  arr = str.split(del);
  str = "";

  arr.forEach(data => {
    str = str.concat("```sh \n * " + `${data}  \n` + "```" );  
  });

  return str;
 
}

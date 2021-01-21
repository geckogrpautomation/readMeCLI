
const fs = require("fs");
//Check to see if file exists.
function checkFile(filename,markUp){
     
    try {
      if(fs.existsSync(filename)) {
        console.log("The readme filename is already being used. Please manually delete the file and re-run the application.");
      } else {
        wxFile(filename,markUp);
          
      }
  } catch (err) {
      console.error(err);
  }

  //End checkFile function
  //Write file if the file doesn't exist.
  function wxFile(filename,markUp){
    try {
      fs.writeFile(filename, markUp, (err) => { 
        if (err){
          console.log(err);
        }        
        else{ 
          console.log("<---------- File written successfully ---------->\n"); 
          console.log("<---------- The contents of the file written was ---------->\n"); 
          console.log(fs.readFileSync(filename, "utf8")); 
        } 
      })
    }        
    catch (err) {
        console.error(err);
    }       
  }
  }
  
  //End writeFile function
  module.exports = {
    checkFile,
  }
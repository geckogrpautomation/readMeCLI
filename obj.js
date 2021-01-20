

//Create Inquirer constructor for input, number, confirm & password
function InquirerInpNumCnfrmPass(name, type, message) 
{
  this.name = name;
  this.type = type;
  this.message = message;
}

//Create Inquirer constructor for list, checkbox
function InquirerListChkBx(name, type, message, choices, defChoice) {
  this.name = name;
  this.type = type;
  this.message = message;
  this.choices = choices;
  this.default = defChoice;
}

module.exports = {
  InquirerInpNumCnfrmPass,
  InquirerListChkBx,
}



const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members) === false) return false;
  
  let result = '';
  for(let i = 0; i < members.length;i++){
    if(typeof(members[i]) === 'string') {
      result += members[i].split(' ').join('')[0];
    }
  }
  
  return false ? result === '' : result.toUpperCase().split('').sort().join('');
};

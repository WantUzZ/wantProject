
function login(username,pwd){
  /** */
  console.info('login...')
  if(username === 'want' && pwd === '12345'){
      return true;
  }else
  return false;
}

module.exports = {
  login
};
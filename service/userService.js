
function login(username,pwd){
  /** */
  console.info('login...')
  return new Promise((resolve,reject)=>{
    if(username === 'want' && pwd === '123456'){
      resolve(true);
    }else{
      resolve(false);
    }
  });
}

module.exports = {
  login
};
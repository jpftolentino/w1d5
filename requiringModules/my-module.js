/*
  Module exports an object containing a function
  -> the function should invoke a 'private' function
  -> private function must not be exported

  Implement a Node.js script that imports the module
  -> Must invoke at least one exported function
*/

function publicMethod (){

  console.log("This is a public method that can be called because of the imported module");
  privateMethod();

}


function privateMethod(){
  return console.log("This is a private method");
}

module.exports = {

  publicMethod: publicMethod

};
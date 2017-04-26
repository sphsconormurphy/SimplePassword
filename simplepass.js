//type checkString below
function checkString(str){
  if(str.length >=8 && str.length <=20){
    return str;
  }
  else{
    throw new RangeError("Password length must be [8, 20] characters")
  }
}


//type getString below
function getString(str){
  try{
    str = checkString(str);
    console.log("it worked");
  }
  catch(e){
    console.log(e.message);
    getString("12345678");
  }
}

getString("asdf");
getString("asdasfasdf");

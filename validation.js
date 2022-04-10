
function validateEmail(email){
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
    function verifyEmail()
    {
      let email = document.getElementById("email");
      let emailIsValid =  document.getElementById("emailisvalid");
      let msg=""
      let valid=false
      if(email.value.length>0)
      {
     if(validateEmail(email.value))
        {
          emailIsValid.removeAttribute("class")
          emailIsValid.classList.add("valid-style")
          msg="email is valid"
          valid=true
        }
        else{
          emailIsValid.removeAttribute("class")
          emailIsValid.classList.add("invalid-style")
           msg="email is not valid"
        }
      emailIsValid.innerHTML=msg;
     
      console.log(email.value);
    }else
    {
      emailIsValid.innerHTML=""
    }
  return valid
  }
    function validateEmail(email){
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
  function validatePassword(password){
    return password.match(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
    );
  };
  /*
  /^
    (?=.*\d)          // should contain at least one digit
    (?=.*[a-z])       // should contain at least one lower case
    (?=.*[A-Z])       // should contain at least one upper case
    [a-zA-Z0-9]{8,}   // should contain at least 8 from the mentioned characters
  $/*/
  function verifyPassword()
    {
      let password= document.getElementById("password");
      let passwordIsValid =  document.getElementById("passwordisvalid");
      let msg=""
      let valid=false
     
       if(password.value.length>0)
       {
         if(!validatePassword(password.value))
         {
          passwordIsValid.removeAttribute("class")
          passwordIsValid.classList.add("invalid-style")
          msg="Password should contain at least one digit, one lower case,least one upper case and 8 from the mentioned characters "
         }else
         {
          passwordIsValid.removeAttribute("class")
           passwordIsValid.classList.add("valid-style")
          msg="Password is valid"
          valid=true
         }
       passwordIsValid.innerHTML=msg;
        console.log(password.value);
      
    }else{
      passwordIsValid.innerHTML=""
    }
    return valid
  }
    
       function showPassword() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  function validateInputs() {
    if(verifyPassword() && verifyEmail() )
    alert("your email and password are valid")
    else
    alert("your email and password are not valid")
    
  }
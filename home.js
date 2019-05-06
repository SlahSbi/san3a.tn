
//form validation

function validateForm() {
  let fn = document.forms["validationk"]["fname"].value;
  let p = document.forms["validationk"]["Password"].value;
  let e = document.forms["validationk"]["E-mail"].value;
  let rep = document.forms["validationk"]["rePassword"].value;
  let regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
  let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})")
  if (fn == "")  {
    alert("please enter your name")
    return false
  }

  if(!strongRegex.test(p)){
  alert("Invalid Password")
  return false; }

  if ((rep) !== p){
    alert("please enter the same password")
return false 
}

  if(!regex.test(e)){
    alert("bad e-mail adress")
    return false
  }

  window.location='./san3aProfile.html';
  
}



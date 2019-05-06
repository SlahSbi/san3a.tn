
//form validation

function validateForm() {
    let fn = document.forms["validationp"]["fname"].value;
    let ln = document.forms["validationp"]["lastname"].value;
    let a = document.forms["validationp"]["Adress"].value;
    let e = document.forms["validationp"]["E-mail"].value;
    let tl = document.forms["validationp"]["tel"].value;
    let regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/
    let regnum = new RegExp("^(?=.[0-9]{8,})")
    let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})")
  
    if(!strongRegex.test(p)){
    alert("Invalid Password: you must have at least one letter, one number, and 1 capital letter")
    return false; }
  
    if(!regex.test(e)){
      alert("bad e-mail adress")
      return false
    }
    if(!regnum.test(e)){
      alert("bad phone number")
      return false
    }
  
    alert('submission succeded')
    return false
    
  }
  
  
  
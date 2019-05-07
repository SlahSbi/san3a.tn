
//form validation

function validateForm() {
  let fn = document.forms["validationk"]["fname"].value;
  let p = document.forms["validationk"]["Password"].value;
  let e = document.forms["validationk"]["E-mail"].value;
  let te = document.forms["validationk"]["tel"].value;
  let ad = document.forms["validationk"]["address"].value;
  let regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
  let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})")
  let adRegex = new RegExp("^(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.{8,})")
  let teRegex = new RegExp("^(?=.*[0-9])(?=.{8,})")
  if (fn == "")  {
    alert("SVP entrer votre nom")
    return false
  }
  
  if(!adRegex.test(ad)){
    alert("Adresse non valid")
    return false
  }
  if(!strongRegex.test(p)){
  alert("Le mot de passe doit contenir au moins une lettre, un nombre")
  return false; }

  if(!regex.test(e)){
    alert("Adresse e-mail non valid")
    return false
  }

  window.location='./#';
  
}



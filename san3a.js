//form validation

function validateForm() {
    let fn = document.getElementById('#exampleInputName').value;
    let p = document.getElementById("#exampleInputPassword1").value;
    let e = document.getElementById("#exampleInputEmail1").value;
    let regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
    let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})")
    if ((fn == "")) {
      alert("please enter your name")
      return false
    }
    if(!strongRegex.test(p)){
    alert("Invalid Password: The password must be a combination of charatacters , numbers and at least a capital letter")
    return false; }

    if(!regex.test(e)){
      alert("bad e-mail adress: mail adress must contain '@' and '.'")
      return false
    }

    alert('submission succeded')
    return false
  }
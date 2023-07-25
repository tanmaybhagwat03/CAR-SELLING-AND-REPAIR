let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

document.querySelector('#login-btn').onclick = () =>{
  document.querySelector('.login-form-container').classList.toggle('active');
}

document.querySelector('#close-login-form').onclick = () =>{
  document.querySelector('.login-form-container').classList.remove('active');
  window.location.href="index.html";
}


function validateForm() {
    let x = document.forms["myForm"]["name"].value;
    let y = document.forms["myForm"]["email"].value;
  
    var letters = /^[A-Za-z]+$/;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
  
    if (x.match(letters)) {
      console.log("done....")
    }
    else {
      alert("Name must be filled out properly");
      return false;
    }
  
    if (y.match(mailformat)) {
      console.log("done....")
    }
    else {
      alert("You have entered an invalid email address!");
  
    }
  
    if (x.match(letters) && y.match(mailformat)) {
      alert("signin successful")
    }
  }

  function validateLoginForm() {
   
    let y = document.forms["myForm"]["email"].value;
  
    
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
  
   
    if (y.match(mailformat)) {
      console.log("done....")
      alert("signin successful")
    }
    else {
      alert("You have entered an invalid email address!");
  
    }
  
    
  }

const form = document.querySelector("form");
emailFL = form.querySelector(".email"),
eInput = emailFL.querySelector("input"),
passwordFL = form.querySelector(".password"),
pInput = passwordFL.querySelector("input");

form.onsubmit = (e)=>{
  e.preventDefault(); 
  (eInput.value == "") ? emailFL.classList.add("shake", "error") : checkEmail();
  (pInput.value == "") ? passwordFL.classList.add("shake", "error") : checkPass();

  setTimeout(()=>{ 
    emailFL.classList.remove("shake");
    passwordFL.classList.remove("shake");
  }, 300);

  eInput.onkeyup = ()=>{checkEmail();} 
  pInput.onkeyup = ()=>{checkPass();} 

  function checkEmail(){ 
    let email = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; 
    if(!eInput.value.match(email)){ 
      emailFL.classList.add("error");
      emailFL.classList.remove("true");
      let errorTxt = emailFL.querySelector(".error-txt");
     
      (eInput.value != "") ? errorTxt.innerText = "Please enter a valid email address" : errorTxt.innerText = "Email can't be blank";
    }else{ 
      emailFL.classList.remove("error");
      emailFL.classList.add("true");
    }
  }

  function checkPass(){ 
    if(pInput.value == ""){ 
      passwordFL.classList.add("error");
      passwordFL.classList.remove("true");
    }else{ 
      passwordFL.classList.remove("error");
      passwordFL.classList.add("true");
    }
  }


  if(!emailFL.classList.contains("error") && !passwordFL.classList.contains("error")){
    window.location.href = form.getAttribute("action"); 
    alert("You have LOGIN successfully!!");
}

      }

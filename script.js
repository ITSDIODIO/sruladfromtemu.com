document.addEventListener("DOMContentLoaded", () => {
    const passwordInput = document.querySelector('input[type="password"]:nth-of-type(1)');
    const passwordStrengthMessage = document.createElement("p");
    passwordStrengthMessage.style.marginTop = "5px";
    passwordStrengthMessage.style.fontWeight = "bold";
  
    passwordInput.parentElement.appendChild(passwordStrengthMessage);
  
    passwordInput.addEventListener("input", () => {
      const password = passwordInput.value;
  
      if (/^[a-zA-Z]+$/.test(password)) {
        
        passwordStrengthMessage.textContent = "პაროლის სიმძლავრე: სუსტი";
        passwordStrengthMessage.style.color = "red";
      } else if (/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/.test(password)) {
       
        passwordStrengthMessage.textContent = "პაროლის სიმძლავრე: საშუალო";
        passwordStrengthMessage.style.color = "orange";
      } else if (
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]+$/.test(password)
      ) {
        
        passwordStrengthMessage.textContent = "პაროლის სიმძლავრე: ძლიერი";
        passwordStrengthMessage.style.color = "green";
      } else {
        passwordStrengthMessage.textContent = "";
      }
    });
  });
  
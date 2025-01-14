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
  //cookies
  document.addEventListener("DOMContentLoaded", function () {
    const cookiesBox = document.querySelector(".cookies");
    const acceptBtn = document.querySelector("#acceptBtn");
    const declineBtn = document.querySelector("#declineBtn");

    
    if (!localStorage.getItem("cookiesAccepted")) {
        cookiesBox.classList.add("show");
    }

   
    document.querySelector('[onclick="changeLanguage(\'ka\')"]').addEventListener('click', function() {
      changeLanguage('ka');
  });
  
  document.querySelector('[onclick="changeLanguage(\'en\')"]').addEventListener('click', function() {
      changeLanguage('en');
  });
  

    
    declineBtn.addEventListener("click", function () {
        cookiesBox.classList.remove("show");
        
    });
});


document.addEventListener("DOMContentLoaded", function () {
  const movieList = document.querySelector(".movie-list");
  const loadMoreButton = document.querySelector("#loadMore");

  let visibleMovies = 6; 
  const totalMovies = movieList.children.length; 

  
  function updateMovies() {
    for (let i = 0; i < totalMovies; i++) {
      if (i < visibleMovies) {
        movieList.children[i].style.display = "block";
      } else {
        movieList.children[i].style.display = "none";
      }
    }
  }

  updateMovies();

  
  loadMoreButton.addEventListener("click", function () {
    if (visibleMovies < totalMovies) {
      visibleMovies += 1; 
      updateMovies();
    }
   
    if (visibleMovies >= totalMovies) {
      loadMoreButton.style.display = "none";
    }
  });
});

//ვითომ ენგლიშ
document.addEventListener("DOMContentLoaded", function() {
  const translations = {
      "en": {
          "signin-title": "Sign In",
          "username-label": "Username or Email",
          "password-label": "Password",
          "signin-btn": "Log In",
          "remember-label": "Remember me"
      },
      "ka": {
          "signin-title": "ავტორიზაცია",
          "username-label": "მომხმარებილის სახელი ან ემაილი",
          "password-label": "პაროლი",
          "signin-btn": "შესვლა",
          "remember-label": "ჩემი დამახსოვრება"
      }
  };

  function changeLanguage(language) {
      const langData = translations[language];

      document.getElementById("signin-title").textContent = langData["signin-title"];
      document.getElementById("username-label").textContent = langData["username-label"];
      document.getElementById("password-label").textContent = langData["password-label"];
      document.getElementById("signin-btn").textContent = langData["signin-btn"];
      document.getElementById("remember-label").textContent = langData["remember-label"];
  }

 
  changeLanguage('ka');
});

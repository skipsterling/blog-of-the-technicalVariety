const signupForm = document.getElementById("signup-form");
const loginForm = document.getElementById("login-form");

const handleErrors = err => {
    const emailError = document.querySelector('#email-error');
    const pwordError = document.querySelector('#password-error');
    const unError = document.querySelector('#username-error');

    emailError.classList.add('hidden');
    pwordError.classList.add('hidden');
    unError.classList.add('hidden');

    const errors = err.errorList;

    errors.forEach(error => {
        if(error === 'email') {
            emailError.textContent = 'enter a valid email address';
            emailError.classList.remove('hidden');
        }
        if(error === 'password') {
            pwordError.textContent = 'your password should be atleast 8 characters long';
            pwordError.classList.remove('hidden');
        }
        if(error === 'username') {
          unError.textContent = 'enter a username';
          unError.classList.remove('hidden');
        }
        if(error === 'username exists') { 
            unError.textContent = 'someone else is using this username';
            unError.classList.remove('hidden');
        }
        if(error === 'email exists') {
            emailError.textContent = 'this email has already been used';
            emailError.classList.remove('hidden');
        }
    });
};

const handleLoginErrors = err => {
  const loginError = document.querySelector('#login-error');

  loginError.classList.add('hidden');

  if(err.errorList[0] === 'login') {
    loginError.classList.remove('hidden');
  }
}

const signup = async (event) => {
  event.preventDefault();

  const username = document.getElementById("signup-username").value;
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  try {
    const response = await fetch("/user/signup", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    });

    if (response.ok) {
      document.location.replace('/')
    } else {
      const error = await response.json();
      handleErrors(error);
    }

  } catch (err) {
    console.log(err);
  }
};

const loggingIn = async (event) => {
  event.preventDefault();

  const id = document.getElementById("login-id").value;
  const password = document.getElementById("login-password").value;

  try{
    const response = await fetch("/user/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ id, password }),
    });

    if (response.ok) {
      document.location.replace('/')
    } else {
      const error = await response.json();
      handleLoginErrors(error);
    }

  } catch (err) {
    console.log(err);
  }
};
if(signupForm) {signupForm.addEventListener("submit", signup);}
if(loginForm) {loginForm.addEventListener("submit", loggingIn);}
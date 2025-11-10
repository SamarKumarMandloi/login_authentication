if (document.title === "Register") {
  document.getElementById("registerBtn").addEventListener("click", () => {
    const user = document.getElementById("regUser").value.trim();
    const pass = document.getElementById("regPass").value.trim();
    const pass2 = document.getElementById("regPass2").value.trim();
    const msg = document.getElementById("msg");

    if (!user || !pass || !pass2) {
      msg.textContent = "All fields are required.";
      return;
    }

    if (pass !== pass2) {
      msg.textContent = "Passwords do not match.";
      return;
    }

    if (localStorage.getItem(user)) {
      msg.textContent = "Username already exists.";
      return;
    }

    localStorage.setItem(user, pass);
    msg.style.color = "green";
    msg.textContent = "Registered successfully!";
    setTimeout(() => {
      window.location.href = "login.html";
    }, 1200);
  });
}

if (document.title === "Login") {
  document.getElementById("loginBtn").addEventListener("click", () => {
    const user = document.getElementById("loginUser").value.trim();
    const pass = document.getElementById("loginPass").value.trim();
    const msg = document.getElementById("msg");
    const storedPass = localStorage.getItem(user);

    if (!user || !pass) {
      msg.textContent = "All fields are required.";
      return;
    }

    if (storedPass === pass) {
      sessionStorage.setItem("loggedUser", user);
      window.location.href = "home.html";
    } else {
      msg.textContent = "Invalid username or password.";
    }
  });
}

if (document.title === "Home") {
  const user = sessionStorage.getItem("loggedUser");
  const welcomeMsg = document.getElementById("welcomeMsg");
  const logoutBtn = document.getElementById("logoutBtn");

  if (!user) {
    window.location.href = "login.html";
  } else {
    welcomeMsg.textContent = `Welcome, ${user}!`;
  }

  logoutBtn.addEventListener("click", () => {
    sessionStorage.removeItem("loggedUser");
    window.location.href = "login.html";
  });
}

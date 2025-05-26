const scriptURL = 'https://script.google.com/macros/s/AKfycbxTBWVi5Th5H8GkaCRMS97k2epD64-nPazQq7Cgu64P83_yykunMhJ5WIzrYqgb9R0h/exec';

window.onload = () => {
  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark");
  }
};

function toggleDarkMode() {
  document.body.classList.toggle("dark");
  localStorage.setItem("darkMode", document.body.classList.contains("dark"));
}

function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
}

function submitName() {
  const name = document.getElementById("username").value;
  if (!name) {
    alert("Please enter your name.");
    return;
  }

  document.getElementById("name-display").textContent = "Thank you, " + name + "!";

  fetch(scriptURL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ name })
  })
  .then(response => {
    if (response.ok) {
      document.getElementById("dynamic-name").textContent = name;
    } else {
      alert("Failed to submit name.");
    }
  })
  .catch(error => {
    console.error('Error!', error.message);
  });
}

function showDetails() {
  const password = prompt("Enter password to view details:");
  if (password === "1234") {
    document.getElementById("details").style.display = "block";
  } else {
    alert("Incorrect password!");
  }
}

function showDetails() {
    const password = prompt("Enter password to view details:");
    if (password === "1234") {
      document.getElementById("details").style.display = "block";
    } else {
      alert("Incorrect password!");
    }
  }
  

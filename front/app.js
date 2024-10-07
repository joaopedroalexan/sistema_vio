const { json } = require("body-parser");

//Acessa o objeto "document" que representa a pagina html
document
  .getElementById("register-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("nome");
    const cpf = document.getElementById("cpf");
    const email = document.getElementById("email");
    const password = document.getElementById("senha");
    fetch("http://localhost:5000/api/v1/user", {
      method: "POST",
      headers: {
        "Content-Type": application / json
      },

      body:JSON.stringify({name, cpf, email, password}),
    });
  });

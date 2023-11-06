function generaStringa() {
    const nome = document.getElementById("nome").value;
    const user = document.getElementById("user").value;
    const link = document.getElementById("link").value;
    const password = document.getElementById("password").value;

    const data = {
        user: user,
        nome: nome,
        link: link,
        password: password
    };

    const jsonString = JSON.stringify(data);

    const container = document.getElementById("container");
    const stringElement = document.createElement("p");
    stringElement.textContent = jsonString;
    container.appendChild(stringElement);
}

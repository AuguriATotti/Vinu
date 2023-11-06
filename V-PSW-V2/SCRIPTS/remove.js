function eseguiRicerca() {
    const searchTerm = document.getElementById("ricerca").value.toLowerCase();

    const risultati = users.filter((utente) => {
        return (
            utente.user.toLowerCase().includes(searchTerm) ||
            utente.nome.toLowerCase().includes(searchTerm) ||
            utente.link.toLowerCase().includes(searchTerm)
        );
    });

    const container = document.getElementById("container");
    container.innerHTML = "";

    if (risultati.length > 0) {
        risultati.forEach((utente) => {
            const jsonString = JSON.stringify(utente, null, 2);

            const stringElement = document.createElement("p");
            stringElement.textContent = jsonString;

            container.appendChild(stringElement);
        });
    } else {
        const noResultsMessage = document.createElement("p");
        noResultsMessage.textContent = "Nessun risultato trovato.";
        container.appendChild(noResultsMessage);
    }
}
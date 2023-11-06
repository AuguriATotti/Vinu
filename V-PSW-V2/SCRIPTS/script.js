// Funzione per copiare la password nella clipboard
function copiaUserOrPassword(userOrPassword,isUser) {
    const textarea = document.createElement('textarea');
    textarea.value = userOrPassword;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    var str = 'Password'
    if(isUser === true){
        str = "User";
    }
    alert(str +' copiata nella clipboard. (Daje)');
}

// Funzione per mostrare la password
function mostraPassword(userId, password) {
    const passwordElement = document.getElementById(`password-${userId}`);
    passwordElement.textContent = password;
}


// Funzione per nascondere la password
function nascondiPassword(userId) {
    const passwordElement = document.getElementById(`password-${userId}`);
    passwordElement.textContent = '******';
}



document.addEventListener('DOMContentLoaded', () => {
    const userList = document.getElementById('userList');
    const searchBar = document.getElementById('searchBar');

   // Funzione per visualizzare gli utenti in HTML
// Funzione per visualizzare gli utenti in HTML
function mostraUtenti(utenti) {
    userList.innerHTML = '';
    utenti.forEach((user) => {
        const listItem = document.createElement('li');
        listItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');

        // Aggiungi il nome con spaziatura
        const nomeElement = document.createElement('span');
        nomeElement.textContent = user.nome;
        nomeElement.classList.add('list-item');
        listItem.appendChild(nomeElement);

        // Aggiungi l'utente con spaziatura
        const userElement = document.createElement('strong');
        userElement.textContent = user.user;
        userElement.classList.add('list-item');
        listItem.appendChild(userElement);
        listItem.innerHTML += `
        <button class="btn btn-sm btn-outline-secondary" onclick="copiaUserOrPassword('${user.user}',true)">
            <i class="fas fa-copy"></i>
        </button>
        `;
        // Aggiungi un'icona per il link
        listItem.innerHTML += `<i class="fas fa-link list-item"></i>`;

        // Aggiungi il link con spaziatura
        const linkElement = document.createElement('a');
        linkElement.href = user.link;
        linkElement.target = '_blank';
        var linkTrim = user.link;
        linkElement.textContent = linkTrim.substring(4, 15); //user.link;
        linkElement.classList.add('list-item');
        listItem.appendChild(linkElement);

        // Aggiungi un'icona per la password

        // Aggiungi la password con copia, mostrare, nascondi e spaziatura
        listItem.innerHTML += `
            <i class="fas fa-key list-item"></i>
            <span class="badge badge-info list-item" id="password-${user.user}">******</span>
            <button class="btn btn-sm btn-outline-secondary" onclick="copiaUserOrPassword('${user.password}',false)">
                <i class="fas fa-copy"></i>
            </button>
            <button class="btn btn-sm btn-outline-secondary" onclick="mostraPassword('${user.user}', '${user.password}')">
                <i class="fas fa-eye"></i>
            </button>
            <button class="btn btn-sm btn-outline-secondary" onclick="nascondiPassword('${user.user}')">
                <i class="fas fa-eye-slash"></i>
            </button>
        `;

        userList.appendChild(listItem);
    });
}



    // Funzione per la ricerca degli utenti
    searchBar.addEventListener('input', () => {
        const ricerca = searchBar.value.toLowerCase();
        const utentiFiltrati = users.filter((user) =>
            user.user.toLowerCase().includes(ricerca) ||
            user.nome.toLowerCase().includes(ricerca) ||
            user.link.toLowerCase().includes(ricerca)
        );
        mostraUtenti(utentiFiltrati);
        if (ricerca === 'srilanka' || ricerca === 'sri lanka') {
            animatedCursor();
            setBackGround();
            createImageContainer();
            alert("Daje (Contattare Circelli)");
        }
        
    });

    // Iniziale visualizzazione degli utenti
    mostraUtenti(users);
});




function setBackGround(){
    const mainElement = document.getElementById('main');

    // Aggiungi uno sfondo con un'immagine attenuata e trasparente
    mainElement.style.backgroundImage = 'url("./IMG/roba_di_vinu.jpg")'; // Sostituisci 'url-dell-immagine.jpg' con il percorso dell'immagine desiderata
    mainElement.style.backgroundColor = 'rgba(255, 255, 255, 1.6)'; // Imposta il colore di sfondo bianco con un'opacità del 60%
    mainElement.style.backgroundBlendMode = 'lighten'; // Imposta il blend mode per ottenere un effetto di attenuazione
    mainElement.style.backgroundSize = 'cover'; // Adatta l'immagine alla dimensione del contenitore
    mainElement.style.backgroundPosition = 'center'; // Centra l'immagine all'interno del contenitore
}

function animatedCursor(){
    // Crea l'elemento div con la classe 'custom-cursor'
    const customCursor = document.createElement('div');
    customCursor.classList.add('custom-cursor');

    // Aggiungi il cursore al corpo del documento
    document.body.appendChild(customCursor);

    // Aggiungi l'evento mousemove all'elemento customCursor
    document.addEventListener('mousemove', (e) => {
        customCursor.style.left = e.pageX + 'px';
        customCursor.style.top = e.pageY + 'px';
    });
}


function createImageContainer() {
    // Crea un nuovo elemento div per il contenitore
    const imageContainer = document.createElement('div');
    imageContainer.className = 'image-container';

    // Crea un'immagine e imposta il percorso dell'immagine
    const imageElement = document.createElement('img');
    imageElement.src = './IMG/circelli.gif'; // Sostituisci con il percorso dell'immagine desiderata
    imageElement.alt = 'Immagine Politicamente Corretta';

    // Imposta le regole CSS per il contenitore e l'immagine
    imageContainer.style.maxWidth = '100%';
    imageContainer.style.maxHeight = '100%';
    imageContainer.style.overflow = 'hidden';

    imageElement.style.width = '100%';
    imageElement.style.height = 'auto';

    // Aggiungi l'immagine all'interno del contenitore
    imageContainer.appendChild(imageElement);

    // Aggiungi il contenitore all'elemento con l'ID "sidebar"
    const sidebar = document.getElementById('sidebar');
    sidebar.appendChild(imageContainer);
}
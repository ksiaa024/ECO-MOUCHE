function showForm(option) {
    const formContainer = document.getElementById('form-container');
    const thankYouMessage = document.getElementById('thank-you-message');

    // Réinitialise le conteneur et cache le message de remerciement
    formContainer.innerHTML = '';
    thankYouMessage.style.display = 'none';

    if (option === 'don') {
        formContainer.innerHTML = `
            <form onsubmit="handleSubmit(event)">
                <h2>Faire un Don</h2>
                <label for="nom">Nom :</label>
                <input type="text" id="nom" name="nom" required>
                <label for="prenom">Prénom :</label>
                <input type="text" id="prenom" name="prenom" required>
                <label for="email">Email :</label>
                <input type="email" id="email" name="email" required>
                <label for="id">ID :</label>
                <input type="text" id="id" name="id" required>
                <label for="montant">Montant du Don :</label>
                <input type="number" id="montant" name="montant" required>
                <button type="submit">Envoyer</button>
            </form>
        `;
    } else if (option === 'location') {
        formContainer.innerHTML = `
            <form onsubmit="handleSubmit(event)">
                <h2>Utiliser le Service</h2>
                <label for="nom">Nom :</label>
                <input type="text" id="nom" name="nom" required>
                <label for="prenom">Prénom :</label>
                <input type="text" id="prenom" name="prenom" required>
                <label for="email">Email :</label>
                <input type="email" id="email" name="email" required>
                <label for="id">ID :</label>
                <input type="text" id="id" name="id" required>
                <label for="duree">Durée de location (en jours) :</label>
                <input type="number" id="duree" name="duree" required>
                <button type="submit">Envoyer</button>
            </form>
        `;
    }

    // Affiche le formulaire
    formContainer.classList.add('active');
}

function handleSubmit(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Affiche le message de remerciement
    const thankYouMessage = document.getElementById('thank-you-message');
    thankYouMessage.style.display = 'block';

    // Efface le formulaire
    const formContainer = document.getElementById('form-container');
    formContainer.innerHTML = '';
}


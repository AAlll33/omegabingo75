// Ejemplo de función para cargar "Mis Proyectos" desde Firestore
function loadProjects() {
    db.collection("proyectos").get().then((querySnapshot) => {
        const updatesList = document.getElementById('updates-list');
        updatesList.innerHTML = ''; // Limpiar la lista
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            const listItem = document.createElement('li');
            // Aquí puedes usar una URL de imagen de Cloudinary que guardaste en Firestore
            listItem.innerHTML = `<a href="${data.link}"><img src="${data.imageUrl}" alt="${data.title}"> ${data.title}</a>`;
            updatesList.appendChild(listItem);
        });
    }).catch((error) => {
        console.error("Error al cargar proyectos: ", error);
    });
}

// Llamar a la función al cargar la página (después de que Firebase esté inicializado)
// loadProjects();

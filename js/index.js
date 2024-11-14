const habilidad = document.getElementById("skills-lenguajes");

skills.forEach(skill => {
    const div = document.createElement("div");
    const img = document.createElement("img");
    img.src = skill.img;
    img.alt = skill.nombre;

    if (skill.nombre === "GitHub") {
        img.style.backgroundColor = "white";
        img.style.borderRadius = "50%";
    }

    div.appendChild(img);
    habilidad.appendChild(div);
});

// Verificar si el modo oscuro está activado en sessionStorage y aplicarlo
const modoOscuroActivo = sessionStorage.getItem('modoOscuro') === 'true';
if (modoOscuroActivo) {
    document.body.classList.add('modo-oscuro');
    document.getElementById('modoOscuroBoton').textContent = '☀️';  // Cambiar el texto del botón si está activado
}

// Cambiar el estado de modo oscuro y guardarlo en sessionStorage
document.getElementById('modoOscuroBoton').addEventListener('click', function () {
    const body = document.body;
    const modoOscuroActivo = body.classList.toggle('modo-oscuro');
    sessionStorage.setItem('modoOscuro', modoOscuroActivo); // Guardar el estado en sessionStorage
    this.textContent = modoOscuroActivo ? '☀️' : '🌙'; // Actualizar el texto del botón
});

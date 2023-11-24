const habilidad = document.getElementById("skills-lenguajes");

skills.forEach((skill) =>{
    const div = document.createElement("div");
    div.innerHTML = `
        <img src="${skill.img}" alt="skills">
    `
    habilidad.appendChild(div);
});
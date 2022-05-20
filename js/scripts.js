window.onload = ()=>{
    getListadoAlumnos()
}

function getListadoAlumnos() {
    fetch("https://apirest-estudiantes1dam.herokuapp.com",{ method: 'GET'})
        .then(response => response.json())
        .then(data =>mostrarAlumnos(data))
}

function mostrarAlumnos(json) {
    let select = document.getElementById('cuerpoTabla');
    for (const selectKey in json) {
        for (let i = 0; i <json[selectKey].length ; i++) {
            let fila = document.createElement("tr")
            fila.innerHTML = "<td>" + json[selectKey][i]["id"] + "</td>" +
                "<td>" + json[selectKey][i]["nombre"] + "</td>" +
                "<td>" + json[selectKey][i]["curso"] + "</td>" +
                "<td>" + json[selectKey][i]["notas"][0]["asignatura"] + "</td>" +
                select.appendChild(fila);
        }
    }
}


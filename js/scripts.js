window.onload = ()=>{
    getListadoAlumnos()
}


function getListadoAlumnos() {
    fetch("https://apirest-estudiantes1dam.herokuapp.com",{ method: 'GET'})
        .then(response => response.json())
        .then(data =>
            mostrarAlumnos(data)
        )
}

function mostrarAlumnos(json) {
    let select = document.getElementById('cuerpoTabla');
    for (const selectKey in json) {
        for (let i = 0; i <json[selectKey].length ; i++) {
            let fila = document.createElement("tr")
            fila.innerHTML = "<td>" + json[selectKey][i]["id"] + "</td>" +
                "<td>" + json[selectKey][i]["nombre"] + "</td>" +
                "<td>" + json[selectKey][i]["curso"] + "</td>" +
                "<td>" + "<li>"+json[selectKey][i]["notas"][0]["asignatura"]+" - "+json[selectKey][i]["notas"][0]["nota"]+"</li>"  +
                "<li>"+json[selectKey][i]["notas"][1]["asignatura"]+" - "+json[selectKey][i]["notas"][1]["nota"]+"</li>"+
                "<li>"+json[selectKey][i]["notas"][2]["asignatura"]+" - "+json[selectKey][i]["notas"][2]["nota"]+"</li>"+
                "<li>"+json[selectKey][i]["notas"][3]["asignatura"]+" - "+json[selectKey][i]["notas"][3]["nota"]+"</li>"+
                "<li>"+json[selectKey][i]["notas"][4]["asignatura"]+" - "+json[selectKey][i]["notas"][4]["nota"]+"</li>"+
                "<li>"+json[selectKey][i]["notas"][5]["asignatura"]+" - "+json[selectKey][i]["notas"][5]["nota"]+"</li>"+
                "</td>"
                select.appendChild(fila);
        }
    }
}


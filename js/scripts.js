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

function calificaciones(nota) {
    if (nota >=9){
        return "Sobresaliente"
    }else if (nota < 9 && nota >= 7 ){
        return "Notable"
    }else if (nota < 7 && nota >= 6){
        return "Bien"
    }else if (nota < 6 && nota >= 5){
        return "Suficiente"
    }else if (nota < 5){
        return "Insuficiente"
    }

}

function calcularMedia(array) {
    let media = 0
    array.forEach(n => {
        media +=n
    })
    return (media/array.length).toFixed(2)
}

function mostrarAlumnos(json) {
    let select = document.getElementById('cuerpoTabla');
    
    for (const selectKey in json) {
        for (let i = 0; i <json[selectKey].length ; i++) {
            
            let fila = document.createElement("tr")
            let nota = json[selectKey][i]["notas"]
            let arrayNotas = [nota[0]["nota"],nota[1]["nota"],nota[2]["nota"],nota[3]["nota"],nota[4]["nota"],nota[5]["nota"]]
            
            fila.innerHTML = "<td>" + json[selectKey][i]["id"] + "</td>" +
                "<td>" + json[selectKey][i]["nombre"] + "</td>" +
                "<td>" + json[selectKey][i]["curso"] + "</td>" +
                "<td>" +
                "<li>"+nota[0]["asignatura"]+" - "+nota[0]["nota"]+"</li>"+
                "<li>"+nota[1]["asignatura"]+" - "+nota[1]["nota"]+"</li>"+
                "<li>"+nota[2]["asignatura"]+" - "+nota[2]["nota"]+"</li>"+
                "<li>"+nota[3]["asignatura"]+" - "+nota[3]["nota"]+"</li>"+
                "<li>"+nota[4]["asignatura"]+" - "+nota[4]["nota"]+"</li>"+
                "<li>"+nota[5]["asignatura"]+" - "+nota[5]["nota"]+"</li>"+
                "</td>"+
                "<td>"+
                "<li>"+calificaciones(nota[0]["nota"]) +"</li>"+
                "<li>"+calificaciones(nota[1]["nota"]) +"</li>"+
                "<li>"+calificaciones(nota[2]["nota"]) +"</li>"+
                "<li>"+calificaciones(nota[3]["nota"]) +"</li>"+
                "<li>"+calificaciones(nota[4]["nota"]) +"</li>"+
                "<li>"+calificaciones(nota[5]["nota"]) +"</li>"+
                "</td>"+
                "<td>"+ calcularMedia(arrayNotas) +"</td>"
                select.appendChild(fila);
        }
    }
}


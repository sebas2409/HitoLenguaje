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
    }else{
        return "No se puede calificar"
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
    let alumnos = json.Alumnos

    for (const alumnosKey in alumnos) {

        let fila = document.createElement("tr")
        let notas = alumnos[alumnosKey].notas
        let arrayNotas = []

        for (const NotasKey in notas) {
            arrayNotas.push(notas[NotasKey].nota)
        }

        fila.innerHTML=
            "<td>"+alumnos[alumnosKey].id +"</td>"+
            "<td>"+alumnos[alumnosKey].nombre +"</td>"+
            "<td>"+alumnos[alumnosKey].curso +"</td>"+
            "<td>"+
            "<li>"+notas[0].asignatura+" - "+notas[0].nota+"</li>"+
            "<li>"+notas[1].asignatura+" - "+notas[1].nota+"</li>"+
            "<li>"+notas[2].asignatura+" - "+notas[2].nota+"</li>"+
            "<li>"+notas[3].asignatura+" - "+notas[3].nota+"</li>"+
            "<li>"+notas[4].asignatura+" - "+notas[4].nota+"</li>"+
            "<li>"+notas[5].asignatura+" - "+notas[5].nota+"</li>"+
            "</td>"+
            "<td>"+
            "<li>"+calificaciones(notas[0].nota)+"</li>"+
            "<li>"+calificaciones(notas[1].nota)+"</li>"+
            "<li>"+calificaciones(notas[2].nota)+"</li>"+
            "<li>"+calificaciones(notas[3].nota)+"</li>"+
            "<li>"+calificaciones(notas[4].nota)+"</li>"+
            "<li>"+calificaciones(notas[5].nota)+"</li>"+
            "</td>"+
            "<td>"+calcularMedia(arrayNotas)+"</td>"
        select.appendChild(fila)
    }

}

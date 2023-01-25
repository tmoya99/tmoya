

document.getElementById('masinfouca').onclick=function(){
    console.log("Mostrar info de la carrera de la UCA")
    document.getElementById('detallesacademicosuca').style.display = 'block';
    document.getElementById('masinfouca').style.display = 'none';
    }

document.getElementById('menosinfouca').onclick=function(){
        console.log("Ocultar info de la carrera de la UCA")
        document.getElementById('detallesacademicosuca').style.display = 'none';
        document.getElementById('masinfouca').style.display = 'block';
    }
    
document.getElementById('masinfobrighton').onclick=function(){
        console.log("Mostrar info de la carrera del colegio Brighton")
        document.getElementById('detallesacademicosbrighton').style.display = 'block';
        document.getElementById('masinfobrighton').style.display = 'none';
        document.getElementById('separacion').style.display = 'none';
        }
    
document.getElementById('menosinfobrighton').onclick=function(){
            console.log("Ocultar info de la carrera del colegio Brighton")
            document.getElementById('detallesacademicosbrighton').style.display = 'none';
            document.getElementById('masinfobrighton').style.display = 'block';
        }


/*De acá para abajo estoy tratando de que, al seleccionar en el indice, se pinte el titulo, y,
al hacer click en otra parte, se despinte*/
        
document.getElementById('perfilpersonal').onclick=function(){
    console.log("Pintar el titulo que queremos ver")
    document.getElementById('perfil-personal').style.backgroundColor = 'rgb(255, 255, 112)';
}

document.getElementById('expprofesional').onclick=function(){
    console.log("Pintar el titulo que queremos ver")
    document.getElementById('exp-profesional').style.backgroundColor = 'rgb(255, 255, 112)';
}

document.getElementById('historialacademico').onclick=function(){
    console.log("Pintar el titulo que queremos ver")
    document.getElementById('historial-academico').style.backgroundColor = 'rgb(255, 255, 112)';
}

document.getElementById('botoncertificados').onclick=function(){
    console.log("Pintar el titulo que queremos ver")
    document.getElementById('Certificados').style.backgroundColor = 'rgb(255, 255, 112)';
}

document.getElementById('botoncursos').onclick=function(){
    console.log("Pintar el titulo que queremos ver")
    document.getElementById('Cursos').style.backgroundColor = 'rgb(255, 255, 112)';
}

document.getElementById('botonidiomas').onclick=function(){
    console.log("Pintar el titulo que queremos ver")
    document.getElementById('idiomas').style.backgroundColor = 'rgb(255, 255, 112)';
}

    document.getElementById('main').onclick=function(){
        console.log("Despintamos el titulo")
        document.getElementById('exp-profesional').style.backgroundColor = 'white';
        document.getElementById('perfil-personal').style.backgroundColor = 'white';
        document.getElementById('historial-academico').style.backgroundColor = 'white'
        document.getElementById('Certificados').style.backgroundColor = 'white'
        document.getElementById('Cursos').style.backgroundColor = 'white'
        document.getElementById('idiomas').style.backgroundColor = 'white'
    }

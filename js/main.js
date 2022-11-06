var muestraimagen = document.getElementById("visor")
document.getElementById("boton-crecimiento").addEventListener("click",function(){
    muestraimagen.src="images/1mentalidad de crecimiento.jpg";

});
document.getElementById("boton-valor-error").addEventListener("click",function(){
    muestraimagen.src="images/2error.jpg";
});
document.getElementById("boton-mujer-exitosa").addEventListener("click",function(){
    muestraimagen.src="images/3mujeres exitosas.jpg";
});
document.getElementById("boton-estereotipos").addEventListener("click",function(){
    muestraimagen.src="images/4estereotipos.jpeg";
});
document.getElementById("boton-promover-ciencia").addEventListener("click",function(){
    muestraimagen.src="images/5promober la ciencia.jpg";
});

/*************cambio de color de seccion por medio de un botón *********************** */

let bOscuro = document.getElementById("boton-oscuro");
let bClaro = document.getElementById("boton-claro");
let igualdad = document.getElementById("igualdad");

bOscuro.addEventListener("click",function(){
    
    igualdad.style.backgroundColor = "#000000";
    igualdad.style.color = "#FFFFFF";
});
bClaro.addEventListener("click",function(){
    igualdad.style.backgroundColor = "#F78B6D";
    igualdad.style.color = "#333333";
});

let frases=[];
frases[0]="Solo sé que nada sé";
frases[1]="Vine vi y venci";
frases[2]="En tiempos de crisis, solo la imaginación es mas importante que la inteligencia";
frases[3]="Si quieres cambiar al mundo cambiate a ti mismo";

let botonfrase1 = document.getElementById("frase1");
let botonfrase2 = document.getElementById("frase2");
let botonfrase3 = document.getElementById("frase3");
let botonfrase4 = document.getElementById("frase4");

let fraseDia = document.getElementById("frase-dia");

botonfrase1.addEventListener("click", function(){
    fraseDia.innerHTML = frases[0];
})
botonfrase2.addEventListener("click", function(){
    fraseDia.innerHTML = frases[1];
})
botonfrase3.addEventListener("click", function(){
    fraseDia.innerHTML = frases[2];
})
botonfrase4.addEventListener("click", function(){
    fraseDia.innerHTML = frases[3];
})



	
let nombrePersonaje = document.getElementById("nombre-personaje");
let frasePersonaje = document.getElementById("frase-personaje");
let frasedelpersonaje = []
let personajes = [];
frasedelpersonaje[0] =" “La imaginación es la facultad del descubrimiento, preeminentemente. Es lo que penetra en los mundos nunca vistos a nuestro alrededor, los mundos de la ciencia.”"
frasedelpersonaje[1] ="“Es importante hacer un sueño de la vida y de la realidad de un sueño.”"
frasedelpersonaje[2] ="“La ciencia hace a la gente tratar de luchar desinteresadamente para llegar a la verdad y la objetividad, enseña a la gente a aceptar la realidad, con asombro y admiración, por no mencionar el asombro y alegría que el orden natural de las cosas produce en el verdadero científico.”"
frasedelpersonaje[3] ="“La recompensa del joven científico es la excitación y emoción que se siente al ser la primera persona en la historia en ver o entender una cosa nueva. Nada puede compararse a esa experiencia…”"
frasedelpersonaje[4] ="“A medida que uno se acerca, la vista crece y crece, hasta que por fin, a través de esa misma estrecha ventana está uno contemplando el universo.”"

personajes[0] = "Ada Lovelace";
personajes[1] = "Marie Curie";
personajes[2] = "Lise Meitner";
personajes[3] = "Cecilia Payne-Gaposchkin";
personajes[4] = "Rachel Louis Carson"; 


let aleatorio = Math.floor(Math.random() * 5 )
frasePersonaje.innerHTML = frasedelpersonaje[aleatorio]
nombrePersonaje.innerHTML = personajes[aleatorio];

///intervalo de tiempo  setTimeout
let personajedia = document.getElementById("personajedia");
function cambiarColorPersonaje(){
   personajedia.style.backgroundColor = "#000000";
   personajedia.style.color = "#FFFFFF";
}
setTimeout(cambiarColorPersonaje,3000);
//INTERVALOS DE TIEMPO - setInterval
function cambiarPersonaje(){
    let aleatorio = Math.floor(Math.random() * 5 )
    frasePersonaje.innerHTML = frasedelpersonaje[aleatorio]
    nombrePersonaje.innerHTML = personajes[aleatorio];
}
setInterval(cambiarPersonaje, 1000);


//GALERIA con botones

let nombredeHabilidad = document.getElementById("nombre-habilidad");
let nombrehabilidad=[]
nombrehabilidad[0] = "resolver-problemas";
nombrehabilidad[1] = "sociabilidad";
nombrehabilidad[2] = "trabajo-en-equipo";
nombrehabilidad[3] = "creatividad";
nombrehabilidad[4] = "escucha-activa";



let habilidades = [];
habilidades[0] = "images/resolverproblemas.jpeg";
habilidades[1] = "images/sociabilidad.jpeg";
habilidades[2] = "images/trabajoenequipo.jpeg";
habilidades[3] = "images/creatividad.jpg";
habilidades[4] = "images/escuchaactiva.jpg";

let bRetroceder = document.getElementById("boton-retroceder");
let bAvanzar = document.getElementById("boton-avanzar");
let muestra = document.getElementById("muestra");
let cajaP = document.getElementById("caja-posicion");
let posicion = 0;

actualizarImagen();

function actualizarImagen(){
    cajaP.innerHTML = posicion + 1;
    muestra.src = habilidades[posicion];
    // muestra nombre de habilidad
    nombredeHabilidad.innerHTML = nombrehabilidad[posicion];
    //
}

bAvanzar.addEventListener("click", function(){
        posicion++;
        if(posicion == 5){
            posicion = 0;
        }
        actualizarImagen();
}); 

bRetroceder.addEventListener("click", function(){
        posicion--;
        if(posicion == -1){
            posicion = 4;
        }
        actualizarImagen();
}); 


//let muestraintegrante = document.getElementById("muestra")

//API FETCH
let bEdwin = document.getElementById("boton-edwin");
let bAlexander = document.getElementById("boton-alexander");
let bMercedes = document.getElementById("boton-mercedes");
let bAngel = document.getElementById("boton-angel");
let cIntegrantes = document.getElementById("caja-integrantes");

//let muestraimagen = document.getElementById("muestra-visor");



bEdwin.addEventListener("click",function(){
   
    fetch('integrantes/edwin.html')
    .then(response =>response.text())
    .then(data =>{
        //console.log(data);
        cIntegrantes.innerHTML = data;
    //     muestraimagen.src="images/1mentalidad de crecimiento.jpg";
   });
});

//document.getElementById("boton-edwin").addEventListener("click",function(){
  //  muestraimagen.src="images/1mentalidad de crecimiento.jpg";
 //});

bAlexander.addEventListener("click",function(){
    fetch('integrantes/alexander.html')
    .then(response =>response.text())
    .then(data =>{
        //console.log(data);
        cIntegrantes.innerHTML = data;
    });
});
bMercedes.addEventListener("click",function(){
    fetch('integrantes/mercedes.html')
    .then(response =>response.text())
    .then(data =>{
        //console.log(data);
        cIntegrantes.innerHTML = data;
    });
});
bAngel.addEventListener("click",function(){
    fetch('integrantes/angel.html')
    .then(response =>response.text())
    .then(data =>{
        //console.log(data);
        cIntegrantes.innerHTML = data;
    });
});



// API FETC para cargar páginas

let iInstituciones = document.getElementById("menu-item-instituciones");
let iMiembros = document.getElementById("menu-item-miembros");

let mContent = document.getElementById("main-content");

iInstituciones.addEventListener("click",function(){
    fetch('paginas/instituciones.html')
    .then(response => response.text())
    .then(data =>{
        //console.log(data);
        mContent.innerHTML = data;
    });
});

iMiembros.addEventListener("click",function(){
    fetch('paginas/miembros.html')
    .then(response => response.text())
    .then(data =>{
        //console.log(data);
        mContent.innerHTML = data;
    });
});

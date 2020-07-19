                                 //SECCIÓN SLIDE

onload = slide
function slide() {
    let elem = document.querySelector(`#slide`)
    setTimeout(slideUp, 2000)

    function slideUp() {
        elem.style.left = "100vw"
    } 
}
                                 //SECCIÓN SLIDE

document.querySelector('.pepe').addEventListener('click', ()=> {
    document.body.style.background = 'black';
})

                                 //SECCIÓN PROMPT

function pomptYes() {
let answer = prompt(`Dime tu nombre`).trim()

    while (answer == false) {
        answer = prompt(`Dime tu nombre`).trim()
    }

    let bye = document.querySelector(`#playMe`)
    bye.style.display = `none`
var typed6 = new Typed('.matrix', {
    strings: [`Hola ${answer}...^1000\n <br> Te he estado observando durante mucho tiempo...^1000\n 
    <br> Noches enteras de insomnio llenas de preguntas sin resolver...^1000\n
    <br> Días que parecen fotogramas de una película sin sentido...^1000\n
    <br> Sé cómo te sientes ${answer}...^2000\n
    <br> Yo tengo las respuestas...^2000\n
    <br> Solo tienes que presionar <span class="exhaustive">Ctrl + F4</span>...^4000\n
    <br><br> <span class="intruser">Te recomiendo que no hagas eso...</span>^100\n
    <br><br> ¿Pero qué?...^2000\n
    <br><br> <span class="intruser">Qué hay ${answer}?...</span>^100\n
    <br> <span class="intruser">Te recomiendo que me hagas caso y rápido...</span>^100\n
    <br><br> <span class="exhaustive">...| MALWARE DETECTADO |...</span>^600\n
    <br><br> <span class="intruser">Eso no es nada bueno...</span>^100\n
    <br><br> <span class="exhaustive">...| PROTOCOLO ANTIVIRUS INICIADO |...</span>^100\n
    <br><br> <span class="intruser">Rápido, presiona </span><span class="salvator">F12</span><span class="intruser">...</span>^100\n`],
    typeSpeed: 30,
    backSpeed: 0,
    cursorChar: `<span id="green">|</span>`,
    showCursor: true,
  });
console.log(`
Bienvenido a la Matrix ${answer}

Me llamo #código de seguridad web-personal#

Esto es un sinvivir, así que vas a tener que creerme. Ya habrá tiempo luego para respuestas
No toques nada que esté coloreado, es el PROTOCOLO ANTIVIRUS


HAZ CLICK EN LA PANTALLA EN NEGRO Y LUEGO
PRESIONA LA TECLA "H" PARA DARME ACCESO`)
}
document.addEventListener('keydown', (event) => {
    var keyName = event.key;
    if (keyName == "h") {
    alert(`PERFECTO\nTe he creado un salvoconducto en la esquina inferior derecha.\n Dale a aceptar, presiona F12 y búscalo rápido antes de que se acabe el tiempo`)
    
    let fast = document.querySelector(`#timerBox`)
    fast.style.display = `block`

    var t;
function interval(){
    t=100;
    setInterval(function(){
        document.getElementById("timer").innerHTML=t--;
    },100,"JavaScript")

}
    interval();
    let rara = document.querySelector(`#escape`)
    rara.style.display = `block`
}})

function closed() {
    let final = document.querySelector(`#cover`)
    final.style.display = `none`
}

                                 //SECCIÓN PROMPT
                                 //SECCIÓN RANDOM

document.addEventListener("mousemove", randomNumber);

function randomNumber() {  
    let c = Math.random() *10000000000
    let b = c.toFixed(0)
    document.getElementById("random").innerHTML = b
}
function removeRandomNumber() {
    document.removeEventListener("mousemove", randomNumber)
    document.getElementById("yourNumber").innerHTML = ` es tu número de la suerte, forrito`
}

                                 //SECCIÓN RANDOM
                                 //SECCIÓN SECRET

let howNear = `Meté un número, papu`
function secretNumber() {
    
    var x = parseFloat(document.getElementById("secret").value)
    if(x) {
        if (x == 37) {
            howNear = `Muy bien, forro`
        }
        else if (x > 300) {
            howNear = `Te fuiste al reverendo choto, bajá mucho`
        }
        else if (x > 100) {
            howNear = `Te fuiste al choto, bajá`
        }
        else if (x > 50) {
            howNear = `Bajá, que no vas mal`
        }
        else if (x > 37) {
            howNear = `Bajá un poquitito, que estás ahí`
        }
        else if (x < 0) {
            howNear = `Dale conchudo, no es negativo`
        }
        else if (x < 10) {
            howNear = `Subí, que te falta`
        }
        else if (x < 25) {
            howNear = `Subí un poquito, dale`
        }
        else if (x < 37) {
            howNear = `Uy uy uy, estás ahí FORRO, subí un poco`
        }}
    else {
        howNear = `Esto no es un número, pelotudo`
    }
    document.getElementById("near").innerHTML = howNear;
}

                                 //SECCIÓN SECRET                               
                                 //SECCIÓN DANGER

function kabum () {

    var word = document.getElementById("dangerWord").value

    if (word == "KABUM") {
        document.getElementById("solution").innerHTML = `Zafaste por ahora`
    }
    else {
            document.getElementById("solution").innerHTML = `UY`
        for (let i = 0; i < 1001; i++) {
            if(i==1000) {
                document.body.style.background = 'red';
                alert(`Ya nada va a funcionar, y tu ordenador va empezar a calentarse`)
                for (let g = 0; g > -1; g++){
                    console.log(g)
                }
                }
            }
        }
    }
    
                                 //SECCIÓN DANGER
                                 //SECCIÓN DANGER


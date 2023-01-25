

//BOTONES PARA ENCRIPTAR Y DESENCRIPTAR
const btnEncrypt = document.getElementById('btnEncrypt');
const btnDecrypt = document.getElementById('btnDecrypt');

//Area para introducir texto
const textEndecrypt = document.getElementById('textEncrypt');

//Area para mostrar el texto encriptado y desencriptado
const newText = document.getElementById('newText');

const btnCopy = document.getElementById('btnCopy');


//Boton para configurar las llaves
const btnConfig = document.getElementById('btnConfig');
//
const btnEncryptDecrypt = document.getElementById('btnEncryptDecrypt');


//elemento form
const configForm = document.getElementById('configForm');




//boton para enviar los datos del from
const btnSubmit = document.getElementById('btnSubmit');




const divOutput = document.getElementById('divOutput');
const divInput  = document.getElementById('divInput');

const imgText = document.getElementById('imgText');

const textEncrypt = document.getElementById('textEncrypt');

//llaves de encriptacion
var Vowels = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat"
}



configForm.addEventListener("keyup", ()=>{

    btnSubmit.style.display = "block"

//Evento para cambiar las llaves de encriptacion
btnSubmit.addEventListener('click', () => {

    Vowels.a = configForm.elements[0].value
    Vowels.e = configForm.elements[1].value
    Vowels.i = configForm.elements[2].value
    Vowels.o = configForm.elements[3].value
    Vowels.u = configForm.elements[4].value

    console.log(Vowels)


    btnSubmit.style.backgroundColor = "#20840E";
    btnSubmit.style.boxShadow = "none";
    btnSubmit.value = "✔️Changes saved";

    setTimeout(()=>{
    btnSubmit.style.display = "none"
    btnSubmit.style.backgroundColor = "rgb(0,140,255)";
    btnSubmit.style.boxShadow = "rgb(0,140,255);";
    btnSubmit.value = "Save Changes";
    }, 2000)
  
})


})




//FUNCION PARA ENCRIPTAR
function Encrypt(text) {

    const array = text.split('') //descomponemos el text en un arreglo 
    console.log(array)
    for (let i = 0; i < text.length; i++) { //iteramos el texto

        switch (text[i]) {
            case 'a': array[i] = Vowels.a;  //buscamos las letras con el swithc en el arreglo y las cambios con el for
                break;
            case 'e': array[i] = Vowels.e;
                break;
            case 'i': array[i] = Vowels.i;
                break;
            case 'o': array[i] = Vowels.o;
                break;
            case 'u': array[i] = Vowels.u;
                break;
        }
    }

    const endString = array.join('') //unimos el arreglo y lo convertimos en un string
    console.log(endString);

    return endString
}




//FUNCTION PARA DESENCRIPTAR
function Decrypt(text) {
    //usamos al funcion remplazar para buscar las 
    const changeA = text.replaceAll(Vowels.a, 'a');
    const changeE = changeA.replaceAll(Vowels.e, 'e');
    const changeI = changeE.replaceAll(Vowels.i, 'i');
    const changeO = changeI.replaceAll(Vowels.o, 'o');
    const endString = changeO.replaceAll(Vowels.u, 'u');

    console.log(endString);
    return endString
}




//EVENTOS CLICK DE LOS BOTENES PARA ENCRIPTAR Y DESENCRIPTAR


//evento Encryptar
btnEncrypt.onclick = () => {

    newText.innerHTML = Encrypt(textEndecrypt.value);
};

//evento Desencriptar
btnDecrypt.onclick = () => {

    newText.innerHTML = Decrypt(textEndecrypt.value);
};

//evento copiar
btnCopy.onclick = () => {
    navigator.clipboard.writeText(newText.innerHTML);
};

//evento ocultar configuracion
btnConfig.onclick = () => {
   
    configForm.style.display = "flex";
    divOutput.style.display = "none";
    divInput.style.display = "none";
}


btnEncryptDecrypt.onclick = ()  =>{
    configForm.style.display = "none";
    divOutput.style.display = "flex";
    divInput.style.display = "flex";
}


 


textEncrypt.addEventListener('keyup', (e) =>{
    imgText.style.display = "none";
    btnCopy.style.display = "block";
    if(!e.target.value){
        imgText.style.display = "flex";
        btnCopy.style.display = "none";
        newText.innerHTML = "";
    }
})

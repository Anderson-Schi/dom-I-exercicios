const frutas = ["laranja", "limão", "uva"];

 const fruta1 = document.getElementById("fruta-1").innerHTML = frutas[0];
 const fruta2 = document.getElementById("fruta-2").innerHTML = frutas[1];
 const fruta3 = document.getElementById("fruta-3").innerHTML = frutas[2];


 fruta4 = document.getElementById("fruta-4")

 lerFruta = document.getElementById("nova-fruta")
 console.log(lerFruta.value)


  addFruta = () => {
    fruta4.innerHTML = lerFruta.value
    console.log("Fruta adicionada: ", fruta4.innerHTML);
    
    lerFruta.value = " "


  };


// OUTRA FORMA -------------------------------------------------

// const newFruit = function(){
//     lerFruta = document.getElementById("nova-fruta")
//    console.log("Fruta: ", lerFruta.value);
//  };


// /addFruta = () => {
//     // fruta4 = document.getElementById("fruta-4").value
//     // lerFruta = document.getElementById("nova-fruta").value

//     // fruta4 = lerFruta

//     // novaFruta = document.getElementById("fruta-4").innerHTML = fruta4
   
//     // console.log("Fruta adicionada: ", novaFruta);


//   };


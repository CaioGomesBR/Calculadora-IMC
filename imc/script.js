const peso = document.getElementById("peso")


const altura = document.getElementById("altura")


const btn = document.getElementById("btn")

 let resultado= document.getElementById("resultado")



function calcular () {
  
    imc= peso.value / (altura.value * altura.value)

   /* if (imc < 18.5 ) {
      console.log ('magreza')
    } else if (imc < 24.9) {
      console.log ('normal')
    }*/


  return  imc


}


btn.addEventListener('click', function () {

       if (imc < 18.5 ) {
       document.getElementById("resultado").innerHTML= 'Seu IMC: ' + calcular().toFixed(1) + ' MAGREZA'

       } else if (imc < 24.9) {
        document.getElementById("resultado").innerHTML= 'Seu IMC: ' + calcular().toFixed(1) + ' NORMAL'
      } else if (imc < 29.9) {
        document.getElementById("resultado").innerHTML= 'Seu IMC: ' + calcular().toFixed(1) + ' SOBREPESO'
      } else if (imc < 39.9) {
        document.getElementById("resultado").innerHTML= 'Seu IMC: ' + calcular().toFixed(1) + ' OBESIDADE'
      } else if (imc > 40) {
        document.getElementById("resultado").innerHTML= 'Seu IMC: ' + calcular().toFixed(1) + ' OBESIDADE GRAVE'
      }


        
    
})


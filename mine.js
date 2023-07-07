let inp =document.getElementById("inpu")
let pp =document.getElementById("prg")
let but =document.getElementById("ptn")


// events



but.onclick = function(){

  let inputvalue = inp.value;


  if (inp.value != ''){

    pp.innerHTML = ` hello   ${inputvalue}`


    inp.value = '';

  }



}
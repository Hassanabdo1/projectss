let bttn = document.querySelector('.btn');
let bod = document.createElement("BODY");
let dii = document.querySelector(".di")


let colors   = ['red','green','blue','black','whit']
let i=0; 

bttn.onclick = function(){

    dii.style.backgroundColor = colors[i];
   
    bttn.style.backgroundColor = colors[i];
    bttn.style.color = colors[i];
    i++;


    if (i == 4){

        i = 0
    }
    
    


}
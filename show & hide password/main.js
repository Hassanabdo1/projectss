let  mybtn = document.getElementById('btn');
let  myinp = document.getElementById('myinpo');



mybtn.onclick = function(){


    if (mybtn.getAttribute('data-text') ==  'show'){

        myinp.setAttribute ('type' ,'text');
        mybtn.setAttribute('data-text' , 'hide')
        mybtn.innerHTML = 'hide'
        mybtn.style.backgroundColor = 'green'
        
        


    }else{
        myinp.setAttribute ('type' ,'password');
        mybtn.setAttribute('data-text' , 'show')
        mybtn.innerHTML = 'show'
        mybtn.style.backgroundColor = 'black'
        mybtn.style.color = 'white'

        

       
    }



}






let myimg = document.getElementById('slideshow');
let imges = ['img/img2.jpg','img/img3.jpg','img/img4.jpg','img/img1.jpg'];
let i =0 ;




function slideshow(){


    myimg.setAttribute( "src" , imges[i] );
    i++;
    setTimeout(function() {slideshow()},3000)

    if ( i == imges.length){

        i=0;
        
    }


 }

slideshow();

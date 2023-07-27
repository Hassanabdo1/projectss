let dynamictext = document.querySelector("h1 span")
let words = ["HTML","CSS","Javascript","bootstap","C"];
let wordindex = 0;
let charindex = 0;
let isdeleting = false;
let typeeffect = ()=> {
    const currentword = words[wordindex];
    const currentchar = currentword.substring(0,charindex );
dynamictext.textContent = currentchar;





if(!isdeleting && charindex < currentword.length){
    charindex++;
    setTimeout(typeeffect, 200);
}else if(isdeleting && charindex > 0) {
    charindex--;
    setTimeout(typeeffect, 200);
}else{
    isdeleting = !isdeleting;
    wordindex = !isdeleting ? (wordindex + 1) % words.length : wordindex;
    setTimeout(typeeffect, 1200);
    
} 
    
}
typeeffect();
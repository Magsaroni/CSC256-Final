//event listener.
document.addEventListener('DOMContentLoaded', initLinks);

var arrPictures = ["./final/RUN.png", "./final/mar.png", "./final/peacockspider.png", "./final/cowboy.png"];

//keeep track of current image
var thePic = 0;

function initLinks(){
    document.getElementById("aPrevLink").addEventListener("click", processPrevious);
    document.getElementById("aNextLink").addEventListener("click", processNext);
}

function processPrevious(event){
    event.preventDefault();

    if (thePic == 0){
        
    }
    else{
        thePic = thePic - 1;

    }
    
    document.getElementById("imgArt").src = arrPictures[thePic];
}

function processNext(event){
    event.preventDefault();
    if(thePic == arrPictures.length - 1){
       
    }
    else{
        thePic = thePic + 1;
    }
    
    document.getElementById("imgArt").src = arrPictures[thePic];
}
var x = "0.35";


function toSlide(slideA, slideB, listen1){
    var slideHA = document.getElementById(slideA);
    var slideHB = document.getElementById(slideB);
    var person = document.getElementById("personWrap");
    var sShield = document.getElementById("shieldSlide");
    sShield.style.opacity = "1";
    person.style.overflow = "hidden";

    function slideR(){
        slideHA.style.transform = "translateX(-100%) scale(" + x + ")";
        slideHB.style.transform = "translateX(0) scale(" + x + ")";
        slideHA.addEventListener("transitionend", listen1);     
    }

    function slideL(){
        slideHB.style.transform = "translateX(100%) scale(" + x + ")";
        slideHA.style.transform = "translateX(0) scale(" + x + ")";
        slideHB.addEventListener("transitionend", listen1);
    }
    return {
        slideR: slideR,
        slideL: slideL
    }
}

function scaleSlide(slide, clear){
    var slideH = document.getElementById(slide);
    var person = document.getElementById("personWrap");
    var sShield = document.getElementById("shieldSlide");

    sShield.style.opacity = "0"; 
    person.style.overflow = "inherit";
    slideH.style.transform = "scale(1)";
    window.setTimeout(clear, 0);
    document.getElementById("buttonLeft").style.opacity = "1";
    document.getElementById("buttonRight").style.opacity = "1";
}

function clearListen(id, scale, to, btnRR, btnRA, btnLR, btnLA){
    var slideH = document.getElementById(id);
    slideH.removeEventListener("transitionend", scale);
    slideH.removeEventListener("transitionend", to);
    document.getElementById("buttonRight").removeEventListener("click", btnRR);
    document.getElementById("buttonRight").addEventListener("click", btnRA);
    document.getElementById("buttonLeft").removeEventListener("click", btnLR);
    document.getElementById("buttonLeft").addEventListener("click", btnLA);
}


export function slideRight(){ 
    function clearListen1(){
        clearListen("slideHolder1", toScale2, toSlide2, slideRight, rightAgain1, slideLeft, leftAgain1);
    }
    function toScale2(){
        scaleSlide("slideHolder2", clearListen1);
    }
    function toSlide2(){
        var tSli = toSlide("slideHolder1", "slideHolder2", toScale2, null);
        tSli.slideR();
    }    
    var slideH1 = document.getElementById("slideHolder1");
    slideH1.style.transform = "scale(" + x + ")";
    slideH1.addEventListener("transitionend", toSlide2);
    document.getElementById("buttonLeft").style.opacity = "0";
    document.getElementById("buttonRight").style.opacity = "0";
    
}

function rightAgain1(){
    function clearListen2(){
        clearListen("slideHolder2", toScale3, toSlide3, rightAgain1, null, leftAgain1, slideLeft);

    }
    function toScale3(){
        scaleSlide("slideHolder3", clearListen2);
    }
 
    function toSlide3(){
        var tSli = toSlide("slideHolder2", "slideHolder3", toScale3);
        tSli.slideR();
    }
    var slideH2 = document.getElementById("slideHolder2");
    slideH2.style.transform = "scale("+ x +")";
    slideH2.addEventListener("transitionend", toSlide3);
    document.getElementById("buttonLeft").style.opacity = "0";
    document.getElementById("buttonRight").style.opacity = "0";
    
}

export function slideLeft(){
    function clearListen3(){
        clearListen("slideHolder3", toScale2A, toSlide2A, slideRight, rightAgain1, slideLeft, leftAgain1);
    }
    function toScale2A(){
        scaleSlide("slideHolder2", clearListen3);
    }
    function toSlide2A(){
        var tSli = toSlide("slideHolder2", "slideHolder3", toScale2A);
        tSli.slideL();
    }
    var slideH3 = document.getElementById("slideHolder3");
    slideH3.style.transform = "scale(" + x + ")";
    slideH3.addEventListener("transitionend", toSlide2A); 
    document.getElementById("buttonLeft").style.opacity = "0";
    document.getElementById("buttonRight").style.opacity = "0";
}

function leftAgain1(){
    function clearListen4(){
        clearListen("slideHolder2", toScale1, toSlide1, rightAgain1, slideRight, leftAgain1, null);
    }
    function toScale1(){
        scaleSlide("slideHolder1", clearListen4);
    }
    function toSlide1(){
        var tSli = toSlide("slideHolder1", "slideHolder2", toScale1);
        tSli.slideL();
    }
    var slideH2 = document.getElementById("slideHolder2");
    slideH2.style.transform = "scale(" + x + ")";
    slideH2.addEventListener("transitionend", toSlide1);
    document.getElementById("buttonLeft").style.opacity = "0";
    document.getElementById("buttonRight").style.opacity = "0";
}





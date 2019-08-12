
var symbolX = document.createTextNode("\u274c");
var closebtn = document.createElement("button");
closebtn.classList.add("close-button", "fix", "top", "no-border", "z4", "left", "opacity-none");
closebtn.appendChild(symbolX);

var scrnHolder = document.createElement('div');
scrnHolder.classList.add( "scrnhold", "fix", "auto", "opacity-none");

var objA1 = document.createElement("object");
objA1.classList.add("resumepageA");
objA1.setAttribute("data", "./images/DummyTextBox.svg");
objA1.setAttribute("type", "image/svg+xml");

export function openRes(){
    var inplate = document.getElementById("innerPlate");
    var inthld = document.getElementById("introHolder");
    var abthld = document.getElementById("aboutHolder");
    var reshld = document.getElementById("resumeHolder");
    var person = document.getElementById("p-aboutPhaze");
    var bod = document.querySelector("body");
    var foot = document.querySelector("footer");
    
    function clearListen(){
        inplate.removeEventListener("transitionend", reAppend);
        closebtn.removeEventListener("click", xOut);
        inplate.removeEventListener("transitionend", fixit);
        person.removeEventListener("transitionend", toScale);
        inplate.style.position = "absolute";
    }

    function reAppend(){
        bod.appendChild(reshld);
        bod.appendChild(foot);
        abthld.removeChild(closebtn);
        window.setTimeout(clearListen, 0);
        person.style.opacity = "1";
        abthld.removeChild(scrnHolder);
    }

    function xOut(){
        inthld.style.height = "100%";
        closebtn.style.animationName= "fadeout";
        inplate.style.transform = "scale(0)";
        inplate.style.position = "absolute";
        window.scrollTo(0,document.body.scrollHeight);
        inplate.addEventListener("transitionend", reAppend);
        scrnHolder.style.opacity = "0";
    }

    function fixit(){
        abthld.appendChild(closebtn);
        inplate.style.position = "fixed";
        closebtn.style.animationName= "fadein";
        closebtn.addEventListener("click", xOut);
        scrnHolder.style.opacity = "1";
    }

    function toScale(){
        inplate.style.transform = "scale(10)";
        inplate.addEventListener("transitionend", fixit);
        abthld.appendChild(scrnHolder);
        scrnHolder.appendChild(objA1);
    }

    
    bod.removeChild(reshld);
    inthld.style.height = "0";
    bod.removeChild(foot);
    scrnHolder.style.opacity = "0";
    window.scrollTo(0,document.body.scrollHeight);
    person.style.opacity = "0";
    person.addEventListener("transitionend", toScale);
}
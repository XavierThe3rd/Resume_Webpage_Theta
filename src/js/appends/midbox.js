import {slideRight} from '../slideshow.js';
import {slideLeft} from '../slideshow.js';
import {openRes} from '../openResume';
import {book, shield} from '../apiCalls/imageCall';
import {aboutTitle, aboutSub, slideTitle1, slidePar1, slideTitle2, slidePar2, slideTitle3, slidePar3} from '../apiCalls/textCall';

export function createAbout(){
    var abt = document.createElement("div");
    abt.classList.add("about-wrap", "over-x", "flex", "column", "grid10");

    function hnpwHolder(){
        var wrapit = document.createElement("div"); 
        wrapit.classList.add("about-twrap", "column", "flex", "auto");
        abt.appendChild(wrapit);
        
        function creatHnPw(){
            var infoabt = document.createElement("div");
            infoabt.classList.add("aboutinfo-wrap", "grid10", "flex", "column");

            var div = document.createElement("div"); 
            div.classList.add("personal-wrap", "flex", "rel", "center", "grid10");
            div.setAttribute("id", "personWrap");

            var inplt = document.createElement("div");
            inplt.classList.add("inner-plate", "abs", "flex");
            inplt.setAttribute("id", "innerPlate"),

            wrapit.appendChild(book);
            wrapit.appendChild(infoabt);
            infoabt.appendChild(aboutTitle);
            infoabt.appendChild(aboutSub);
            infoabt.appendChild(div);
            div.appendChild(inplt);

            function createpButton(){
                var buttonL = document.createElement("button");
                buttonL.setAttribute("id", "buttonLeft");
                buttonL.addEventListener("click", slideLeft);
                buttonL.classList.add("leftbutton", "no-background", "no-border", "hgrid10", "grid3", "abs", "flex", "left", "z4");
                var buttonR = document.createElement("button");  
                buttonR.setAttribute("id", "buttonRight");
                buttonR.addEventListener("click", slideRight);
                buttonR.classList.add("rightbutton", "no-background", "no-border", "hgrid10", "grid3", "abs", "flex", "right", "z4");
                div.appendChild(buttonL);
                div.appendChild(buttonR);

                var ArwL = document.createTextNode("\u25c4");
                buttonL.appendChild(ArwL);

                var ArwR = document.createTextNode("\u25ba");
                buttonR.appendChild(ArwR);


                return buttonL && buttonR
            } 
            
            function createPersonal(){
                var person = document.createElement("div");
                person.classList.add("personal-holder", "abs", "btw", "flex", "z3");
                person.setAttribute("id", "p-aboutPhaze");

                div.appendChild(person);
                div.appendChild(shield);

                function createElementSlide(id, text1, text2){
                    var a = document.createElement("div");
                    a.classList.add("texthold", "flex", "column", "abs", "grid10", "hgrid10", "over-x");
                    a.setAttribute("id", id);      
                    person.appendChild(a);
                    a.appendChild(text1);
                    a.appendChild(text2)
                
                    return a;
                }

                createElementSlide("slideHolder1", slideTitle1, slidePar1);
                createElementSlide("slideHolder2", slideTitle2, slidePar2);
                createElementSlide("slideHolder3", slideTitle3, slidePar3);
                
                return person
            }

            createpButton();
            createPersonal();           
            return  div 
        }

    creatHnPw();
    return wrapit;
    }

    function resButton(){
        var button = document.createElement("button");
        button.setAttribute("id", "buttonRes");
        button.addEventListener("click", openRes);
        button.classList.add("resbutton", "no-background", "block", "z3");
        button.textContent= "View Ressume";
        abt.appendChild(button);
        return button;
    }

    hnpwHolder();
    resButton();
    return abt;
}
import {slideRight} from './slideshow.js';
import {slideLeft} from './slideshow.js';
import {openRes} from './openResume';

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
            var h = document.createElement("h3"); 
            h.classList.add("prime-f"); 
            h.textContent= "About"; h.setAttribute("id", "aboutPhaze");
            var div = document.createElement("div"); 
            div.classList.add("personal-wrap", "flex", "rel", "center", "grid10");
            div.setAttribute("id", "personWrap");
            var obj = document.createElement("object");
            obj.classList.add("book");
            obj.setAttribute("data", "./images/book.svg");
            obj.setAttribute("type", "image/svg+xml");
            obj.setAttribute("id", "theBook");
            var p = document.createElement("p");
            p.classList.add("prime-f");
            p.setAttribute("id", "pm1-Phaze");
            p.textContent= "Who's Thomas Xavier Grasso the III?";
            var inplt = document.createElement("div");
            inplt.classList.add("inner-plate", "abs", "flex");
            inplt.setAttribute("id", "innerPlate"),
            wrapit.appendChild(obj);
            wrapit.appendChild(infoabt);
            infoabt.appendChild(h);
            infoabt.appendChild(p);
            infoabt.appendChild(div);
            div.appendChild(inplt);
            
            function createPersonal(){
                var person = document.createElement("div");
                person.classList.add("personal-holder", "abs", "btw", "flex", "z3");
                person.setAttribute("id", "p-aboutPhaze");
                var shield = document.createElement("object");
                shield.classList.add("shield", "abs", "auto");
                shield.setAttribute("data", "./images/SlideShield.svg");
                shield.setAttribute("type", "image/svg+xml");
                shield.setAttribute("id", "shieldSlide")

                div.appendChild(person);
                div.appendChild(shield);

                function createElementSlide(id, text1, text2){
                    var a = document.createElement("div");
                    var b = document.createElement("h4");
                    var c = document.createElement("p");
                
                    a.setAttribute("id", id);
                    b.textContent= text1;
                    c.textContent= text2;
                
                    a.classList.add("texthold", "flex", "column", "abs", "grid10", "hgrid10", "over-x");
                    b.classList.add("prime-f", "t-center");
                    c.classList.add("prime-f", "t-center", "over-x");
                    c.setAttribute("id", "p-aboutPhaze");
                    person.appendChild(a);
                    a.appendChild(b);
                    a.appendChild(c)
                
                    return a && b && c;
                }


                createElementSlide("slideHolder1", "Somthing1", "From the suburbs of Cranberry Pa, I went to highschool at Seneca Valley where I was a member of the varcity lacross team and the quad player for the SV marching band drum-line. As an ameture artist, I combined my passion for metal work and sculpting to create metal sculptures of all kinds.");
                createElementSlide("slideHolder2", "Somthing2", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
                createElementSlide("slideHolder3", "Somthing3", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
                
                return person
            }

            function createpButton(){
                var buttonL = document.createElement("button");
                buttonL.setAttribute("id", "buttonLeft");
                buttonL.addEventListener("click", slideLeft);
                buttonL.classList.add("leftbutton", "no-background", "no-border", "hgrid10", "grid3", "abs", "center", "flex", "left", "z4");
                var buttonR = document.createElement("button");  
                buttonR.setAttribute("id", "buttonRight");
                buttonR.addEventListener("click", slideRight);
                buttonR.classList.add("rightbutton", "no-background", "no-border", "hgrid10", "grid3", "abs", "center", "flex", "right", "z4");
                div.appendChild(buttonL);
                div.appendChild(buttonR);

                var ArwL = document.createTextNode("\u25c4");
                buttonL.appendChild(ArwL);

                var ArwR = document.createTextNode("\u25ba");
                buttonR.appendChild(ArwR);


                return buttonL && buttonR
            } 
            
            createpButton();
            createPersonal();           
            return  div && h
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
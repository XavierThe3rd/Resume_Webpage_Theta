import {aboutPage} from './appends/appender.js';
import {codePage} from './appends/appender.js';
import {portfolioPage} from './appends/appender.js';
import {toColor} from './buttonEffect.js';

export function openNav(){
	var header = document.getElementById("primeNav");	
	var nav =document.createElement("nav");
	var div =document.createElement("div");
	var button1 = document.createElement("button");
	var button2 = document.createElement("button");
	var button3 = document.createElement("button");
    
    function headerFunction(height, transDelay, trans){
        header.style.height = height;
		header.style.transitionDelay= transDelay;
		header.style.transition = trans;
     }
     
     function fader(){
		 var ids = ["btn1id", "btn2id", "btn3id"];
         for(var i = 0; i < ids.length; i++){
			 document.getElementById(ids[i]).style.animationName= "fadeout";
			 document.getElementById(ids[i]).style.opacity= "1";
			 document.getElementById(ids[i]).style.transform= "translateY(0px)";
			 document.getElementById(ids[2]).style.animationDelay= "0s";
			 document.getElementById(ids[1]).style.animationDelay= "0.1s";
			 document.getElementById(ids[0]).style.animationDelay= "0.2s";
         }
	 }
	 
	 function rmvTime(){
		header.removeChild(removeNav);
	}

	 function element(varname, idname, textz, class1, class2, class3, class4, class5, class6, click){
		varname.setAttribute("id", idname);
		varname.textContent = textz;
		varname.classList.add(class1, class2, class3, class4, class5, class6);
		varname.addEventListener("click", click);
	}

    element(nav, "navid", null, "flex", "grid10", "column", null, null, null, null);
    element(div, "divid", null, "flex", "center", "row", null, null, null, null);
    element(button1, "btn1id", "about", "prime-f", "opacity-none", "point", "abs", "no-border", "no-background", aboutPage);
    element(button2, "btn2id", "code", "prime-f", "opacity-none", "point", "abs", "no-border", "no-background", codePage);
	element(button3, "btn3id", "portfolio", "prime-f", "opacity-none", "point", "abs", "no-border", "no-background", portfolioPage);
	
	if (header.style.height === "57px"){
        headerFunction("101%", "0.25s", "all 0.3s ease-in, background 0.5s ease-in");
		toColor("barz1", "btnHead", "#ff0021", null, "translateY(10px) rotate(45deg)", "translateY(1px) rotate(-45deg)", "0");
		header.appendChild(nav);
		nav.appendChild(div);
        div.appendChild(button1);
        div.appendChild(button2);
        div.appendChild(button3);

	}else{
        headerFunction("57px", "0.2s", "all 0.5s ease-out, background 1s ease-out");
        fader();
		toColor("barz1", "btnHead", "#ffffff", null, "translateY(0) rotate(0)", "translateY(0) rotate(0)", "1");
		var removeNav =document.getElementById("navid");
        header.addEventListener("transitionend", rmvTime, false);
	}
}





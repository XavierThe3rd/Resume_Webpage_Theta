import {myLogo, gearQ1, gearW, gearQ2, gearHR, gearHL, gearHB, gearQ3} from '../apiCalls/imageCall';
import {introSubTitleA, introSubTitleB} from '../apiCalls/textCall';

 export function introDiv(){
    var intDiv= document.createElement("div");
    intDiv.classList.add("intdiv");

    function createTopDivs(id, clazz1, clazz2, clazz3, clazz4, clazz5, clazz6){
        var a = document.createElement("div");
        a.setAttribute("id", id);
        a.classList.add(clazz1, clazz2, clazz3, clazz4, clazz5, clazz6);
        

        return a;
    }
    var logohld = createTopDivs("logoHolder", "mylogo-holder", "flex", "center", "grid7", "auto", "rel");
    var botrig = createTopDivs("bottomLogoTrig", "botrig", "abs", null, null, null, null);
    var ttlwrap = createTopDivs("titleWrap", "title-wrap", "flex", "grid8", "column", null, null);

    logohld.appendChild(myLogo);
    intDiv.appendChild(logohld);
    intDiv.appendChild(botrig);
    intDiv.appendChild(ttlwrap);
    logohld.appendChild(gearQ1);
    logohld.appendChild(gearW);
    logohld.appendChild(gearQ2);
    logohld.appendChild(gearHR);
    logohld.appendChild(gearHL);
    logohld.appendChild(gearHB);
    logohld.appendChild(gearQ3);
    ttlwrap.appendChild(introSubTitleA);
    ttlwrap.appendChild(introSubTitleB);

return intDiv;
}
//--creatTopPs--//


//--introDivAppends--//



//--gearTopAppends--//



//--AboutAppend--//



//--ResumeAppend--//


//--SlideShowAppends--//

var crtAbt = createAbout();

var slidehold = document.getElementById("p-aboutPhaze-trig" );
var slidebtnL = document.getElementById("buttonLeft");
var slidebtnR = document.getElementById("buttonRight");

var aboutId = document.getElementById("aboutHolder");
var introId= document.getElementById("introHolder");
var resumeId = document.getElementById("resumeHolder");



//function Load(){
    introId.appendChild(introDiv);
    aboutId.appendChild(crtAbt);
    resumeId.appendChild(infoHld);    
    resumeId.appendChild(resHld); 
      
    introPhaze("#titleWrap", "body","200%");
    introPhaze("#aboutPhaze", "#aboutHolder","200%");
    introPhaze("#pm1-Phaze", "#aboutHolder","200%");
    introPhaze("#resumePhaze", "#spec4","200%");
    
    gearRotation("#gearWhole", "90", "#introHolder", "200%");
    gearRotation("#gearQ1", "-320", "#introHolder", "200%");
    gearRotation("#gearQ2", "-320", "#introHolder", "200%");
    gearRotation("#gearQ3", "390", "#introHolder", "200%");
    
    gearRotation("#gearHalfLeft", "-170", "body", "200%");
    gearRotation("#gearHalfRight", "180", "body", "200%");
    gearRotation("#gearHalfBottom", "-180", "body", "200%");
    
    gearRotation("#gearmidWhole", "-90", "#spec4", "200%");
    gearRotation("#gearQ1res", "320", "#spec4", "200%");
    gearRotation("#gearQ2res", "360", "#spec4", "200%");
    gearRotation("#gearQ3res", "-320", "#spec4", "200%");
    gearRotation("#gearHalf1", "-180", "#spec4", "200%");
    gearRotation("#gearHalf2", "180", "#spec4", "200%");
    gearRotation("#gearHalf3", "180", "#spec4", "200%");
    gearRotation("#gearFW", "90", "#spec4", "200%");
//}
//}

function aboutPage(){

    introId.appendChild(introDiv);
    aboutId.appendChild(crtAbt);
    resumeId.appendChild(infoHld);    
    resumeId.appendChild(resHld);  
    
    introPhaze("#titleWrap", "body","200%");
    introPhaze("#aboutPhaze", "#aboutHolder","200%");
    introPhaze("#pm1-Phaze", "#aboutHolder","200%");
    introPhaze("#resumePhaze", "#spec4","200%");
    
    gearRotation("#gearWhole", "90", "#introHolder", "200%");
    gearRotation("#gearQ1", "-320", "#introHolder", "200%");
    gearRotation("#gearQ2", "-320", "#introHolder", "200%");
    gearRotation("#gearQ3", "390", "#introHolder", "200%");
    
    gearRotation("#gearHalfLeft", "-170", "body", "200%");
    gearRotation("#gearHalfRight", "180", "body", "200%");
    gearRotation("#gearHalfBottom", "-180", "body", "200%");
    
    gearRotation("#gearmidWhole", "-90", "#spec4", "200%");
    gearRotation("#gearQ1res", "320", "#spec4", "200%");
    gearRotation("#gearQ2res", "360", "#spec4", "200%");
    gearRotation("#gearQ3res", "-320", "#spec4", "200%");
    gearRotation("#gearHalf1", "-180", "#spec4", "200%");
    gearRotation("#gearHalf2", "180", "#spec4", "200%");
    gearRotation("#gearHalf3", "180", "#spec4", "200%");
    gearRotation("#gearFW", "90", "#spec4", "200%");
    
}


function codePage(){
    introId.removeChild(introDiv);
    aboutId.removeChild(crtAbt);
    resumeId.removeChild(infoHld);  
    resumeId.removeChild(resHld);
}

function codePage(){
    introId.removeChild(introDiv);
    aboutId.removeChild(crtAbt);
    resumeId.removeChild(infoHld);  
    resumeId.removeChild(resHld);
}

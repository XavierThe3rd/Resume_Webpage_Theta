

var crtAbt = createAbout(),
    slidehold = document.getElementById("p-aboutPhaze-trig"),
    slidebtnL = document.getElementById("buttonLeft"),
    slidebtnR = document.getElementById("buttonRight"),
    aboutId = document.getElementById("aboutHolder"),
    introId = document.getElementById("introHolder"),
    resumeId = document.getElementById("resumeHolder");

function aboutPage() {
    introId.appendChild(introDiv);
    aboutId.appendChild(crtAbt); 
    resumeId.appendChild(infoHld);
    resumeId.appendChild(resHld); 

   
}

function codePage() {
    introId.removeChild(introDiv); 
    aboutId.removeChild(crtAbt);
    resumeId.removeChild(infoHld); 
    resumeId.removeChild(resHld);

}

function codePage() {
    introId.removeChild(introDiv); 
    aboutId.removeChild(crtAbt);
    resumeId.removeChild(infoHld); 
    resumeId.removeChild(resHld);
}
introId.appendChild(introDiv); 
aboutId.appendChild(crtAbt);
resumeId.appendChild(infoHld);
resumeId.appendChild(resHld);

if(window.innerWidth < 760){
    gearPhoneAbout();
}

if(window.innerWidth > 760){
    gearPadAbout();
}




//introPhaze("#resumePhaze", "#spec4", "200%"), 
//gearRotation("#gearWhole", "90", "#introHolder"), 
//gearRotation("#gearQ1", "-320", "#introHolder"), 
//gearRotation("#gearQ2", "-320", "#introHolder"), 
//gearRotation("#gearQ3", "390", "#introHolder"), 
//gearRotation("#gearHalfLeft", "-170", "body"), 
//gearRotation("#gearHalfRight", "180", "body"), 
//gearRotation("#gearHalfBottom", "-180", "body"), 
/*
gearRotation("#gearWW", "-84", "#aboutPhaze", "200%"), 
gearRotation("#gearWX", "-90", "#p-aboutPhaze", "200%"), 
gearRotation("#gearWY", "-90", "#infoH4-trig", "200%"), 
gearRotation("#gearWZ", "-90", "#spec2", "200%"), 
gearRotation("#gearHV", "180", "#aboutPhaze", "200%"), 
gearRotation("#gearHW", "180", "#aboutPhaze", "200%"), 
gearRotation("#gearHX", "180", "#resumeHolder", "200%"),
gearRotation("#gearHY", "180", "#spec2", "200%"), 
gearRotation("#gearHZ", "180", "#spec2", "200%"), 
gearRotation("#gearQV", "400", "#p-aboutPhaze", "200%"), 
gearRotation("#gearQW", "-325", "#resumeHolder", "200%"), 
gearRotation("#gearQX", "395", "#spec2", "200%"), 
gearRotation("#gearQY", "-347", "#spec2", "200%"), 
gearRotation("#gearQZ", "-312", "#spec2", "200%"), 
*/
//gearRotation("#gearmidWhole", "-90", "#spec4")
//gearRotation("#gearQ1res", "374", "#spec4"), 
//gearRotation("#gearQ2res", "360", "#spec4"), 
//gearRotation("#gearQ3res", "-320", "#spec4"),
 //gearRotation("#gearHalf1", "-180", "#spec4"), 
//gearRotation("#gearHalf2", "180", "#spec4"), 
 //gearRotation("#gearHalf3", "180", "#spec4"), 
 //gearRotation("#gearFW", "90", "#spec4")
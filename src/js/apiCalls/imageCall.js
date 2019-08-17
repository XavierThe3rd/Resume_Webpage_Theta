
fetch('../../dist/data.json')
function svgImage(class1, class2, id){
    var a = document.createElement("object");
    a.classList.add(class1, class2, "abs", "z1");
    a.setAttribute("id", id);
    a.setAttribute("type", "image/svg+xml");

    return a;
}

var boxObj= document.createElement("object");
boxObj.classList.add("specobj", "abs");
boxObj.setAttribute("type", "image/svg+xml");

  var gearQ1 = svgImage("gear-quarter1", "debug-ipad", "gearQ1");
  var gearW = svgImage("gear-whole", "debug-ipad", "gearWhole");
  var gearQ2 = svgImage("gear-quarter2", "debug-ipad", "gearQ2");
  var gearHR = svgImage("gear-half-right", "debug-ipad", "gearHalfRight");
  var gearHL = svgImage("gear-half-left", "debug-ipad", "gearHalfLeft");
  var gearHB = svgImage("gear-half-bottom", "debug-ipad", "gearHalfBottom");
  var gearQ3 = svgImage("gear-quarter3", "debug-ipad", "gearQ3");
  var gearMW = svgImage("gearmid-whole", "debug-ipad", "gearmidWhole");
  var gearWW = svgImage("gear-whole-w", "debug-ipad", "gearWW");
  var gearWX = svgImage("gear-whole-x", "debug-ipad", "gearWX");
  var gearWY = svgImage("gear-whole-y", "debug-ipad", "gearWY");
  var gearWZ = svgImage("gear-whole-z", "debug-ipad", "gearWZ");
  var gearQV = svgImage("gear-quarter-v", "debug-ipad", "gearQV");
  var gearQW = svgImage("gear-quarter-w", "debug-ipad", "gearQW");
  var gearQX = svgImage("gear-quarter-x", "debug-ipad", "gearQX");
  var gearQY = svgImage("gear-quarter-y", "debug-ipad", "gearQY");
  var gearQZ = svgImage("gear-quarter-z", "debug-ipad", "gearQZ");
  var gearHV = svgImage("gear-half-v", "debug-ipad", "gearHV");
  var gearHW = svgImage("gear-half-w", "debug-ipad", "gearHW");
  var gearHX = svgImage("gear-half-x", "debug-ipad", "gearHX");
  var gearHY = svgImage("gear-half-y", "debug-ipad", "gearHY");
  var gearHZ = svgImage("gear-half-z", "debug-ipad", "gearHZ");
  var gearH1res = svgImage("gear-half1", "debug-ipad", "gearHalf1");
  var gearQ1res = svgImage("gear-quarter1res", "debug-ipad", "gearQ1res");
  var gearQ2res = svgImage("gear-quarter2res", "debug-ipad", "gearQ2res");
  var gearH2res = svgImage("gear-half2", "debug-ipad", "gearHalf2");
  var gearQ3res = svgImage("gear-quarter3res", "debug-ipad", "gearQ3res");
  var gearH3res = svgImage("gear-half3", "debug-ipad", "gearHalf3");
  var myLogo = svgImage("logo-prime")
  var book = svgImage("book", null, "theBook");
  var shield = svgImage("shield", "auto", "shieldSlide");
  var pictogramP1 = svgImage("specobj", null, null);
  var pictogramP2 = svgImage("specobj", null, null);
  var pictogramP3 = svgImage("specobj", null, null);
  var pictogramP4 = svgImage("specobj", null, null);
  var fileBP = svgImage("file-backplate", "file", "filebackPlate");
  var fileLP = svgImage("file-front", "file", "fileFleft");
  var fileRP = svgImage("file-front", "file", "fileFright");
  var fileHoldA= svgImage("file-holder", "file", "fileHolderA");
  var filePageA= svgImage("file-page", "file", "filePageA");
  var fileHoldB= svgImage("file-holder", "file", "fileHolderB");
  var filePageB= svgImage("file-page", "file", "filePageB");
  var fileHoldC= svgImage("file-holder", "file", "fileHolderC");
  var filePageC= svgImage("file-page", "file", "filePageC");

  function pngImage(id){
    var img = document.createElement("img");
    img.classList.add("work-logo", "abs", "left", "right");
    img.setAttribute("id", id);
    return img
}

var Qlogo = pngImage("imageHolder");
var foot = document.getElementById("footLogo");
  
  var gearArray = [gearW, gearMW, gearWW, gearWX, gearWY, gearWZ, gearHR, gearHL, gearHB, gearHV, gearHW, gearHX, gearHY, gearHZ, gearH1res, gearH2res, gearH3res, gearQ2, gearQ1, gearQ3, gearQV, gearQW, gearQX, gearQY, gearQZ, gearQ1res, gearQ2res, gearQ3res]
  
fetch('../../dist/data.json')
    .then(response => {
    return response.json()
})
.then(data => {
    for (var index = 0; index < gearArray.length; index++){
        gearArray[index].setAttribute("type", "image/svg+xml");  
        gearArray[index].classList.add("abs", "debug-ipad", "z1");
        if(index <= 5){
            gearArray[index].setAttribute("data", data.images.GearWhole);
        }
        if(index > 5 && index <= 16){
            gearArray[index].setAttribute("data", data.images.GearHalf);
        }
        if(index > 16){
            gearArray[index].setAttribute("data", data.images.GearQuarter);
        }
    }
    myLogo.setAttribute("data", data.images.DragonLogo);
    book.setAttribute("data", data.images.AboutBook);
    shield.setAttribute("data", data.images.SlideShield);
    pictogramP1.setAttribute("data", data.images.LightBulb);
    pictogramP2.setAttribute("data", data.images.CodePict);
    pictogramP3.setAttribute("data", data.images.DigPen);
    pictogramP4.setAttribute("data", data.images.Pencil);
    fileBP.setAttribute("data", data.images.FileBackPlate);
    fileLP.setAttribute("data", data.images.FileFrontL);
    fileRP.setAttribute("data", data.images.FileFrontR);
    fileHoldA.setAttribute("data", data.images.FileHolder);
    filePageA.setAttribute("data", data.images.FilePage);
    fileHoldB.setAttribute("data", data.images.FileHolder);
    filePageB.setAttribute("data", data.images.FilePage);
    fileHoldC.setAttribute("data", data.images.FileHolder);
    filePageC.setAttribute("data", data.images.FilePage);
    Qlogo.setAttribute("src", data.images.Qlogo);
    foot.setAttribute("data", data.images.LogoFoot);
    return foot
});

export {myLogo, gearQ1, gearW, gearQ2, gearHR, gearHL, gearHB, gearQ3, gearMW, gearWW, gearWX, gearWY, gearWZ, gearQV, gearQW, gearQX, gearQY, gearQZ, gearHV, gearHW, gearHX, gearHY, gearHZ, gearH1res, gearQ1res, gearQ2res, gearH2res, gearQ3res, gearH3res, pictogramP1, pictogramP2, pictogramP3, pictogramP4, Qlogo, shield, book, fileBP, fileLP, fileRP, fileHoldA, filePageA, fileHoldB, filePageB, fileHoldC, filePageC}; 

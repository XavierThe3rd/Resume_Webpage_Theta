
import {toColor} from './buttonEffect';

function closeChange(){
    var fileHA = document.getElementById("fileHolderA");
    var fileHB = document.getElementById("fileHolderB");
    var fileHC = document.getElementById("fileHolderC");     
    var insH1 = document.getElementById("insideH1");
    var insH2 = document.getElementById("insideH2");
    var insH3 = document.getElementById("insideH3");
    var leftP = document.getElementById("fileFleft");
    var rightP = document.getElementById("fileFright");
    var lockP = document.getElementById("fileLock");
    var backP = document.getElementById("filebackPlate");

    function opacityChange(opacA, opacL, opacIA, opacIB, opacIC, opacHA, opacHB, opacHC){
        leftP.style.opacity= opacA;
        rightP.style.opacity= opacA;
        backP.style.opacity= opacA;
        insH1.style.opacity= opacIA;
        insH2.style.opacity= opacIB;
        insH3.style.opacity= opacIC;
        lockP.style.opacity= opacL;
        fileHA.style.opacity= opacHA;
        fileHB.style.opacity= opacHB;
        fileHC.style.opacity= opacHC;   
    }
    function lateChange(transHA, transHB, transHC, translateH1, translateH2, translateH3, scale, translatexL, translatexR){       
        fileHA.style.transform= "translateY(" +transHA+ ")";
        fileHB.style.transform= "translateY(" +transHB+ ")";
        fileHC.style.transform= "translateY(" +transHC+ ")";
        insH1.style.transform= "translate(" +translateH1+ ")";
        insH2.style.transform= "translate(" +translateH2+ ")";
        insH3.style.transform= "translate(" +translateH3+ ")";
        lockP.style.transform = "scale(" +scale+ ")";
        leftP.style.transform= "translateX(" +translatexL+ ")";
        rightP.style.transform= "translateX(" +translatexR+ ")";
    }
    function transChange( HAtran, HBtran, HCtran, H1tran, H2tran, H3tran){   
        fileHA.style.transitionDelay= HAtran;
        fileHB.style.transitionDelay= HBtran;
        fileHC.style.transitionDelay= HCtran;
        insH1.style.transitionDelay= H1tran;
        insH2.style.transitionDelay= H2tran;
        insH3.style.transitionDelay= H3tran;
    }
    return {
        opacityChange: opacityChange,
        lateChange: lateChange,
        transChange: transChange
    };
}

var symbolX = document.createTextNode("\u274c");
var closebtn = document.createElement("button");
closebtn.classList.add("close-button", "fix", "top", "no-border", "z4", "left");
closebtn.setAttribute('id', 'closeid');
closebtn.appendChild(symbolX);

var scrnHolder = document.createElement('div');
scrnHolder.classList.add( "scrnhold", "fix", "auto", "opacity-none");

var objA1 = document.createElement("object");
objA1.classList.add("resumepageA");
objA1.setAttribute("data", "./images/DummyTextBox.svg");
objA1.setAttribute("type", "image/svg+xml");
var objA2 = document.createElement("object");
objA2.classList.add("resumepageA");
objA2.setAttribute("data", "./images/DummyTextBox.svg");
objA2.setAttribute("type", "image/svg+xml");

function miscChange(position, marg, zI){
    var dhf = document.getElementById("holderOfFiles");

    dhf.style.position= position;
    dhf.style.margin= marg
    dhf.style.zIndex = zI;
}

function eventListen(vary1, rmv1, add1, vary2, rmv2, vary3, add2, add3, rmvA3, rmvB3){
    vary1.removeEventListener("transitionend", rmv1);
    vary1.addEventListener("transitionend", add1);

    vary2.removeEventListener("transitionend", rmv2);
    vary3.addEventListener("transitionend", add2);

    closebtn.addEventListener('click', add3);
    closebtn.removeEventListener('click', rmvA3);
    closebtn.removeEventListener('click', rmvB3);
}

//--------------------------------------------------------------------//

function xbuttonOn(){
    var dhf = document.getElementById("holderOfFiles");

    dhf.appendChild(closebtn);
    closeid.style.animationName= "fadein";
}

function toA(){
    scrnHolder.style.opacity="1";
}

function outA(){
    var dhf = document.getElementById("holderOfFiles");
    dhf.removeChild(scrnHolder);
}

//--------------------------------------------------------------------//

export function fileOpen(){
    var lockP = document.getElementById("fileLock");
    var htag = document.getElementById("resumePhaze");

    if(lockP.style.transform === "scale(1)"){
        window.clearTimeout(closeFolder);
        htag.style.opacity = "0";
        var cCfo = closeChange();
        cCfo.opacityChange("0");
        cCfo.transChange(null, null, null, "0s", "0s", "0s");
        cCfo.lateChange(null, null, null, "-90px, -50px", "90px, -68px", "0, 125px", "0.5", "-100px", "100px");
        toColor("barz3", "fileLock", "#ff0021", "#6100ff", "translateY(17px) rotate(45deg)", "translateY(1px) rotate(-45deg)", "0");
        if(window.innerWidth >760){
            cCfo.lateChange(null, null, null, "-125px, -75px", "125px, -97px", "0, 190px", "0.5", "-135px", "135px");
        }
    }else{
        htag.style.opacity = "1";
        var cCfc = closeChange();
        cCfc.opacityChange("1");
        cCfc.lateChange(null, null, null, "0px", "0px", "0px", "1", "0px", "0px"); 
        toColor("barz3", "fileLock", "#ffffff", "#ff0021", "translateY(0) rotate(0)", "translateY(0) rotate(0)", "1");        
    }
}
//--------------------------------------------------------------------//  


function openDocumentPrime(id, opc1, opc2, opc3, opc4, opc5, opc6, opc7, opc8, trans1, trans2, trans3, trans4, trans5 ,trans6, late1, late2, late3, late4, late5, late6, late7, late8, rePQQ, xAQQ, xBQQ, xCQQ){
    var resPage = document.getElementById(id);
    var dhf = document.getElementById("holderOfFiles");

    miscChange("fixed", "auto", "5");  

    var cCod = closeChange();
    cCod.opacityChange(opc1, opc2, opc3, opc4, opc5, opc6, opc7, opc8);
    cCod.transChange(trans1, trans2, trans3, trans4, trans5 ,trans6);
    cCod.lateChange(late1, late2, late3, late4, late5, late6, late7, late8);

    document.querySelector("footer").style.display= "none";

    dhf.appendChild(scrnHolder);
    scrnHolder.appendChild(objA1);
    scrnHolder.appendChild(objA2);
    window.scrollTo(0,document.body.scrollHeight);
    
    resPage.style.transform= "scale(5)";
    
    eventListen(resPage, rePQQ, xbuttonOn, scrnHolder, outA, resPage, toA, xAQQ, xBQQ, xCQQ);

}

export function openDocumentA(){
    openDocumentPrime("filePageA", "0", "0", null, "0", "0", "0", null, null, "0s", null , null, "0s", "0s", "0s", "100%", null, null, "0px, 50px", null, null, null, null, rePositionA, xOutA, xOutB, xOutC);
}

export function openDocumentB(){
    openDocumentPrime("filePageB", "0", "0", "0", null, "0", null, "0", null, null, "0s", null, "0s", "0s", "0s", null, "100%", null, null, "0px, 40px", null, null, null, rePositionB, xOutB, xOutA, xOutC);
}

export function openDocumentC(){
    openDocumentPrime("filePageC", "0", "0", "0", "0", null, null, null, "0", null, null, "0s", "0s", "0s", "0s", null, null, "100%", null, null, "0px, 0px", null, null, rePositionC, xOutC, xOutA, xOutB);
}


function closeFolder(){
    var cCfc = closeChange(); 
    var htag = document.getElementById("resumePhaze");
    htag.style.opacity = "1";
    cCfc.opacityChange("1");
    cCfc.transChange(null, null, null, "0s", "0s", "0s");
    cCfc.lateChange(null, null, null, "0px", "0px", "0px", "1", "0px", "0px"); 
    toColor("barz3", "fileLock", "#ffffff", "#ff0021", "translateY(0) rotate(0)", "translateY(0) rotate(0)", "1"); 
}


function rePositionPrime(transA, transB, transC, lateA, lateB, lateC, lateD, lateE, lateF, lateG, lateH, lateI, lateJ, lateK, lateL){
    miscChange("relative", "0", "1");
    document.querySelector("footer").style.display= "flex";

    var cCrpa = closeChange();
    cCrpa.opacityChange("0", "1", null, "1", "1", "1", null, null);
    cCrpa.transChange(transA, transB, transC, "0.5s", "0.5s", "0.5s");
    cCrpa.lateChange(lateA, lateB, lateC, lateD, lateE, lateF, null, null, null);

    window.setTimeout(closeFolder, 1000);

    if(window.innerWidth >760){
        cCrpa.lateChange(lateG, lateH, lateI, lateJ, lateK, lateL, null, null, null);
    }
}

function rePositionA(){ 
    rePositionPrime("0s", null, null, "0", null, null, "-90px, -50px", null, null, null, null, null, "-125px, -75px");
}

function rePositionB(){
    rePositionPrime(null, "0s", null, null, "0", null, null, "90px, -68px", null, null, null, null, null, "125px, -97px");
}

function rePositionC(){
    rePositionPrime(null, null, "0s", null, null, "0", null, null, "0px, 125px", null, null, null, null, null, "0, 190px");
}

function xOutPrime(id, rePQQ){
    var resPage = document.getElementById(id);
    var dhf = document.getElementById("holderOfFiles");

    var cCxo = closeChange();
    cCxo.transChange("0s", null, null, null, "0.5s", "0.5s", "0.5s");

    closeid.style.animationName= "fadeout";
    resPage.style.transform= "scale(1)";
    scrnHolder.style.opacity = "0";

    dhf.removeChild(closebtn);
    window.scrollTo(0,document.body.scrollHeight);
    eventListen(resPage, xbuttonOn, rePQQ, resPage, toA, scrnHolder, outA, null, null, null);

}

function xOutA(){
    xOutPrime("filePageA", rePositionA);
}

function xOutB(){
    xOutPrime("filePageB", rePositionB);
}

function xOutC(){
    xOutPrime("filePageC", rePositionC);
}









        
export function closeChange(){
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



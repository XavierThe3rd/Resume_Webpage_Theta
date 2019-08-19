import {gearMW, gearWW, gearWX, gearWY, gearWZ, gearQV, gearQW, gearQX, gearQY, gearQZ, gearHV, gearHW, gearHX, gearHY, gearHZ, gearH1res, gearQ1res, gearQ2res, gearH2res, gearQ3res, gearH3res, pictogramP1, pictogramP2, pictogramP3, pictogramP4, Qlogo, fileBP, fileLP, fileRP, fileHoldA, filePageA, fileHoldB, filePageB, fileHoldC, filePageC} from '../apiCalls/imageCall'; 
import {specTitle, specSub, boxH1, boxP1, boxH2, boxP2, boxH3, boxP3, boxH4, boxP4, jobPH, jobH1, jobP1, docH} from '../apiCalls/textCall';
import {fileOpen} from '../fileanimation.js';
import {openDocumentA} from '../fileanimation';
import {openDocumentB} from '../fileanimation';
import {openDocumentC} from '../fileanimation';


export function infoHolder(){
    var specHold = document.createElement("div");
    specHold.classList.add("spec-holder", "flex", "rel", "grid9", "auto", "column");

    specHold.appendChild(gearWW);
    specHold.appendChild(gearWX);
    specHold.appendChild(gearWY);
    specHold.appendChild(gearWZ);
    specHold.appendChild(gearHV);
    specHold.appendChild(gearHW);
    specHold.appendChild(gearHX);
    specHold.appendChild(gearHY);
    specHold.appendChild(gearHZ);
    specHold.appendChild(gearQV);
    specHold.appendChild(gearQW);
    specHold.appendChild(gearQX);
    specHold.appendChild(gearQY);
    specHold.appendChild(gearQZ);
    specHold.appendChild(specTitle);
    specHold.appendChild(specSub);


    function infoBox(idz, pictogram, head, text){
        var box = document.createElement("div");
        box.classList.add("spec", "flex", "grid9", "auto", "column", "z2");
        box.setAttribute("id", idz);

        specHold.appendChild(box);
        box.appendChild(pictogram);
        box.appendChild(head);
        box.appendChild(text);

        return box;
    }

        function jobBox(logoz, title, para, open, idA){
        var job = document.createElement("button");
        job.classList.add("job-prime", "flex", "grid9", "auto", "column", "point");
        job.setAttribute("onclick", open);
        job.setAttribute("id", idA);

        var jobBtn = document.createElement("div");
        jobBtn.classList.add("button-job", "flex", "column", "auto", "left", "right", "center", "abs", "z4", "nopad");
        jobBtn.setAttribute("id", "btnJob")

        var btnBars1 = document.createElement("div");
        btnBars1.classList.add("barz2");
        var btnBars2 = document.createElement("div");
        btnBars2.classList.add("barz2");
        var btnBars3 = document.createElement("div");
        btnBars3.classList.add("barz2");

        specHold.appendChild(job);
        job.appendChild(logoz);
        job.appendChild(title);
        job.appendChild(para);
        job.appendChild(jobBtn);
        jobBtn.appendChild(btnBars1);
        jobBtn.appendChild(btnBars2);
        jobBtn.appendChild(btnBars3);

        return job;
    }

    infoBox("spec1", pictogramP1, boxH1, boxP1);
    infoBox("spec2", pictogramP2, boxH2, boxP2);
    infoBox("spec3", pictogramP3, boxH3, boxP3);
    infoBox("spec4", pictogramP4, boxH4, boxP4);
    specHold.appendChild(jobPH);
    jobBox(Qlogo, jobH1, jobP1, "openJob()", "jobPrime1");
    
    return specHold;

}


//--------------------------------------------------------------------------------------------------------------//


export function resHolder() {
    var mdiv = document.createElement("div");
    mdiv.classList.add("reshold", "grid10", "hgrid10", "center", "flex", "z1");

	function initElms() {
		var rWrap = document.createElement("div");
        rWrap.classList.add("resume-wrap", "over-x", "grid10", "flex", "rel", "column");
        rWrap.setAttribute("id", "resumeWrap");

        mdiv.appendChild(docH);
        mdiv.appendChild(rWrap);
		
        function fileDiv() {
			var fdiv = document.createElement("div");
            fdiv.classList.add("file-wrap", "rel", "flex", "center");
            fdiv.setAttribute("id", "fileWrap");
            var holdDiv = document.createElement("div");
            holdDiv.classList.add("fixed-holder", "flex", "center");
            holdDiv.setAttribute("id", "holderOfFiles");
            rWrap.appendChild(fdiv);
            //--gears--//
            fdiv.appendChild(gearMW);
            fdiv.appendChild(gearH1res);
            fdiv.appendChild(gearH2res);
            fdiv.appendChild(gearH3res);
            fdiv.appendChild(gearQ1res);
            fdiv.appendChild(gearQ2res);
            fdiv.appendChild(gearQ3res);
            fdiv.appendChild(holdDiv);
            holdDiv.appendChild(fileBP);
            holdDiv.appendChild(fileLP);
            holdDiv.appendChild(fileRP);
                   
			function inDiv(dClazz, txt,  iDcon, fileHold, filePage, click) {
                var dCon = document.createElement("div");
                var btn = document.createElement("button");

                btn.textContent= txt;
				
                dCon.classList.add(dClazz, "flex", "center", "z3");
                btn.classList.add("folder-btn", "z2", "prime-f", "t-center", "point", "abs", "no-border", "no-background");

                dCon.setAttribute("id", iDcon);
                btn.addEventListener("click", click);

				holdDiv.appendChild(dCon);
                dCon.appendChild(fileHold);
                dCon.appendChild(filePage);
				dCon.appendChild(btn);

				return dCon;
            }
            
            function primeBtn(){
                var dBtn = document.createElement("button");
                dBtn.classList.add("file-lock", "no-border", "abs", "z4", "point");
                dBtn.setAttribute("id", "fileLock");
                dBtn.addEventListener("click", fileOpen);

                var btnBars1 = document.createElement("div");
                btnBars1.classList.add("barz3");
                var btnBars2 = document.createElement("div");
                btnBars2.classList.add("barz3");
                var btnBars3 = document.createElement("div");
                btnBars3.classList.add("barz3");

                holdDiv.appendChild(dBtn);
                dBtn.appendChild(btnBars1);
                dBtn.appendChild(btnBars2);
                dBtn.appendChild(btnBars3);
                return dBtn;
                
            } 

			inDiv("inside-hold-1", "Official Resume", "insideH1", fileHoldA, filePageA, openDocumentA);
            inDiv("inside-hold-2", "Degrees, Certs, Ex.", "insideH2", fileHoldB, filePageB, openDocumentB);
            inDiv("inside-hold-3", "Other", "insideH3", fileHoldC, filePageC, openDocumentC);		

            primeBtn();
            return fdiv;
        }
        
		fileDiv();
		return rWrap;
	}
	initElms();
    return mdiv;    
}







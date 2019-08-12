import {gearMW, gearWW, gearWX, gearWY, gearWZ, gearQV, gearQW, gearQX, gearQY, gearQZ, gearHV, gearHW, gearHX, gearHY, gearHZ, gearH1res, gearQ1res, gearQ2res, gearH2res, gearQ3res, gearH3res} from './gearVar.js'; 
import {fileOpen} from './fileanimation.js';
import {openDocumentA} from './fileanimation.js';
import {openDocumentB} from './fileanimation.js';
import {openDocumentC} from './fileanimation.js';



export function infoHolder(){
    var specHold = document.createElement("div");
    specHold.classList.add("spec-holder", "flex", "rel", "grid9", "auto", "column");

    var primeH = document.createElement("h3");
    primeH.setAttribute("id", "resHPhaze");
    primeH.textContent= "Specializations"; //--!--//

    var secH = document.createElement("h4");
    secH.textContent= "What can I provide for your company?"; //--!--//
    secH.setAttribute("id", "infoH4-trig");

    var jobH = document.createElement("h3");
    jobH.textContent= "Work History"; //--!--//

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
    specHold.appendChild(primeH);
    specHold.appendChild(secH);


    function infoBox(idz, svgName, head, text){
        var box = document.createElement("div");
        box.classList.add("spec", "flex", "grid9", "auto", "column", "z2");
        box.setAttribute("id", idz);

        var boxObj= document.createElement("object");
        boxObj.classList.add("specobj", "abs");
        boxObj.setAttribute("data", svgName);
        boxObj.setAttribute("type", "image/svg+xml");

        var boxH = document.createElement("h4");
        boxH.textContent= head; 

        var boxP = document.createElement("p");
        boxP.textContent= text;

        specHold.appendChild(box);
        box.appendChild(boxObj);
        box.appendChild(boxH);
        box.appendChild(boxP);

        return box;
    }

        function jobBox(logo, title, open, idA, idB, idC){
        var job = document.createElement("button");
        job.classList.add("job-prime", "flex", "grid9", "auto", "column", "point");
        job.setAttribute("onclick", open);
        job.setAttribute("id", idA);

        var img = document.createElement("img");
        img.classList.add("work-logo", "abs", "left", "right");
        img.setAttribute("src", logo);
        img.setAttribute("id", idB);

        var jobInH = document.createElement("h4");
        jobInH.classList.add("left", "right", "abs");
        jobInH.textContent= title;
        jobInH.setAttribute("id", idC);

        var p = document.createElement("p");
        p.classList.add("abs");
        p.setAttribute("id", "pId")
        var span1 = document.createElement("span");
        span1.textContent= "from June 25, 2019  -  to August 29, 2019";
        var span2 = document.createElement("span");
        span2.textContent= "Qintel located in Pittsburgh PA. is one of the top cyber security companies in the nation which served as an excellent synthesis for my graphic design and coding background.";
        var span3 = document.createElement("span");
        span3.textContent= "Responsibilities included merchandise design, business paraphanalia design (brochures, product fliers, ex.), ux/ui for various company matenance materials, and invessigation participation.";
        p.appendChild(span1);
        p.appendChild(span2);
        p.appendChild(span3);


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
        job.appendChild(img);
        job.appendChild(jobInH);
        job.appendChild(p);
        job.appendChild(jobBtn);
        jobBtn.appendChild(btnBars1);
        jobBtn.appendChild(btnBars2);
        jobBtn.appendChild(btnBars3);

        return job;
    }

    infoBox("spec1", "./images/lightbulb.svg", "CreativeThinking", "With acurate creative thinking skills, I can carry an idea for your company and make it into an acurate, eliquent reality with several realities to choose from.");
    infoBox("spec2", "./images/code.svg", "Coding Knowledge", "Coding capabilities that are both adiquet and versitile with a knowledgable undestanding of html, scss, javascript, php, and databases.");
    infoBox("spec3", "./images/digpen.svg", "Digital Art Proficiency", "With experience in digital art programs from adobe programs to sketch to figma, my expertiece provides an excellent understanding and execution in use to create stunning digital artwork.");
    infoBox("spec4", "./images/pencil.svg", "Fine Art Proficiency", "Providing excelence in fine art skills from illustration to shading and even sculpting, my skillset can carry an idea on paper without the use of technology.");
    specHold.appendChild(jobH);
    jobBox("./images/QintelLogo.png", "Internship", "openJob()", "jobPrime1", "imageHolder", "jobTag");
    
    return specHold;

}




//--------------------------------------------------------------------------------------------------------------//




export function resHolder() {
    var mdiv = document.createElement("div");
    mdiv.classList.add("reshold", "grid10", "hgrid10", "center", "flex", "z1");

	function initElms() {
		var htag = document.createElement("h3");
		var rWrap = document.createElement("div");
		htag.textContent = "Documents"; //--!--//
		htag.classList.add("prime-f", "t-center", "abs", "z3");
        rWrap.classList.add("resume-wrap", "over-x", "grid10", "flex", "rel", "column");
        htag.setAttribute("id", "resumePhaze");
        rWrap.setAttribute("id", "resumeWrap");

        mdiv.appendChild(htag);
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

            function baseObj(clazz, iD, data) {
				var bObj = document.createElement("object");
                bObj.classList.add(clazz, "z3", "abs", "file");
                bObj.setAttribute("id", iD);
                bObj.setAttribute("data", data);
                bObj.setAttribute("type", "image/svg+xml");
                
				holdDiv.appendChild(bObj);
				return bObj;
			}
                       
			function inDiv(dClazz, txt,  iDcon, iDobj1, iDobj2, click) {
                var dCon = document.createElement("div");
                var btn = document.createElement("button");
                var inObjA = document.createElement("object");
                var inObjB = document.createElement("object");

                btn.textContent= txt;
				
                dCon.classList.add(dClazz, "flex", "center", "z3");
                btn.classList.add("folder-btn", "z2", "prime-f","t-center","point", "abs", "no-border", "no-background");
                inObjA.classList.add("file", "file-page", "abs");
                inObjB.classList.add("file", "file-holder", "abs");

                dCon.setAttribute("id", iDcon);
                inObjA.setAttribute("id", iDobj1);
                inObjB.setAttribute("id", iDobj2);

                inObjA.setAttribute("data", "./images/file-page.svg");
                inObjB.setAttribute("data", "./images/file-holder.svg");
                inObjA.setAttribute("type", "image/svg+xml");
                inObjB.setAttribute("type", "image/svg+xml");

                btn.addEventListener("click", click);

				holdDiv.appendChild(dCon);
                dCon.appendChild(inObjA);
                dCon.appendChild(inObjB);
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

			baseObj("file-backplate", "filebackPlate", "./images/file-backplate.svg");

			inDiv("inside-hold-1", "Official Resume", "insideH1", "filePageA", "fileHolderA" ,openDocumentA);
            inDiv("inside-hold-2", "Degrees, Certs, Ex.", "insideH2", "filePageB", "fileHolderB" , openDocumentB);
            inDiv("inside-hold-3", "Other", "insideH3", "filePageC", "fileHolderC" , openDocumentC);		

			baseObj("file-front", "fileFleft", "./images/file-frontplate-left.svg");
			baseObj("file-front", "fileFright", "./images/file-frontplate-right.svg" );
            primeBtn();
            return fdiv;
        }
        
		fileDiv();
		return rWrap;
	}
	initElms();
    return mdiv;    
}







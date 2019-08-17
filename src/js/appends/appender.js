import {introDiv} from './topbox';
import {createAbout} from './midbox';
import {infoHolder} from './bottombox';
import {resHolder} from './bottombox';

var crtAbt = createAbout();
var intrDiv= introDiv();
var infoHld = infoHolder();
var resHld = resHolder();

var aboutId = document.getElementById("aboutHolder");
var introId = document.getElementById("introHolder");
var resumeId = document.getElementById("resumeHolder");

export {crtAbt, intrDiv, infoHld, resHld, aboutId, introId, resumeId};


    export function aboutPage() {
        introId.appendChild(intrDiv);
        aboutId.appendChild(crtAbt); 
        resumeId.appendChild(infoHld);
        resumeId.appendChild(resHld);    
    };

    export function codePage() {
        introId.removeChild(intrDiv); 
        aboutId.removeChild(crtAbt);
        resumeId.removeChild(infoHld); 
        resumeId.removeChild(resHld);
    };


export function portfolioPage() {
    introId.removeChild(intrDiv); 
    aboutId.removeChild(crtAbt);
    resumeId.removeChild(infoHld); 
    resumeId.removeChild(resHld);
}




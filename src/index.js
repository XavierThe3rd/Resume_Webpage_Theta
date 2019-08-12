window.addEventListener("load",function() {
	setTimeout(function(){
		window.scrollTo(0, 1);
	}, 0);
});

var lastTouchEnd = 0;
document.addEventListener('touchend', function (event) {
    var now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);

//var isTouchDevice = function() {  
   // return 'ontouchstart' in window || 'onmsgesturechange' in window; 
//};
 
//var isDesktop = window.screenX != 0 && !isTouchDevice() ? true : false;

/*
window.is_tablet = ((function(a){if(/ipad|android.+\d safari|tablet/i.test(a))
    var iPad = document.getElementsByClassName("debug-ipad");
    for (index = 0; index < iPad.length; index++){
        iPad[index].style.display= "none";
    }
})(navigator.userAgent||navigator.vendor||window.opera))?'true':'false';
*/

import "../css/styles.css";
import {crtAbt, intrDiv, infoHld, resHld, aboutId, introId, resumeId} from './js/appender.js';
import {gearPhoneAbout} from './js/scrollmagicOut.js';
import {gearPadAbout} from './js/scrollmagicOut.js';
import {openNav} from './js/navigation.js';
import {openJob} from './js/jobholder.js';

window.openNav = openNav;
window.openJob = openJob;

introId.appendChild(intrDiv); 
aboutId.appendChild(crtAbt);
resumeId.appendChild(infoHld);
resumeId.appendChild(resHld);



if(window.innerWidth < 760){
    gearPhoneAbout();
}

if(window.innerWidth > 760){
    gearPadAbout();
}






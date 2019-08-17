

function createText(type, clazz, id){
    var text = document.createElement(type);
    text.classList.add (clazz, "prime-f");
    text.setAttribute("id", id);
    return text
}

var introSubTitleA = createText("h1", "intro-p1", "p1-toptrig");
var introSubTitleB = createText("h1", "intro-p2", "p2-toptrig");
var aboutTitle = createText("h2", null, "aboutPhaze");
var aboutSub = createText("h3", null, "pm1-Phaze");
var slideTitle1 = createText("h4", null, null);
var slidePar1 = createText("p", "over-x", "p-aboutPhaze");
var slideTitle2 = createText("h4", null, null);
var slidePar2 = createText("p", "over-x", "p-aboutPhaze");
var slideTitle3 = createText("h4", null, null);
var slidePar3 = createText("p", "over-x", "p-aboutPhaze");
var specTitle = createText("h2", null, "resHPhaze");
var specSub = createText("h3", null, "infoH4-trig");
var boxH1 = createText("h4", null, null);
var boxP1 = createText("p", null, null);
var boxH2 = createText("h4", null, null);
var boxP2 = createText("p", null, null);
var boxH3 = createText("h4", null, null);
var boxP3 = createText("p", null, null);
var boxH4 = createText("h4", null, null);
var boxP4 = createText("p", null, null);
var jobH1 = createText("h4", "abs", "jobTag");
var jobP1 = createText("p", "abs", "pId");
var jobS1A= createText("span", null, null);
var jobS1B= createText("span", null, null);
var jobS1C= createText("span", null, null);
var docH = createText("h2", "abs", "resumePhaze")

jobP1.appendChild(jobS1A);
jobP1.appendChild(jobS1B);
jobP1.appendChild(jobS1C);


fetch('../../dist/data.json')
    .then(response => {
    return response.json()
})
.then(data => {
    introSubTitleA.textContent = data.intro.SubA;
    introSubTitleB.textContent = data.intro.SubB;
    aboutTitle.textContent = data.about.Title;
    aboutSub.textContent = data.about.SubTitle;
    slideTitle1.textContent = data.slideshow.SlideTitleA;
    slidePar1.textContent = data.slideshow.SlideParaA;
    slideTitle2.textContent = data.slideshow.SlideTitleB;
    slidePar2.textContent = data.slideshow.SlideParaB;
    slideTitle3.textContent = data.slideshow.SlideTitleC;
    slidePar3.textContent = data.slideshow.SlideParaC;
    specTitle.textContent = data.specialization.SpecTitle;
    specSub.textContent = data.specialization.SpecSubTitle;
    boxH1.textContent = data.specbox.BoxTitleA;
    boxP1.textContent = data.specbox.BoxParaA;
    boxH2.textContent = data.specbox.BoxTitleB;
    boxP2.textContent = data.specbox.BoxParaB;
    boxH3.textContent = data.specbox.BoxTitleC;
    boxP3.textContent = data.specbox.BoxParaC;
    boxH4.textContent = data.specbox.BoxTitleD;
    boxP4.textContent = data.specbox.BoxParaD;
    jobH1.textContent = data.jobbox.JobTitleA;
    jobS1A.textContent = data.jobbox.JobPara1A;
    jobS1B.textContent = data.jobbox.JobPara2A;
    jobS1C.textContent = data.jobbox.JobPara3A;
    docH.textContent = data.document.DocTitle;
});

export{introSubTitleA, introSubTitleB, aboutTitle, aboutSub, slideTitle1, slidePar1, slideTitle2, slidePar2, slideTitle3, slidePar3, specTitle, specSub, boxH1, boxP1, boxH2, boxP2, boxH3, boxP3, boxH4, boxP4, jobH1, jobP1, docH};
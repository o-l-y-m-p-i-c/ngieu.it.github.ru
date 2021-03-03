let eventsWrapper = document.querySelector(".events-content__items-library"),
newsWrapper = document.querySelector(".news-content__items-library");
// overflower = document.querySelector(".overflow-hidder"),
// news = document.querySelector(".news-content__item");
let newsArr=[
];
for (let i = 0; i < 8; i++) {
    newsArr[i] = {};
    newsArr[i].title = "Название новостей";
    newsArr[i].discription = 'Lorem Ipsum - это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.';
    newsArr[i].date = '04.02.2021';
    newsArr[i].href = '#';

}
let eventsArr=[
];
for (let i = 0; i < 7; i++) {
    eventsArr[i] = {};
    eventsArr[i].title = "Название новостей";
    eventsArr[i].discription = 'Lorem Ipsum - это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.';
    eventsArr[i].date = '04.02.2021';
    eventsArr[i].href = '#';

}
for (let i = 0; i < newsArr.length; i++) {
    // create elements
    let newEl = document.createElement("section"),
    newElImg = document.createElement('img'),
    innerSection = document.createElement('section'),
    newElTitle = document.createElement('h4'),
    newElArticle = document.createElement('artcile'),
    newElP = document.createElement('p'),
    newElSpan = document.createElement('span'),
    newElA = document.createElement('a'),
    newElLinkImg = document.createElement('img');

    // add text and class name

    newEl.className = 'news-content__item';
    newElImg.className = 'news-content__img';
    // newElImg.src = `event${i}.png`;
    innerSection.className = 'news-content__wrapper';
    newElTitle.className = 'news-item__title';
    newElTitle.innerText = newsArr[i]['title'];
    newElArticle.className = 'news-item__discription';
    newElArticle.innerText = newsArr[i]['discription'];
    newElP.className = 'news-item__date';
    newElP.innerText = newsArr[i]['date'];
    newElSpan.className = 'news-item__read-more';
    newElA.href = newsArr[i]['href'];
    newElA.innerText = 'Читать больше';
    newElLinkImg.src = 'readmore.png';

    // child appending

    // newEl.appendChild(newElImg);
    newEl.appendChild(innerSection);
    innerSection.appendChild(newElTitle);
    innerSection.appendChild(newElArticle);
    innerSection.appendChild(newElP);
    newEl.appendChild(newElSpan);
    newElSpan.appendChild(newElA);
    newElA.appendChild(newElLinkImg);

    // add child to existing element

    newsWrapper.appendChild(newEl);
}

for (let i = 0; i < eventsArr.length; i++) {
    // create elements
    let newEl = document.createElement("section"),
    newElImg = document.createElement('img'),
    innerSection = document.createElement('section'),
    newElTitle = document.createElement('h4'),
    newElArticle = document.createElement('artcile'),
    newElP = document.createElement('p'),
    newElSpan = document.createElement('span'),
    newElA = document.createElement('a'),
    newElLinkImg = document.createElement('img');

    // add text and class name

    newEl.className = 'events-content__item';
    newElImg.className = 'events-content__img';
    newElImg.src = `event${i}.png`;
    innerSection.className = 'events-content__wrapper';
    newElTitle.className = 'events-item__title';
    newElTitle.innerText = eventsArr[i]['title'];
    newElArticle.className = 'events-item__discription';
    newElArticle.innerText = eventsArr[i]['discription'];
    newElP.className = 'events-item__date';
    newElP.innerText = eventsArr[i]['date'];
    newElSpan.className = 'events-item__read-more';
    newElA.href = eventsArr[i]['href'];
    newElA.innerText = 'Читать больше';
    newElLinkImg.src = 'readmore.png';

    // child appending

    newEl.appendChild(newElImg);
    newEl.appendChild(innerSection);
    innerSection.appendChild(newElTitle);
    innerSection.appendChild(newElArticle);
    innerSection.appendChild(newElP);
    newEl.appendChild(newElSpan);
    newElSpan.appendChild(newElA);
    newElA.appendChild(newElLinkImg);

    // add child to existing element

    eventsWrapper.appendChild(newEl);
}


// setInterval(() => {
//     if (newWrapperWidth-- >0-overflower.offsetWidth/3) {
//         i--;
//         newsWrapper.style.left = i, 'px';
//     }
    
//     }, 10);
let newWrapperWidth = eventsWrapper.offsetWidth;
let eventsContentWidth = document.querySelector(".events-content").offsetWidth;
let expArr =[];
let zeroPoint = -10, zeroPointSec = -10;
let xPos = -10, xPosSec = -10;
let lClick=document.querySelector(".left-btn__clicker"),
rClick= document.querySelector(".right-btn__clicker"),
lNewsBtn = document.querySelector(".left-news-btn"),
rNewsBtn = document.querySelector(".right-news-btn");
// events
lClick.addEventListener("click",()=>{
    if (zeroPoint<=-250) {
        zeroPoint= zeroPoint+240+50;
    }
    else{
        zeroPoint=zeroPoint;
    }
});
rClick.addEventListener("click",()=>{
    if (zeroPoint>=-(250*(eventsArr.length-1-3))) {
        zeroPoint= zeroPoint-240-50;
    }
    else{
        zeroPoint =zeroPoint;
    };
});
// news
lNewsBtn.addEventListener("click",()=>{
    if (zeroPointSec<=-250) {
        zeroPointSec= zeroPointSec+240+50;
    }
    else{
        zeroPointSec=zeroPointSec;
    }
});
rNewsBtn.addEventListener("click",()=>{
    if (zeroPointSec>=-(250*(newsArr.length-1-3))) {
        zeroPointSec= zeroPointSec-240-50;
    }
    else{
        zeroPointSec =zeroPointSec;
    };
});


eventcarusel();
newscarusel();

function eventcarusel(){
    
        setInterval(()=>{
            if(xPos>zeroPoint){
                xPos=xPos-5;
                // console.log("xPox:",xPos,"zeroPoint:",zeroPoint);
                eventsWrapper.style.left = `${xPos}px`;
            }
            else if(xPos<zeroPoint){
                xPos=xPos+5;
                // console.log("xPox:",xPos,"zeroPoint:",zeroPoint);
                eventsWrapper.style.left = `${xPos}px`;
            }
        },1);
    }
function newscarusel(){

    setInterval(()=>{
        if(xPosSec>zeroPointSec){
            xPosSec=xPosSec-5;
            // console.log("xPox:",xPos,"zeroPoint:",zeroPoint);
            newsWrapper.style.left = `${xPosSec}px`;
        }
        else if(xPosSec<zeroPointSec){
            xPosSec=xPosSec+5;
            // console.log("xPox:",xPos,"zeroPoint:",zeroPoint);
            newsWrapper.style.left = `${xPosSec}px`;
        }
    },1);
}
function secCarusel(start,end){
    setInterval(()=>{
        
    if(end==1){
        // console.log(start);
        if(start !== end){
            start = start + 0.05;
            profs.style.opacity = start;
            // start = start.toFixed(2);
            if(start >= end)
            {
                start =end;
                return start;
            }
        }
        
        
    }   
    else if(end == 0){
        if(start !== end){
            start = start - 0.05;
            profs.style.opacity = start;
            start = start.toFixed(2);
            if(start <= end)
            {
                start = end;
                return start;
            }
        }
        
    } },50);
        
}


// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------



let turnON = "turn-on", turnOFF = "turn-off";

// console.log(StartPosition);
let fotoArr = [];
let btnCollect = document.querySelector(".main-banner__btns");
let fotoCollect = document.querySelector(".main-banner__foto");
for (let i = 0; i < 3; i++) {
    fotoArr[i] = {};
    fotoArr[i].id = i;
    fotoArr[i].fotoWay = `banner${i}.png`;
    fotoArr[i].discription = `SOMETHING`;
}
let fotoArrLength = fotoArr.length;
let startPosition = 0, prewPosition = fotoArrLength-1;
// let flag =true;
createBannerBTNs();
addFotoToBanner();
// 
let bannerFotos = document.querySelectorAll(".main-banner__foto-item");
let mainBannerBTNs = document.querySelectorAll(".main-banner__btn");
for (let i = 0; i < mainBannerBTNs.length; i++) {
    mainBannerBTNs[i].onclick = ()=>{
        startPosition = i;
        prewPosition = startPosition-1;
        if(startPosition == 0){
            prewPosition = fotoArrLength-1
        }
        changeImmediately();
    }
}
changeFoto();


console.log(bannerFotos);
function createBannerBTNs(){
    for (let i = 0; i < fotoArr.length; i++) {
        let span = document.createElement('span');
        span.className = 'main-banner__btn';
        if(i==0){
            span.classList.add('active');
        }
        btnCollect.appendChild(span);
    }
}
function addFotoToBanner(){
    for (let i = 0; i < fotoArr.length; i++) {
        let img = document.createElement('img');
        img.className = 'main-banner__foto-item';
        if(i==0){
            img.classList.add(turnON);
        }else{
            // img.classList.add(turnOFF);
        }
        img.src = fotoArr[i]['fotoWay'];
        fotoCollect.appendChild(img);
    }
}
function changeFoto(){
    setInterval(()=>{
        startPosition++;
        prewPosition = startPosition-1; 
        if(startPosition == fotoArrLength){
            startPosition = 0 ;
        }  
        bannerFotos[startPosition].classList.remove(turnOFF);
        bannerFotos[prewPosition].classList.remove(turnON);
        bannerFotos[prewPosition].classList.remove(turnOFF);
        bannerFotos[startPosition].classList.add(turnON);
        mainBannerBTNs[startPosition].classList.add('active');
        mainBannerBTNs[prewPosition].classList.remove('active');
        // startPosition++;   
    },10000);
    
}
function changeImmediately(){
    for (let i = 0; i < fotoArr.length; i++) {
        bannerFotos[i].classList.remove(turnOFF);
        bannerFotos[i].classList.remove(turnON);
        bannerFotos[i].classList.remove(turnOFF);
        mainBannerBTNs[i].classList.remove('active');
    }
    bannerFotos[startPosition].classList.add(turnON);
    mainBannerBTNs[startPosition].classList.add('active');
    
}



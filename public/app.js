// id
const btnShowHV = document.querySelectorAll('#btn_showHV');
const btnCloseHV = document.querySelector('#btn_closeHV');
const containerMainContentTargetFigure = document.querySelector('#container__main__content__target__figure');

// class
const containerHeaderTarget = document.querySelector('.container__header__contain__subtitle');
const containerMainTarget = document.querySelector('.container__main__content__target');
const containerMainDescription = document.querySelector('.container__main__content__target__description');
const containerMainTargetContact = document.querySelector('.container__main__content__target__contact');
const containerMainContentContactDescription = document.querySelector('.container__main__content__target__contact__description');
const containerMainContentContactDescriptionP = document.querySelector('.container__main__content__target__descriptionP');
const containerMainContentTargetDescriptionTitle = document.querySelector('.container__main__content__target__descriptionTitle')
const containerMainContentTargetCOntactP = document.querySelector('.container__main__content__target__contactP');
const containerMainContentTargetContactDescriptionTitle = document.querySelector('.container__main__content__target__contact__descriptionTitle');
const windowsModalHv = document.querySelector('.window__modal__hv');

// lets
let injectParagraph;
let clients = [];
let carouselImage = [];
let injectImage;

// class
class imagesRefers{
    constructor(url,alt) {
        this.url = url;
        this.alt = alt;
    };
};

class clientRefers {
    constructor(name,numberPhone,address) {
        this.name = name;
        this.numberPhone = numberPhone;
        this.address = address;
    };
};

class caroucelImages {
    constructor(url,alt) {
        this.url = url;
        this.alt = alt;
    };
};

// Here i should inject the clients
let firtsClient = new clientRefers('no name',310000000,'Carr 0 ,00 ');
let twoClient = new clientRefers('no name',310000000,'Carr 0 ,00 ');
let thirtyClient = new clientRefers('no name',310000000,'Carr 0 ,00 ');

let firstcarousel = new caroucelImages(['./public/resources/img/cnt_1.jpeg','./public/resources/img/cnt_2.jpeg','./public/resources/img/cnt_3.jpeg','./public/resources/img/cnt_4.jpeg','./public/resources/img/cnt_5.jpeg','./public/resources/img/cnt_6.jpeg'],'Image about construction');

carouselImage.push(firstcarousel);

// here i push the different clients to the array
clients.push(firtsClient,twoClient,thirtyClient);

// functions
function loadPage() {
    carouselImage.forEach((image)=>{
        injectImage = `
            ${image.url.map(url=>`<img src="${url}" alt="">`)}
        `;
    });
    containerMainContentTargetFigure.innerHTML = injectImage;
    containerHeaderTarget.addEventListener("mouseenter",function(){
        containerHeaderTarget.style.width = '320px';        
    });
    containerHeaderTarget.addEventListener("mouseleave",function(){
        containerHeaderTarget.style.width = '120px';
    });
    containerMainTarget.addEventListener("mouseenter",function(){
        containerMainTarget.style.width = '1200px';
        
        clients.forEach((client)=>{
            injectParagraph += `
                <section>
                    <p>${client.name}</p>
                    <p>${client.numberPhone}</p>
                    <p>${client.address}</p>
                </section>
        `;
        });
        containerMainContentTargetDescriptionTitle.style.marginTop = '0px';
        containerMainContentContactDescriptionP.innerHTML += injectParagraph;
    })
    containerMainTarget.addEventListener("mouseleave",function(){
        containerMainTarget.style.width = '500px';
        injectParagraph = "";
        containerMainContentContactDescriptionP.innerHTML = '';
        containerMainContentTargetDescriptionTitle.style.marginTop = '120px';
    })
    containerMainTargetContact.addEventListener("mouseenter",function(){
        containerMainTargetContact.style.width = "700px";
        injectParagraph = `
            <p>WhatsApp</p>
            <p>131313</p>
            <p>Celular</p>
            <p>09131313</p>
            <p>Email</p>
            <p>aksdmaksdas</p>
            <span id="btnShowHV">Ver HV</span>
        `;
        containerMainContentTargetCOntactP.innerHTML += injectParagraph;
        containerMainContentTargetContactDescriptionTitle.style.marginTop = '0px'
        const btnShowHV = document.querySelector('#btnShowHV');
        btnShowHV.addEventListener('click',function(){
            btnShowHV.addEventListener('click', function (e) {
                e.preventDefault();
                windowsModalHv.style.opacity = '1';
                windowsModalHv.style.pointerEvents = 'unset';
            })    
        })
    })
    containerMainTargetContact.addEventListener("mouseleave",function(){
        containerMainTargetContact.style.width = "600px";
        injectParagraph = "";
        containerMainContentTargetCOntactP.innerHTML = injectParagraph;
        containerMainContentTargetContactDescriptionTitle.style.marginTop = '120px'
    })
    Array.from(btnShowHV).forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            windowsModalHv.style.opacity = '1';
            windowsModalHv.style.pointerEvents = 'unset';
            console.log(btnShowHV)
        })
    })
    btnCloseHV.addEventListener('click',function(){
        windowsModalHv.style.opacity = '0';
        windowsModalHv.style.pointerEvents = 'none';
    })
    console.warn('Hello developer! At the moment, this page is under development. If you want to see my GitHub repositories, here is the link: https://github.com/TropikoW?tab=repositories')
};

window.addEventListener('load',loadPage);
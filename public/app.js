// id
const btnShowHV = document.querySelector('.btn_showHV');

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

// lets
let injectParagraph;

// class
class imagesRefers{
    constructor(url,alt) {
        this.url = url;
        this.alt = alt;
    };
};

// let refersImages = new imagesRefers('../resources/img/logo_n.jpg')


// functions
function loadPage() {
    containerHeaderTarget.addEventListener("mouseenter",function(){
        containerHeaderTarget.style.width = '320px';        
    });
    containerHeaderTarget.addEventListener("mouseleave",function(){
        containerHeaderTarget.style.width = '120px';
    });
    containerMainTarget.addEventListener("mouseenter",function(){
        containerMainTarget.style.width = '1200px';
        injectParagraph = `
            <section>
                <p>Ejemplo 1</p>
                <p>1231313</p>
                <p>direccion</p>
            </section>
            <section>
                <p>Ejemplo 2</p>
                <p>1231313</p>
                <p>direccion</p>
            </section>
            <section>
                <p>Ejemplo 3</p>
                <p>1231313</p>
                <p>direccion</p>
            </section>
        `;
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
            <span>Ver HV</span>
        `;
        containerMainContentTargetCOntactP.innerHTML += injectParagraph;
        containerMainContentTargetContactDescriptionTitle.style.marginTop = '0px'
    })
    containerMainTargetContact.addEventListener("mouseleave",function(){
        containerMainTargetContact.style.width = "600px";
        injectParagraph = "";
        containerMainContentTargetCOntactP.innerHTML = injectParagraph;
        containerMainContentTargetContactDescriptionTitle.style.marginTop = '120px'
    })
};

window.addEventListener('load',loadPage);
// navBar hidden

let nav = document.querySelector('#navbar');
let botonera = document.querySelector('#botonera');

window.addEventListener('scroll', function() {
    let yOffset = window.pageYOffset;
    
    if (yOffset < 500) {
        nav.style.top = "-65px";
        botonera.style.display = "flex";
        botonera.style.animationDelay = "0s";
    } else {
        nav.style.top = "0px";
        botonera.style.display = "none";
    };
});


// navBar slider

let navBtn = document.querySelectorAll('.btn');

navBtn.forEach(btn => {
    btn.addEventListener('click', function() {
        navBtn.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active')
    });
});


// transitions

let fadeInY = document.querySelectorAll('.fadeInY');


window.addEventListener('scroll', function() {
    let scrollTop = document.documentElement.scrollTop;

    for (var i=0; i < fadeInY.length; i++) {

        if((fadeInY[i].offsetTop - 400) < scrollTop) {
            fadeInY[i].classList.add('transitioned');
        } else {
            if(fadeInY[i].classList.contains('transitioned')) {
                fadeInY[i].classList.remove('transitioned');
            }        
        };
    };

    let sobreMi = document.querySelector('#sobreMi');
    let proyectos = document.querySelector('#proyectos');
    let contacto = document.querySelector('#contacto');

    function moverNav(section) {
        let sectionBtn = document.querySelector(`.${section}`);

        if (sectionBtn.classList.contains('active')) {
            return;
        } else {
            navBtn.forEach(btn => btn.classList.remove('active'));
            sectionBtn.classList.add('active');
        }
    }; // esta funcion comprueba si la "section" esta activa, y si no está, la activa

    if (scrollTop > (sobreMi.offsetTop - 400)) {

        if (scrollTop > (contacto.offsetTop - 400)) {

            moverNav('contacto');

        } else if (scrollTop > (proyectos.offsetTop - 400)){

            moverNav('proyectos');

        } else {

            moverNav('sobreMi');

        }
    };
});

// sobre mi - skills items

let skillBtn = document.querySelectorAll('.skill');
let skillInfo = document.querySelectorAll('.info');

skillBtn.forEach(btn => {
    btn.addEventListener('click', function() {
        skillBtn.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

        skillInfo.forEach(btn => btn.classList.remove('active'));
        let pressedBtn = this.classList[1];
        let displayInfo = document.querySelector(`.${pressedBtn}` + 'Info');
        displayInfo.classList.add('active');

    });
});

// sobre mi - slider

var counter = 1;
setInterval(function() {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4) {
        counter = 1;
    }
}, 8000);

// proyectos

let proyecto = document.querySelectorAll('.proyectoNonActive');


proyecto.forEach(btn => {
    btn.addEventListener('click', function() {
        if (this.classList[1] == 'proyectoNonActive') {

            proyecto.forEach(btn => btn.classList.add('proyectoNonActive'));
            
            let enlaces = document.querySelectorAll('.enlaces');
            enlaces.forEach(btn => btn.classList.remove('active'));
            this.childNodes[1].classList.add('active');
            
            this.classList.remove('proyectoNonActive');

        } else {
            this.childNodes[1].classList.remove('active');
            this.classList.add('proyectoNonActive');
        };
    });
});

// contacto

let contactoBtn = document.querySelectorAll('.medio');

contactoBtn.forEach(btn => {
    btn.addEventListener('click', function() {
        let text = this.childNodes[5].childNodes[1].innerText;

        const inputOculto = document.createElement('input');
        inputOculto.setAttribute('value', `${text}`);

        document.body.appendChild(inputOculto);

        inputOculto.select();
        document.execCommand('copy')

        document.body.removeChild(inputOculto);

        // console.log(this.childNodes[7].childNodes[1].style)
        this.childNodes[7].childNodes[1].style.animation = 'avisoCopiado 2s forwards';
        setTimeout(() => {

            this.childNodes[7].childNodes[1].style.animation = 'none';
            console.log('que')

        }, 2000);
    });
});

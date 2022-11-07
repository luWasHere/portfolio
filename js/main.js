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

window.addEventListener('scroll', function() {
    let yOffset = window.pageYOffset;

    let sobreMi = document.querySelector('#sobreMiContainer');

    if (yOffset >= 100) {
        sobreMi.classList.add('transitioned');
    } else {
        sobreMi.classList.remove('transitioned');
    }
});

// skills items

let skillBtn = document.querySelectorAll('.skill');

skillBtn.forEach(btn => {
    btn.addEventListener('click', function() {
        skillBtn.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active')
    });
});
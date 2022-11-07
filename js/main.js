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
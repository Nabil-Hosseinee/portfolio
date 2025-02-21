const navLinks = document.querySelectorAll(".nav li a");
navLinks.forEach(link => {
    link.addEventListener("click", function () {
        document.querySelector(".nav li a.active")?.classList.remove("active");
        this.classList.add("active");
    });
});

var typed = new Typed('.typing', {
    strings: ["", "Développeur web", "Graphiste", "Passionné", 'Futur développeur React '],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})
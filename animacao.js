window.sr = ScrollReveal({ reset: true });

sr.reveal('.navbar-nav', {
    duration: 1000
});

sr.reveal('.titulo-secao', {
    rotate: { x:0, y:80, z:0},
    duration: 800
});

sr.reveal('.card',{
    origin: 'bottom',
    duration: 1200,
    delay: 100,
    distance: '20px'
});
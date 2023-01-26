window.sr = ScrollReveal({ reset: true });

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
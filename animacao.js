window.sr = ScrollReveal({ reset: true });

sr.reveal('.titulo-secao', {
    rotate: { x:0, y:80, z:0},
    duration: 800
});

sr.reveal('.card',{
    origin: 'bottom',
    duration: 800,
    delay: 80,
    distance: '20px'
});

sr.reveal('.btn-group', {
    scale: 0.85,
    duration:600
})
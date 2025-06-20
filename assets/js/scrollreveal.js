window.sr = ScrollReveal({ reset:false});

/* N A V */
sr.reveal('#h1-inicio', {
    duration: 2000, // Duração da animação em milissegundos
    origin: 'top', // A animação vem de baixo
    distance: '10rem', // Distância da animação
    opacity: 0, // Opacidade inicial
    scale: 0.5 // Escala inicial
});
sr.reveal('#p-inicio', {
    duration: 3500, // Duração da animação em milissegundos
});

sr.reveal('#button-inicio', {
    duration: 1000, // Duração da animação em milissegundos
    delay: 2000,
    opacity: 0
});


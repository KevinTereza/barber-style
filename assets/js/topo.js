const botaoSubir = document.getElementById("botão-subir");

botaoSubir.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" 
    });
});

document.querySelector(".card").addEventListener("click", function() {
    alert("Card clicked!");
    this.style.backgroundColor = "#1f1f1f";
    
});

document.querySelector(".misterouse-dangerous-button").addEventListener("click", function() {
    alert("El creador de este sitio web no se hace responsable de los daños que pueda causar.");
    window.location.href = "wait.html"; // redirige después de los alert
});
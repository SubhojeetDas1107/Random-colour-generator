var colorContainer = document.getElementById("code");
var genButton = document.getElementById("NewCol");
var symbols = "0123456789ABCDEF";
var color = "";

genButton.addEventListener('click', function () {
    for (var i = 0; i < 6; i++) {
        color += symbols[Math.floor(Math.random() * 16)];
    }

    colorContainer.innerHTML = "#" + color;
    document.body.style.background = "#" + color;
    color = "";
});
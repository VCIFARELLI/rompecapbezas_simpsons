const bombElement = document.getElementById("bomb");
const body = document.body; 
let bombSize = 50; 
let exploded = false;

document.addEventListener('keydown', function(e) {
    if (exploded) {
        return; }

    switch (e.keyCode) {
        case 38: // Tecla "arriba"
            bombSize += 10; 
            break;
        case 40: // Tecla "abajo"
            bombSize -= 10;
            break;
    }

    bombSize = Math.max(10, bombSize);

    bombElement.style.fontSize = `${bombSize}px`;

    if (bombSize >= 150) {
        bombElement.innerHTML = "💥"; 
        bombElement.style.fontSize = "450px";
        exploded = true;
        body.style.backgroundColor ="red";
    }
});

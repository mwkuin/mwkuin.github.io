hat = document.getElementById("hat");

document.addEventListener('click', Coordinate, true);

function Hat(xPos, yPos) {
    var hat = document.getElementById("hat");
    hat.style.position = "absolute";
    hat.style.left = xPos + "px";
    hat.style.top = yPos + "px";
}

function Coordinate(e) {
    var x = e.clientX + window.scrollX - hat.width/2;
    var y = e.clientY + window.scrollY - hat.height/2;
    Hat(x, y);
}

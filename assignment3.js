var drawingCircles = document.getElementById("circles");

function createCircles(event){
    var x = event.x - event.target.getBoundingClientRect().left;
    var y = event.y - event.target.getBoundingClientRect().top;
    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("class", "circle");
    circle.setAttribute("cx", x + "px");
    circle.setAttribute("cy", y + "px");
    circle.setAttribute("r", 10 + "px");
    circle.setAttribute("fill", randomColor());
    drawingCircles.appendChild(circle);
}

function flyAway(){
    var circles = document.getElementsByClassName("circle");
    for (let i=0; i < circles.length; i++) {
        var currentX = parseInt(circles[i].getAttribute("cx"));
        var currentY = parseInt(circles[i].getAttribute("cy"));
        currentX += 1;
        circles[i].setAttribute("cx", currentX + "px");
        currentY -= Math.floor(Math.random() * 2);
        circles[i].setAttribute("cy", currentY + "px");
    }
}

function randomColor(){
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var RGBColor = "rgb(" + red + "," + green + "," + blue + ")"; 
    return RGBColor;
}

drawingCircles.onclick = createCircles;
setInterval(flyAway, 1);

function squareNumber() {
    var squarednumber = document.getElementById('square-input').value;
    var solution = document.getElementById('solution')
    solution.innerHTML = "The result of squaring the number " + squarednumber + " is " + squarednumber*squarednumber;
}

function halfNumber() {
    var halfnumber = document.getElementById('half-input').value;
    var solution = document.getElementById('solution')
    solution.innerHTML = "Half of " + halfnumber + " is " + halfnumber/2 ;
}

function percentOf() {
    var input1 = document.getElementById('percent1-input').value;
    var input2 = document.getElementById('percent2-input').value;
    var solution = document.getElementById('solution')
    solution.innerHTML = input1 + " is " + (input1/input2)*100 + "% of " + input2;
}

function areaOfCircle() {
    var radius = document.getElementById('area-input').value;
    var solution = document.getElementById('solution');
    solution.innerHTML = "The area of a circle with radius " + radius + " is " + radius*radius*Math.PI;
}

window.onload = createCanvas;

var robot;
var currentPos  = {},
var errorMsg    = document.getElementById("error");
var reportMsg   = document.getElementById("report");
var direction   = ["NORTH", "SOUTH", "EAST", "WEST"];
var canvas      = document.getElementById("canvas1");
var ctx         = canvas.getContext("2d");

function createCanvas() {
    ctx.beginPath();
	ctx.moveTo(80,0);
	ctx.lineTo(80,0);
	ctx.lineTo(80,400);
    ctx.strokeStyle = "#eee";
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(160,0);
	ctx.lineTo(160,0);
	ctx.lineTo(160,400);
    ctx.strokeStyle = "#eee";
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(240,0);
	ctx.lineTo(240,0);
	ctx.lineTo(240,400);
    ctx.strokeStyle = "#eee";
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(320,0);
	ctx.lineTo(320,0);
	ctx.lineTo(320,400);
    ctx.strokeStyle = "#eee";
	ctx.stroke();

	//Draw the horizontal lines
	ctx.beginPath();
	ctx.moveTo(0,80);
	ctx.lineTo(0,80);
	ctx.lineTo(400,80);
    ctx.strokeStyle = "#eee";
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(0,160);
	ctx.lineTo(0,160);
	ctx.lineTo(400,160);
    ctx.strokeStyle = "#eee";
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(0,240);
	ctx.lineTo(0,240);
	ctx.lineTo(400,240);
    ctx.strokeStyle = "#eee";
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(0,320);
	ctx.lineTo(0,320);
	ctx.lineTo(400,320);
    ctx.strokeStyle = "#eee";
	ctx.stroke();
}

function validateX(axisX) {
    if (isNaN(axis)) {
        errorMsg.innerHTML= "Please enter in numberic co-ordinates";
    } else if (axis < 0 || axis > 4 ) {
        errorMsg.innerHTML = "Co-ordinates are out of range";
    } else {
        return true;
    }
}     

function validateY(axisY) {
    if (isNaN(axis)) {
        errorMsg.innerHTML("Please enter in numberic co-ordinates");
    } else if (axis < 0 || axis > 4 ) {
        errorMsg.innerHTML("Co-ordinates are out of range");
    } else {
        return true;
    }
}    

function validateF(facing) {

}

function robotInit(x,y,f) {
    this.x = x;
    this.y = y;
    this.f = f;
}

function place(position) {
    var newPostion = position.split(","),
        xPos = parseInt(newPostion[0].trim()),
        yPos = parseInt(newPostion[1].trim()),
        fDirection = newPostion[2].toUpperCase();
    if (validateX(xPos) && validateY(yPos) && validateF(fDirection)) {
        robot.x = xPos;
        robot.y = yPos;
        robot.f = fDirection;
        createRobot(robot);
    }
}

function move() {
    if (currentPos.f === "NORTH") {
        var newY = currentPos.f + 1;
        if (validateY(newY)) {
            robot.y = newY;
            createRobot(robot);
        }
    } else 
    if (currentPos.f === "SOUTH") {
        var newY = currentPos.f - 1;
        if (validateY(newY)) {
            robot.y = newY;
            createRobot(robot);
        }
    } else 
    if (currentPos.f === "WEST") {
        var newX = currentPos.f - 1;
        if (validateX(newX)) {
            robot.x = newX;
            createRobot(robot);
        }
    } else 
    if (currentPos.f === "EAST") {
        var newX = currentPos.f + 1;
        if (validateX(newX)) {
            robot.x = newX;
            createRobot(robot);
        }
    }
}

function processCmd(command) {
    errorMsg.innerHTML = "";
    currentPos = {
        x: robot.x,
        y: robot.y,
        f: robot.f
    }
    var commandEntered = command.split(",");
    var commandFirst   = commandEntered[0].toUpperCase();
    
}

function createRobot(rob) {

}

function rotateRobot(directions) {
    if (directions === "LEFT") {

    }
}


var robot       = {},
    currentPos  = {},
    errorMsg    = document.getElementById('error'),
    reportMsg   = document.getElementById('report'),
    direction   = ['NORTH','SOUTH', 'EAST', 'WEST'],
    canvas      = document.getElementById('canvas'),
    ctx         = canvas.getContext('2d') ;

function validateX(axis) {
    if (isNaN(axis)) {
        errorMsg.innerHTML= "Please enter in numberic co-ordinates";
    } else if (axis < 0 || axis > 4 ) {
        errorMsg.innerHTML = "Co-ordinates are out of range";
    } else {
        return true;
    }
}     

function validateY(axis) {
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

function processCommand(command) {
    errorMsg.innerHTML = "";
    currentPos = {
        x: robot.x,
        y: robot.y,
        f: robot.f
    }
    var commandEntered = command.split(",");
    var commandFirst   = commandEntered[0].toUpperCase();
    
}
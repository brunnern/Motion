// Array for Vlad character (running)
const characterDataVlad = {
    arrImgs: ["runningw0000.png", "runningw0001.png",
        "runningw0002.png", "runningw0003.png", "runningw0004.png",
        "runningw0005.png", "runningw0006.png", "runningw0007.png"],
    poseNumber: 0,
    elem: document.querySelector("#vlad"),
    screenWidth: document.querySelector("#forest").clientWidth,
    screenHeight: document.querySelector("#forest").scrollHeight,
    x: 1000,
    y: document.querySelector("#forest").scrollHeight - 100,
    timerId: null,
    move : function() {
        if (this.x > this.screenWidth - 150) {
            characterDataVlad.x = 5;
        } 
        else {
            this.x += -15;
            this.elem.style.top = this.y + "px";
            this.elem.style.left = this.x + "px";
            this.elem.src = "vlad\\" + this.arrImgs[this.poseNumber];
            console.log(this.elem.src);
            this.poseNumber = (this.poseNumber + 1) % 8;
        }
    }
}

// Array for Bjorn character (attacking)
const characterDataBjorn = {
    arrImgs: ["attacke0000.png", "attacke0001.png",
        "attacke0002.png", "attacke0003.png", "attacke0004.png",
        "attacke0005.png", "attacke0006.png", "attacke0007.png", 
        "attacke0008.png", "attacke0009.png", "attacke0010.png", 
        "attacke0011.png", "attacke0012.png"],
    poseNumber: 0,
    elem: document.querySelector("#bjorn"),
    screenWidth: document.querySelector("#forest").clientWidth,
    screenHeight: document.querySelector("#forest").scrollHeight,
    x: 0,
    y: document.querySelector("#forest").scrollHeight - 100,
    timerId: null,
    move : function() {
        if (this.x > this.screenWidth - 150) {
            characterDataBjorn.x = 5;
        } 
        else {
            this.elem.style.top = this.y + "px";
            this.elem.style.left = this.x + "px";
            this.elem.src = "bjorn\\" + this.arrImgs[this.poseNumber];
            console.log(this.elem.src);
            this.poseNumber = (this.poseNumber + 1) % 13;
        }
    }
}

// Function called when the move it button is clicked
function move() {
    characterDataVlad.timerId = setInterval(frame, 100);
    characterDataBjorn.timerId = setInterval(frame2, 100);
}

// Callback function to reset the image position
function frame() {
    characterDataVlad.move();
    characterDataBjorn.move();
}

// Function called when the stop button is clicked
function stopMoving() {
    clearInterval(characterDataVlad.timerId);
    clearInterval(characterDataBjorn.timerId);
}

/* You can add more characters and process the animation with an array */
const characters = [characterDataVlad, characterDataBjorn];
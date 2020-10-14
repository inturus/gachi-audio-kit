
// Detecting Button Press

var numberOfGachiButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfGachiButtons; i++) {

document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML); 

    buttonAnimation(buttonInnerHTML);

})

}

// Detecting Keyboard Press

document.addEventListener("keypress", function(event) {

    makeSound(event.key);

    buttonAnimation(event.key);

})

function makeSound(key) {

    switch (key) {
        case "w":
                var fisting = new Audio("sounds/fisting-is-300.mp3");
                fisting.play();
            break;

            case "a":
                var gasm = new Audio("sounds/daxgasm.mp3");
                gasm.play();
            break;

            case "s":
                var dungeon = new Audio("sounds/dungeon-master.mp3");
                dungeon.play();
            break;

            case "d":
                var cumming = new Audio("sounds/iam-cumming.mp3");
                cumming.play();
            break;

            case "j":
                var ok = new Audio("sounds/ok-gachihyper7.mp3");
                ok.play();
            break;

            case "k":
                var stick = new Audio("sounds/stick-your-finger-in-my-ass.mp3");
                stick.play();
            break;

            case "l":
                var pants = new Audio("sounds/you-ripped-my-fucking-pants.mp3");
                pants.play();
            break;
    
        default: console.log(buttonInnerHTML);
            break;
    }

}

function buttonAnimation(currentKey) {

       var activeButton = document.querySelector("." + currentKey);

       activeButton.classList.add("pressed");

       setTimeout(function() {
           activeButton.classList.remove("pressed");
       }, 100)
}







// var audio = new Audio("sounds/fisting-is-300.mp3");
// audio.play();
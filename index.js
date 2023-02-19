
//Detecting button clicked

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

//Detecting Key pressed

document.addEventListener("keydown", function(event){
    makeSound(event.key.toUpperCase());
    buttonAnimation(event.key.toUpperCase());
});

//function to evaluate the button-key pressed

function makeSound(key){
    switch (key) {
        case "A":
            var crash = new Audio('sounds/pikachu.mp3');
            crash.play();
            break;

        case "S":
            var kick = new Audio('sounds/charmander.mp3');
            kick.play();
            break;

         case "D":
            var snare = new Audio('sounds/eevee.mp3');
            snare.play();
            break;

        case "F":
            var tom1 = new Audio('sounds/bulbasaur.mp3');
            tom1.play();
            break;

        case "G":
            var tom2 = new Audio('sounds/squirtle.mp3');
            tom2.play();
            break;

        case "H":
            var tom3 = new Audio('sounds/Jigglypuff.mp3');
            tom3.play();
            break;

        default:
            console.log(key);
            break;
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },300);
}
var buttons = document.querySelectorAll(".drum");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;
    console.log(buttonInnerHTML);
    playSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

function playSound(keyPressed) {
  switch (keyPressed) {
    case "w":
      new Audio("sounds/tom-1.mp3").play();
      break;
    case "a":
      new Audio("sounds/tom-2.mp3").play();
      break;
    case "s":
      new Audio("sounds/tom-3.mp3").play();
      break;
    case "d":
      new Audio("sounds/tom-4.mp3").play();
      break;
    case "j":
      new Audio("sounds/snare.mp3").play();
      break;
    case "k":
      new Audio("sounds/crash.mp3").play();
      break;
    case "l":
      new Audio("sounds/kick-bass.mp3").play();
      break;

    default:
      console.log(keyPressed);
      break;
  }
}

document.addEventListener("keydown", function (event) {
  playSound(event.key);
  buttonAnimation(event.key);
});

function buttonAnimation(currentKey) {
  console.log("animate me");
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}

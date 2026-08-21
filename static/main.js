const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const message = document.getElementById("message");

let yesSize = 20;
let noSize = 20;


// NO button
noButton.addEventListener("click", function () {

    // Make YES bigger
    yesSize += 5;
    yesButton.style.fontSize = yesSize + "px";

    // Make NO smaller
    noSize -= 2;

    // Don't let NO become impossibly small
    if (noSize < 8) {
        noSize = 8;
    }

    noButton.style.fontSize = noSize + "px";
});


// YES button
yesButton.addEventListener("click", function () {

    // Show message
    message.innerText = "Volim i ja tebe najvise na svetu! ❤️";

    yesButton.style.display = "none";
    noButton.style.display = "none";

    // Create lots of hearts
    for (let i = 0; i < 50; i++) {
        createHeart();
    }
});


function createHeart() {

    // Create a new HTML element
    const heart = document.createElement("div");

    // Put heart inside it
    heart.innerText = "❤️";

    // Give it the CSS class "heart"
    heart.classList.add("heart");

    // Random horizontal position
    heart.style.left = Math.random() * 100 + "vw";

    // Random size
    heart.style.fontSize = (20 + Math.random() * 40) + "px";

    // Random animation speed
    heart.style.animationDuration = (2 + Math.random() * 3) + "s";

    // Add heart to the webpage
    document.body.appendChild(heart);

    // Delete heart after 5 seconds
    setTimeout(function () {
        heart.remove();
    }, 5000);
}
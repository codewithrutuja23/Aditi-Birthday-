const surpriseBtn = document.getElementById("surpriseBtn");
const surprise = document.getElementById("surprise");
const wishBtn = document.getElementById("wishBtn");
const finalWish = document.getElementById("finalWish");

surpriseBtn.addEventListener("click", () => {
surprise.classList.remove("hidden");
surpriseBtn.textContent = "Your Surprise Is Open! 💗";
surpriseBtn.disabled = true;

surprise.scrollIntoView({
    behavior: "smooth",
    block: "start"
});

confettiBurst();

});

wishBtn.addEventListener("click", () => {
finalWish.classList.remove("hidden");
wishBtn.textContent = "Birthday Magic Unlocked! 🎀";
wishBtn.disabled = true;

confettiBurst();

finalWish.scrollIntoView({
    behavior: "smooth",
    block: "center"
});

});

function confettiBurst() {
const symbols = ["💗", "🎀", "✨", "🌸", "💕", "🎉", "💖"];

for (let i = 0; i < 35; i++) {
    const piece = document.createElement("div");

    piece.className = "confetti";
    piece.textContent =
        symbols[Math.floor(Math.random() * symbols.length)];

    piece.style.left = Math.random() * 100 + "vw";
    piece.style.animationDuration = (2 + Math.random() * 2) + "s";
    piece.style.fontSize = (14 + Math.random() * 16) + "px";

    document.body.appendChild(piece);

    setTimeout(() => piece.remove(), 4500);
}

}

// Floating hearts in the background
function createHeart() {
const heart = document.createElement("div");

heart.className = "heart";
heart.textContent = ["💗", "💕", "♡", "🎀"][
    Math.floor(Math.random() * 4)
];

heart.style.left = Math.random() * 100 + "vw";
heart.style.fontSize = (12 + Math.random() * 15) + "px";
heart.style.animationDuration = (5 + Math.random() * 5) + "s";

document.body.appendChild(heart);

setTimeout(() => heart.remove(), 10000);

}

setInterval(createHeart, 700);

// Add a photo from your phone
const photoUpload = document.getElementById("photoUpload");
const bestiePhoto = document.getElementById("bestiePhoto");
const photoPlaceholder = document.getElementById("photoPlaceholder");

let currentPhotoURL = null;

photoUpload.addEventListener("change", (event) => {
const file = event.target.files[0];

if (!file) return;

if (!file.type.startsWith("image/")) {
    alert("Please select an image! 💗");
    return;
}

if (currentPhotoURL) {
    URL.revokeObjectURL(currentPhotoURL);
}

currentPhotoURL = URL.createObjectURL(file);

bestiePhoto.src = currentPhotoURL;
bestiePhoto.hidden = false;
photoPlaceholder.style.display = "none";

});

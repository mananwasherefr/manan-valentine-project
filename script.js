const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const questionSection = document.getElementById('question-section');
const successSection = document.getElementById('success-section');

let yesSize = 1.2;
const noTexts = [
    "Are you positive?",
    "Pookie please... 🥺",
    "If you say no, I will be very sad...",
    "Don't do this to me...",
    "Last chance!"
];
let noCount = 0;

noBtn.addEventListener('click', () => {
    // 1. Make Yes button bigger
    yesSize += 0.5;
    yesBtn.style.transform = `scale(${yesSize})`;

    // 2. Change No button text
    if (noCount < noTexts.length) {
        noBtn.innerText = noTexts[noCount];
        noCount++;
    } else {
        // Optional: Make the No button move to random spots so they can't click it
        const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
        noBtn.style.position = 'absolute';
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    }
});

yesBtn.addEventListener('click', () => {
    questionSection.classList.add('hidden');
    successSection.classList.remove('hidden');
});
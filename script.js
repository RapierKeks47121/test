    const originalCountries = [
    'ar', 'bo', 'br', 'cl', 'co', 'ec', 'gy', 'py', 'pe', 'sr',
    'uy', 've'
    ];

    let shuffledCountries = [];
    let currentIndex = 0;

    // Fisher-Yates shuffle algorithm
    function shuffleArray(array) {
      const result = array.slice(); // copy array
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
    }

    function showRandomFlag() {
      // If all flags have been shown, reshuffle
    if (currentIndex >= shuffledCountries.length) {
        shuffledCountries = shuffleArray(originalCountries);
        currentIndex = 0;
    }

    const countryCode = shuffledCountries[currentIndex];
    const imageUrl = `https://flagcdn.com/h240/${countryCode}.png`;
    document.getElementById('flag').src = imageUrl;
    currentIndex++;
    }

    // Initialize shuffled list on page load
    shuffledCountries = shuffleArray(originalCountries);




    const button = document.getElementById('button')
    let img = document.getElementById('flagtest ')

    function changeflag(){
      if(img.src == 'https://flagcdn.com/h240/ua.png')
        img.src = 'https://flagcdn.com/h240/bg.png'
      }else{
        img.src = 'https://flagcdn.com/h240/ua.png'
      }











// A subset list — expand to cover all countries you want
const flags = [
  { name: "Argentina", code: "ar" },
  { name: "Australia", code: "au" },
  { name: "Brazil", code: "br" },
  { name: "Canada", code: "ca" },
  { name: "China", code: "cn" },
  { name: "France", code: "fr" },
  { name: "Germany", code: "de" },
  { name: "India", code: "in" },
  { name: "Japan", code: "jp" },
  { name: "United States", code: "us" },
  // ... add all others
];

let queue = [];
let current;
let score = 0, attempts = 0;

function shuffle(arr) {
  for (let i = arr.length -1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function resetQueue() {
  queue = flags.slice();
  shuffle(queue);
}

function loadNext() {
  if (queue.length === 0) {
    resetQueue(); // restart if you ran out
  }
  current = queue.shift();
  document.getElementById('flagImg').src = `https://flagcdn.com/w320/${current.code}.png`;
  document.getElementById('guessInput').value = '';
  document.getElementById('feedback').textContent = '';
  document.getElementById('nextBtn').style.display = 'none';
}

function checkAnswer() {
  const guess = document.getElementById('guessInput').value.trim().toLowerCase();
  attempts++;
  if (guess === current.name.toLowerCase()) {
    score++;
    document.getElementById('feedback').textContent = '✅ Correct!';
    setTimeout(loadNext, 800);
  } else {
    document.getElementById('feedback').textContent = `❌ Wrong! It was ${current.name}.`;
    document.getElementById('nextBtn').style.display = 'inline-block';
  }
  updateScore();
}

function updateScore() {
  document.getElementById('scoreDisplay').textContent = `Score: ${score} / ${attempts}`;
}

// event listeners
document.getElementById('submitBtn').onclick = checkAnswer;
document.getElementById('nextBtn').onclick = loadNext;

resetQueue();
loadNext();








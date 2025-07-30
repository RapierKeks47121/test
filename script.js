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
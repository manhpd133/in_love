
// Your existing code continues below
document.addEventListener('DOMContentLoaded', function() {
    const bgMusic = document.getElementById('bgMusic');
    const musicToggle = document.getElementById('musicToggle');

    // Function to play music
    function playMusic() {
        bgMusic.play().catch(function(error) {
            console.log("Play failed:", error);
        });
    }

    // Play music on first click anywhere on the document
    document.addEventListener('click', function() {
        playMusic();
    }, { once: true });

    // Toggle music button functionality
    musicToggle.addEventListener('click', function() {
        if (bgMusic.paused) {
            bgMusic.play();
            musicToggle.classList.remove('paused');
        } else {
            bgMusic.pause();
            musicToggle.classList.add('paused');
        }
    });
    // Set your anniversary date here (YYYY, MM-1, DD)
    const anniversaryDate = new Date(2023, 3, 24); // April 24, 2023

    function updateCounter() {
        const now = new Date();
        const diff = now - anniversaryDate;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = days.toString().padStart(3, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }

    // Update counter every second
    updateCounter();
    setInterval(updateCounter, 1000);

    // Add falling hearts
    const heartsContainer = document.getElementById('fallingHearts');
    const heartSymbols = ['❤️', '💕', '💗', '💓', '💖'];

    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        
        // Random starting position
        heart.style.left = Math.random() * 100 + 'vw';
        
        // Random animation duration between 4-8 seconds
        const duration = 4 + Math.random() * 4;
        heart.style.animationDuration = duration + 's';
        
        heartsContainer.appendChild(heart);
        
        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, duration * 1000);
    }

    // Create new heart every 300ms
    setInterval(createHeart, 300);
});

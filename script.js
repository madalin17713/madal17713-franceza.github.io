document.addEventListener('DOMContentLoaded', function() {
    const words = document.querySelectorAll('.word');
    
    words.forEach((word, index) => {
        word.style.animationDelay = `${index * 0.2}s`;
    });

    

    function showVideo() {
        const videoContainer = document.querySelector('.video-container');
        videoContainer.style.opacity = 1; // Fă videoclipul vizibil
        videoContainer.style.animation = 'fadeIn 1s forwards'; // Aplică animația de apariție
    }
});
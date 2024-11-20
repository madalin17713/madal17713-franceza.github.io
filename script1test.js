document.addEventListener('DOMContentLoaded', function() {
    const words = document.querySelectorAll('.word');
    
    words.forEach((word, index) => {
        word.style.animationDelay = `${index * 0.2}s`;
    });
});


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
document.addEventListener('DOMContentLoaded', function() {
    
    const words = ['<Developer/>', '#Coder', 'Designer ;)', 'Engineer!'];
    const words2 = ['Developer', 'Coder', 'Designer ', 'Engineer'];
    const typeSpeed = 200;
    const deleteSpeed = 100;
    const delayBetweenWords = 2000;
    

    function typewriterEffect(elementId, words, typeSpeed, deleteSpeed, delayBetweenWords) {
        let wordIndex = 0;
        let charIndex = 0;
        let currentWord = '';
        let isDeleting = false;
        const typewriterElement = document.getElementById(elementId);

        
        function type() {
            if (isDeleting) {
                if (charIndex > 0) {
                    charIndex--;
                    currentWord = words[wordIndex].substring(0, charIndex);
                    typewriterElement.textContent = currentWord;
                    setTimeout(type, deleteSpeed);
                } else {
                    isDeleting = false;
                    wordIndex = (wordIndex + 1) % words.length;
                    setTimeout(type, typeSpeed);
                }
            } else {
                if (charIndex < words[wordIndex].length) {
                    currentWord = words[wordIndex].substring(0, charIndex + 1);
                    typewriterElement.textContent = currentWord;
                    charIndex++;
                    setTimeout(type, typeSpeed);
                } else {
                    isDeleting = true;
                    setTimeout(type, delayBetweenWords);
                }
            }
        }

        type();
    }

    typewriterEffect('typewriter', words, typeSpeed, deleteSpeed, delayBetweenWords);
    
});

document.getElementById('reveal-button').addEventListener('click', function() {
    this.style.display = 'none';

    const messages = [
        "Do you remember our first adventure together?",
        "Every moment since then has been incredible.",
        "There's something I've been wanting to ask you..."
    ];
    let index = 0;

    const messageDiv = document.createElement('div');
    messageDiv.id = 'messages';
    document.getElementById('content').appendChild(messageDiv);

    function showMessage() {
        if (index < messages.length) {
            const message = document.createElement('p');
            message.textContent = messages[index++];
            messageDiv.appendChild(message);
            setTimeout(showMessage, 2000);
        } else {
            showQuestion();
        }
    }

    function showQuestion() {
        const question = document.createElement('h2');
        question.textContent = "Will you be my Valentine?";
        messageDiv.appendChild(question);

        const yesButton = document.createElement('button');
        yesButton.textContent = "Absolutely 💖";
        yesButton.id = "yes-button";
        messageDiv.appendChild(yesButton);

        yesButton.addEventListener('click', function() {
            messageDiv.innerHTML = "<h2>You just made my day!</h2>";
            showLoveNote();
        });
    }

    function showLoveNote() {
        const loveNote = document.getElementById('love-note');
        loveNote.style.display = 'block';
    }

    showMessage();
    function showLoveNote() {
        const loveNote = document.getElementById('love-note');
        loveNote.style.display = 'block';
    
        // Display the slideshow
        const slideshow = document.getElementById('slideshow');
        slideshow.style.display = 'block';
        showSlides();
    }
    
    // Slideshow functionality
    let slideIndex = 0;
    function showSlides() {
        const slides = document.getElementsByClassName('slide');
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1; }
        slides[slideIndex - 1].style.display = 'block';
        setTimeout(showSlides, 3000); // Change image every 3 seconds
    }
    
});

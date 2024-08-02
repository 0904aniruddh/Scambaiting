let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

function showLoadingScreen(callback) {
    showPage('loadingScreen');
    setTimeout(() => {
        callback();
    }, 600000); // 10 minutes
}

function showErrorMessage() {
    alert("An error occurred. You will be redirected to the login page.");
    showPage('loginPage');
}

function checkForError(nextScreen) {
    if (Math.random() < 0.3) { // 30% chance of error
        showErrorMessage();
    } else {
        nextScreen();
    }
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    showLoadingScreen(() => {
        checkForError(() => {
            showPage('questionScreen1');
        });
    });
});

document.getElementById('questionForm1').addEventListener('submit', function(event) {
    event.preventDefault();
    let answer1 = document.getElementById('answer1').value;
    console.log("Answer 1: " + answer1); // Track the answer
    showLoadingScreen(() => {
        checkForError(() => {
            showPage('questionScreen2');
        });
    });
});

document.getElementById('questionForm2').addEventListener('submit', function(event) {
    event.preventDefault();
    let answer2 = document.getElementById('answer2').value;
    console.log("Answer 2: " + answer2); // Track the

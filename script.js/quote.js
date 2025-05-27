const quotes = [
    '"Mr Godwin once said ." - I am your destiny help',
    '"The best way to predict the future is to invent it." - Alan Kay',
    '"Life is 10% what happens to us and 90% how we react to it." - Charles R. Swindoll',
    '"The only way to do great work is to love what you do." - Steve Jobs',
    '"The purpose of our lives is to be happy." - Dalai Lama',
    '"Get busy living or get busy dying." - Stephen King',
    '"You have within you right now, everything you need to deal with whatever the world can throw at you." - Brian Tracy',
    '"Believe you can and you\'re halfway there." - Theodore Roosevelt',
    '"The only limit to our realization of tomorrow is our doubts of today." - Franklin D. Roosevelt',
    '"The future belongs to those who believe in the beauty of their dreams." - Eleanor Roosevelt'
];

document.getElementById('newQuoteButton').addEventListener('click', generateQuote);
document.getElementById('closePopupButton').addEventListener('click', closePopup);

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const newQuote = quotes[randomIndex];

    let quoteMessage = document.getElementById('quoteMessage');
    quoteMessage.textContent = newQuote;

    let popupMessage = document.getElementById('popupMessage');
    popupMessage.textContent = newQuote;

    let popup = document.getElementById('popup');
    popup.style.display = 'block';
}

function closePopup() {
    let popup = document.getElementById('popup');
    popup.style.display = 'none';
}

// Function to make the popup bounce around the screen
function bouncePopup() {
    const popup = document.getElementById('popup');
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const popupWidth = popup.offsetWidth;
    const popupHeight = popup.offsetHeight;

    let x = Math.random() * (screenWidth - popupWidth);
    let y = Math.random() * (screenHeight - popupHeight);

    popup.style.left = `${x}px`;
    popup.style.top = `${y}px`;
}

// Automatically change the quote and show the popup every 10 seconds
setInterval(() => {
    generateQuote();
    bouncePopup();
    let popup = document.getElementById('popup');
    popup.style.display = 'block';
}, 10000);


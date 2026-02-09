console.log('Script loaded!');

const noMessages = [
    "Will You Be My Valentine? 💕",
    "Are you sure? 🥺",
    "Please? 🙏",
    "Think about it 💭",
    "Really? 😢",
    "Last chance! 💔",
    "The duck will be sad 🦆",
    "Fine, but the yes button is getting HUGE 😤",
    "My heart can't handle this 💔",
    "Okay, you leave me no choice 😡",
    "Bad things are coming 🌩️",
    "You won't like it 😈",
    "This is your final warning ⚠️",
    "Now the no button is gone 😝",
    "Yayyyyy! "
];


let noClickCount = 0;

window.addEventListener('load', function() {
    var music = document.getElementById('bgMusic');
    music.load(); 
});

document.getElementById('revealBtn').addEventListener('click', function() {
    console.log('Button clicked!');


    document.querySelector('.container').classList.add('hidden');
    var letterDisplay = document.querySelector('.letter-display');
    letterDisplay.style.display = 'flex'; 
    console.log('Letter display should be visible now');
});

document.getElementById('littleDuck').addEventListener('click', function() {
    console.log('Little duck clicked!');
    var music = document.getElementById('duckSound');
    music.currentTime = 0.2;
    music.play();
});    

document.getElementById('evilDuck').addEventListener('click', function() {
    console.log('Evil duck clicked!');
    var music = document.getElementById('evilDuckSound');
    music.currentTime = 0.2;
    music.play();
});    

document.getElementById('revealBtn').addEventListener('click', function() {
    var ayoSound = document.getElementById('ayoSound');
    ayoSound.currentTime = 0.5;
    ayoSound.play();
});

document.getElementById('letter').addEventListener('click', function() {
    var music = document.getElementById('bgMusic');
    music.currentTime = 26.8;
    music.play();


    setTimeout(function() {
        music.pause();
    }, 5000);

    document.getElementById('letterText').style.display = 'none';
    document.querySelector('.container').classList.add('hidden');
    
    // Zoom the letter
    this.classList.add('zoomed');
    
    // Change background color after zoom starts
    setTimeout(function() {
        document.body.classList.add('pink-bg');
    }, 0);
    
    setTimeout(function() {
        document.querySelector('.letter-display').style.display = 'none';
        document.getElementById('questionContent').classList.add('show');
    }, 1500);
});

document.getElementById('noBtn').addEventListener('click', function() {
    var boowomp = document.getElementById('boowomp');
    boowomp.currentTime = 0.2;
    boowomp.play();
});

document.getElementById('noBtn').addEventListener('click', function() {
    if (noClickCount < noMessages.length-1) {
        noClickCount++;
        // var boowomp = document.getElementById('boowomp');
        // boowomp.play();
        
        // Change the message
        const messageElement = document.querySelector('.question-content h1');
        if (noClickCount < noMessages.length) {
            messageElement.textContent = noMessages[noClickCount];
        }

        
        // Make Yes button bigger each time
        const yesBtn = document.getElementById('yesBtn');
        const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
        yesBtn.style.fontSize = (currentSize + 4) + 'px';
        yesBtn.style.padding = (15 + noClickCount * 8) + 'px ' + (40 + noClickCount * 12) + 'px';
        
        // Make No button smaller
        const currentNoSize = parseFloat(window.getComputedStyle(this).fontSize);
        this.style.fontSize = (currentNoSize - 2) + 'px';
    }
    if (noClickCount === noMessages.length - 2) {
            this.style.display = 'none';
        }
        
});

document.getElementById('yesBtn').addEventListener('click', function() {
    const messageElement = document.querySelector('.question-content h1');
    noClickCount = noMessages.length-1; 
    if (noClickCount < noMessages.length) {
        messageElement.textContent = noMessages[noClickCount];
    }
    console.log('noClickCount reset to:', noClickCount);
    var wooSound = document.getElementById('wooSound');
    wooSound.currentTime = 0.2;
    wooSound.play();
    document.querySelector('.music-player').style.display = 'block';
});
console.log('Script loaded!');


window.addEventListener('load', function() {
    var music = document.getElementById('bgMusic');
    music.load(); // Force browser to load it
});

document.getElementById('revealBtn').addEventListener('click', function() {
    console.log('Button clicked!');


    document.querySelector('.container').classList.add('hidden');
    var letterDisplay = document.querySelector('.letter-display');
    letterDisplay.style.display = 'flex'; // or 'flex' depending on your layout
    console.log('Letter display should be visible now');
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
    }, 0); // Halfway through the 1.5s zoom
    
    // After zoom completes, show new content
    setTimeout(function() {
        document.querySelector('.letter-display').style.display = 'none';
        document.getElementById('questionContent').classList.add('show');
    }, 1500);
});
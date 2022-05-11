const text = document.getElementById('text');


function colorChange() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    text.style.color = "RGB(" + r + "," + g + "," + b + ")";

}



function textChange() {
    var typed = new Typed('.auto-type', {
        strings: [
            'The purpose of our lives is to be happy',
            'In order to write about life first you must live it.',
            'Turn your wounds into wisdom.',
            'I like criticism. It makes you strong.',
            'The greatest pleasure of life is love.'
        ],
        typeSpeed: 50,
        backSpeed: 5,
        loop: true,
    });
}

textChange();
setInterval(colorChange, 5000);








document.addEventListener('DOMContentLoaded', function() {
    const wordsLink = document.querySelector('#words-link');
    const soundsLink = document.querySelector('#sounds-link');
    const codeLink = document.querySelector('#code-link');
    const homeLink = document.querySelector('#home');
    const editorialLink = document.querySelector('#editorial-link');
    const soundItems = document.querySelectorAll('.sound-item');

    const photo = document.querySelector('#photo-div');
    const words = document.querySelector('#words');
    const sounds = document.querySelector('#sounds');
    const code = document.querySelector('#code');
    const editorial = document.querySelector('#editorial');

    wordsLink.addEventListener('click', () => {
        words.style.display = "block";
        sounds.style.display = "none";
        code.style.display = "none";
        photo.style.display = 'none';
        editorial.style.display = 'none';
    })

    soundsLink.addEventListener('click', () => {
        sounds.style.display = "block";
        words.style.display = "none";
        code.style.display = "none";
        photo.style.display = 'none';
        editorial.style.display = 'none';
    })

    codeLink.addEventListener('click', () => {
        code.style.display = 'block';
        words.style.display = 'none';
        sounds.style.display = 'none';
        photo.style.display = 'none';
        editorial.style.display = 'none';
    })

    editorialLink.addEventListener('click', () => {
        editorial.style.display = 'block';
        words.style.display = 'none';
        sounds.style.display = 'none';
        photo.style.display = 'none';
        code.style.display = 'none';
    })

    homeLink.addEventListener('click', () => {
        photo.style.display = 'block';
        words.style.display = 'none';
        sounds.style.display = 'none';
        code.style.display = 'none';
        editorial.style.display = 'none';
    })

    soundItems.forEach(function(item) {
        let nodes = item.childNodes
        nodes.forEach(function(item) {
            if (item.tagName = 'A') {
                item.addEventListener('click', showPlayer)
            }
        })
    })
})

function showPlayer (event) {
    let link = event.target;
    let frame = link.parentNode.parentNode.childNodes[3];
    console.log(frame);
    frame.style.display = 'block';
}
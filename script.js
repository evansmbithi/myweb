//navigation pane
const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');

open.addEventListener('click', () => container.classList.add('show-nav'));

close.addEventListener('click', () => container.classList.remove('show-nav'));

//search action
const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
});

//About Us
const toggles = document.querySelectorAll('.about-toggle');

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
});

//random image feed --Gallery
const gallery = document.querySelector('.gallery')
const rows = 3
const imageURL = 'images'

for (let i = 0; i < rows * 3; i++) {
    const img = document.createElement('img')
    img.src = `${imageURL}/${getRandomImage()}`
    gallery.appendChild(img)
}

function getRandomNr() {
    return Math.floor(Math.random() * (8 - 1 + 1) + 1)
    //Returns an integer random number between min (included) and max (included)
}

function getRandomImage() {
        return `${getRandomNr()}.JPG`    
}

/*
//scroll
const down = document.getElementById('down')

down.addEventListener('click', (ev) => {
    document.documentElement.scrollBy(0, 250); //250px down from current position
    //window.scroll(0, 100);
});
*/



console.log('Welcome to JavaScript Events');

const family = document.getElementById('family');
const nsfw = document.getElementById('nsfw');
const water = document.getElementById('water');
const tuperware = document.getElementById('tuperware');
const my_input = document.getElementById('my_input');
const response = document.getElementById('response');

const btnClicked = (event) => {
    console.log(event.target.id);
}

family.addEventListener('click', btnClicked);
nsfw.addEventListener('click', btnClicked);
water.addEventListener('click', btnClicked);
tuperware.addEventListener('click', btnClicked);
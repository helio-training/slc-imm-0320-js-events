console.log('Welcome to JavaScript Events');
// console.log(localStorage.getItem('name'))

const family = document.getElementById('family');
const nsfw = document.getElementById('nsfw');
const water = document.getElementById('water');
const tuperware = document.getElementById('tuperware');
const my_input = document.getElementById('my_input');
const response = document.getElementById('response');

const btnClicked = (event) => {
    console.log(event.target.id);

    // response.innerHTML = my_input.value;

    switch(event.target.id){
        case 'family':
            // response.innerHTML = 'Edited for Family Friendly Places';
            response.innerHTML = 'Family Stored'
            localStorage.setItem('input', my_input.value)
            my_input.value = '';
            break;
        case 'nsfw':
            response.innerHTML = 'How dare you?!? *!$% you, *#&@!!!!';
            localStorage.setItem('name', my_input.value)
            my_input.value = '';
            break;
        case 'water':
            // response.innerHTML = 'Drinking ' + my_input.value;
            // my_input.value = '';
            response.innerHTML = localStorage.getItem('input')
            break;
        case 'tuperware':
            response.innerHTML = 'Food is in the fridge!'
            break;
    }
}

// The first value can be: click, dblclick, mouseover, mouseout
family.addEventListener('click', btnClicked);
nsfw.addEventListener('click', btnClicked);
water.addEventListener('dblclick', btnClicked);
tuperware.addEventListener('dblclick', btnClicked);
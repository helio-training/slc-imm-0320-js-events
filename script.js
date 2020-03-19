console.log('Welcome to JavaScript Events');

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
            response.innerHTML = 'Edited for Family Friendly Places';
            my_input.value = '';
            break;
        case 'nsfw':
            response.innerHTML = 'How dare you?!? *!$% you, *#&@!!!!';
            my_input.value = '';
            break;
        case 'water':
            response.innerHTML = 'Drinking ' + my_input.value;
            my_input.value = '';
            break;
        case 'tuperware':
            response.innerHTML = my_input.value + ' is in storage!'
            my_input.value = '';
            break;
    }
}

family.addEventListener('click', btnClicked);
nsfw.addEventListener('click', btnClicked);
water.addEventListener('click', btnClicked);
tuperware.addEventListener('click', btnClicked);
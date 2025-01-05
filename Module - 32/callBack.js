function greeting(greet, name) {
    // console.log(greetingHandler());
    greet(name);
}


// const name = 'Nayma';
// greeting(name);

// const numbers = [12,45,67];
// greeting(numbers);


function greetEvening(name) {
    console.log('Good Evening...', name);
}

function greetNight(name) {
    console.log('Good Night...', name)
}

function greetingHandler(name) {
    console.log('Good Morning...', name);
}

greeting(greetingHandler, 'Ashraful');
greeting(greetEvening, 'Nayma');
greeting(greetNight, 'Love You Jan');
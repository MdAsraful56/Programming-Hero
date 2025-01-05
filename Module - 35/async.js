// console.log(1);
// console.log(2);
// // console.log(3);
// // doSomething();
// setTimeout(doSomething, 4000)
// console.log(4);
// console.log(5);
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))
// console.log(6);
// console.log(7);
// console.log(8);

// function doSomething(){
//     console.log(3);
// }



const myLoader = () => {
    return new Promise( (resolve, reject) => {
        const success = Math.random();
        if (success <= 0.5) {
            resolve(success);
        } else {
            reject(success);
        }
    })
}

myLoader();
// .then(data => console.log(data));
// .catch(err => console.log(err));


async function Demo() {
    const res = await fetch('');
    const data = await res.json();
    console.log(data);
}
const player = [76, 55, 66, 77, 88, 52];

const result = player.filter(n => n > 60);
console.log(result); // [ 76, 66, 77, 88 ]


const selected = player.filter(n => n % 2 === 0);
console.log(selected); // [ 76, 66, 88, 52 ]



const friends = ['Nayma', 'Sultana', 'Jannatul', 'Mawa'];

const fiveLetter = friends.filter(friend => friend.length === 5);
console.log(fiveLetter); // [ 'Nayma', 'Mawa' ]

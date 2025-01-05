let address = 'Dosmontara';
let partSlice = address.slice(3, 6);
console.log(partSlice);


let sentence = `I am a good man & I love You`;

console.log(sentence.split());
console.log(sentence.split(""));
console.log(sentence.split(" "));
console.log(sentence.split('a'));


let friendsStr = 'Rahim,Korim,Rima,Rina,Ritu';
let friends = friendsStr.split(',');
console.log(friends);


const friendsArray = [ 'Rahim', 'Korim', 'Rima', 'Rina', 'Ritu' ];
console.log(friendsArray.join());
console.log(friendsArray.join('|'));
console.log(friendsArray.join(','));
console.log(friendsArray.join('-'));
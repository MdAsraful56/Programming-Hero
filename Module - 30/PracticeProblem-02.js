const friends = ["Mina", "Saraw", "Linay", "Tinaea", "Rina"];

const EvenFriends = [];

for (const friend of friends) {
    console.log(friend);

    if(friend.length % 2 === 0){
        EvenFriends.push(friend);
    }
    
}

console.log(EvenFriends); // [ 'Mina', 'Saraw', 'Rina' ]
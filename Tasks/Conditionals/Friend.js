/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

let MyMarks = 95;
let FriendMarks = 30;

MyMarks >= 80 ? FriendMarks >= 80 ? console.log("go for a lunch") : FriendMarks >= 60 ? console.log("good luck next time.") : FriendMarks >= 40 ? console.log("keep your friend's message unseen.") : FriendMarks <40 ? console.log("block your friend") :console.log() :console.log("you get less than 80 go to home and sleep and act sad");
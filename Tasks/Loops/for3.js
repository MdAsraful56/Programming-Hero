
/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */

let Oddsum = 0;
for(let i = 91; i <= 129; i += 2) {
    Oddsum = Oddsum + i;
}
console.log(Oddsum);






/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */

let Evensum = 0;
for(let i = 51; i <= 85; i++) {
    if (i % 2 == 0) {
        Evensum += i;
    }
}
console.log(Evensum);

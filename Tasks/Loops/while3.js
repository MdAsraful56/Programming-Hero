/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
let sum = 0;
let i = 91;
while (i <= 129) {
    sum = sum + i;
    i += 2;
}
console.log(sum);



/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */

let sum2 = 0;
let j = 51;
while (j <= 85) {
    if (j % 2 == 0) {
        sum2 = sum2 + j;
    }
    j++;
}
console.log(sum2);


/*programming hero*/
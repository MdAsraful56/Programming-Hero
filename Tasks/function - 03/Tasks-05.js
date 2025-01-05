// Task -5: (Hard)
// For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.


const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function salary(array) {
    let incrementTotal = 0;
    let startingTotal = 0;
    // console.log(incrementTotal);
    let salary = startingTotal + incrementTotal;
    for (const ary of array) {
        // console.log(ary);
        // console.log(ary.experience);
        let increment = ary.increment * ary.experience;
        incrementTotal = incrementTotal + increment;
        // return incrementTotal;
        // console.log(incrementTotal);
        let starting = ary.starting;
        startingTotal = startingTotal + starting;
        // console.log(startingTotal);
    }
    // return salary;
}

console.log(salary(employees));
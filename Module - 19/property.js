const subjects = {
    Name: 'Math',
    teacher: "Kashem",
    code: 22341,
    isPass: true,
    chapter:  ['one', 'two', 'ten'],
    exams: {
        examName: 'Final Exam',
        marks: 100
    },
    'collage Name': 'noto deam collage',
}

console.log(subjects);
console.log(subjects['isPass']);
console.log(subjects['collage Name']);

subjects.isPass = 50000;
console.log(subjects);

subjects['Name'] = 'Bangla';
console.log(subjects);
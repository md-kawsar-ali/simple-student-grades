const students = [
    {
        name: 'Alex', 
        marks: 95
    },
    {
        name: 'John',
        marks: 85
    },
    {
        name: 'James',
        marks: 79
    },
    {
        name: 'Mary', 
        marks: 65
    },
    {
        name: 'Robert',
        marks: 48
    }
];

for(let i = 0; i < students.length; i++){
    if(students[i].marks < 50){
        students[i].grade = 'F'
    }else if(students[i].marks < 60){
        students[i].grade = 'C'
    }else if(students[i].marks < 70){
        students[i].grade = 'B'
    }else if(students[i].marks < 80){
        students[i].grade = 'A'
    }else if(students[i].marks < 90){
        students[i].grade = 'A+'
    }else if(students[i].marks <= 100){
        students[i].grade = 'Golden A+'
    }else {
        students[i].grade = 'Invalid Marks'
    }
    console.log(students[i]);
}

// Output
// { name: 'Alex', marks: 95, grade: 'Golden A+' }
// { name: 'John', marks: 85, grade: 'A+' }
// { name: 'James', marks: 79, grade: 'A' }
// { name: 'Mary', marks: 65, grade: 'B' }
// { name: 'Robert', marks: 48, grade: 'F' }
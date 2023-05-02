const filePath = './data/data.json';
const filePath_1 = './data/data-1.json';
const fileManager = require('fs');

let studentList = null;

fileManager.readFileSync(filePath_1, "utf8",function(error, data) {
    if(error){
        console.log("I could not read the file");
    }

    let newStudent = {
        "name": "Aya",
        "position": "CEO",
        "email":"aya@mail.com"
    };

    // studentList = JSON.parse(data);
    // studentList.push(newStudent);
    // fileManager.writeFileSync(filePath_1,JSON.stringify(studentList));
    // console.log(studentList);
});

// Better approach
studentList = fileManager.readFileSync(filePath_1, "utf8");
console.log(studentList);


// const monika = {
//     "name": "Monika",
//     "position": "Senior Web Dev",
//     "email": "monika@gmail.com"
// }

// fileManager.writeFileSync(filePath_1,JSON.stringify(studentList));
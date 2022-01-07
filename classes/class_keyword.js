class Student {
    constructor(firstName, lastName, year){
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
    }
}

let firstStudent = new Student("Colt", "Steele",1);
let secondStudent = new Student("Blue", "Steele",2);

console.log(firstStudent, secondStudent)

// In the context of classes, the THIS keyword refers to: thi individual instance of the class.
// IE: the individual student in our case. *firstStudent = new Student("Colt", "Steele",1);*

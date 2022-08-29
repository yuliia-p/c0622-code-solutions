/* exported Student */

class Student {
  constructor(firstName, lastName, subject) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.subject = subject;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  getIntroduction() {
    return `Hello, my name is ${this.firstName} ${this.lastName} and I am studying ${this.subject}.`;

  }
}

const firstStudent = new Student('Yuliia', 'Pchelintseva', 'JavaScript');
firstStudent.getIntroduction();
// console.log('firstStudent: ', firstStudent);
// console.log('firstStudent full name is: ', firstStudent.getFullName());
// console.log('firstStudent introduction: ', firstStudent.getIntroduction());

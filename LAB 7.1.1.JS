class Employee {
  constructor(firstName, lastName, yearsWorked) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearsWorked = yearsWorked;
  }


  getDetails() {
    return `${this.firstName} ${this.lastName} has worked at the company for ${this.yearsWorked} years.`;
  }
}


const employees = [
  new Employee('John', 'Doe', 5),
  new Employee('Jane', 'Smith', 10),
  new Employee('Bob', 'Johnson', 2)
];


employees.forEach(employee => {
  console.log(employee.getDetails());
});



class Person{

    constructor(Name, Age)
    {
        if(this.constructor==Person)
        {
            throw 'error this is abstract class'
        }
        this.Name = Name;
        this.Age  =Age ;
    }
};

class Employee extends Person{
    
    static #count = 0;
    #id;
    #salary;
    constructor(Name,Age)
    {
        Employee.#count++ ;
        super(Name,Age);
    }
    static showCount()
    {
        return Employee.#count;
    }
    static displayHTRules()
    {
        console.log(`HR Rules:
        
            Hire
            fire
            blackmail
        `);
    }
    setID(id)
    {
        this.#id=id ;
    }
    getID()
    {
        return this.#id
    }
    setSalary(salary)
    {
        this.#salary=salary
    }
    showSalary()
    {
        return this.#salary ;
    }
    increaseSalary(increasement)
    {
        return this.#salary + increasement;
    }

};

class Student extends Person{

    
    constructor(Name,Age)
    {
        super(Name,Age);
    }
};


emp1 = new Employee('Ahmed',25);
emp2  =new Employee('Tarek',33);

std1 = new Student('Omar',23);

Employee.displayHTRules();
console.log(Employee.showCount()) ;

emp1.setID(10);
console.log(emp1.getID());

emp1.setSalary(1000);
console.log("Salary: "+emp1.showSalary());

console.log("Salary: "+emp1.increaseSalary(500));


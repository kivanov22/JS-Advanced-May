class Company {
    constructor() {
        this.departments = new Map();
    }

    static Employee = class Employee {
        constructor(username, salary, position) {
            this.username = username;
            this.salary = salary;
            this.position = position;
        }

        //username
        get username() {
            return this._username;
        }
        set username(value) {
            this._validateParameter(value);
            this._username = value;
        }
        //salary
        get salary() {
            return this._salary;
        }
        set salary(value) {
            this._validateParameter(value);
            if (value < 0) {
                throw new Error('Invalid input!');
            }
            this._salary = value;
        }
        //position
        get position() {
            return this._position;
        }
        set position(value) {
            this._validateParameter(value);
            this._position = value;
        }

        _validateParameter(value) {
            if (value === undefined || value === null || value === '') {
                throw new Error('Invalid input!');
            }
        }

        compateTo(other) {
            let result = other.salary - this.salary;
            return result === 0 ? this.username.localeCompare(other.username) : result;

        }

        toString() {
            return `${this.username} ${this.salary} ${this.position}`;
        }
    }

    addEmployee(username, salary, position, deparment) {
        if (deparment === undefined || deparment === null || deparment === '') {
            throw new Error('Invalid input!');
        }

        if (!this.departments.has(deparment)) {
            this.departments.set(deparment, []);// below key department we will have [] 
        }
        let employee = new Company.Employee(username, salary, position)//because we put it static
        let workers = this.departments.get(deparment);// points to this []
        workers.push(employee);
        return `New employee is hired. Name: ${username}. Position: ${position}`;
    }

    bestDepartment() {
        let sortedDepartment = [...this.departments].sort(([aName, aWorkers], [bName, bWorkers]) => {//destructure Map
            return this._getAverageSalary(bName) - this._getAverageSalary(aName);
        });

        let [bestDepartmentName, bestDepartmentWorkers] = sortedDepartment[0];
        bestDepartmentWorkers.sort((a, b) => a.compateTo(b));

        let bestDepartmentString = `Best Department is: ${bestDepartmentName}\nAverage salary: ${this._getAverageSalary(bestDepartmentName).toFixed(2)}`;
        let workersString = bestDepartmentWorkers.map(x => x.toString()).join('\n');

        return `${bestDepartmentString}\n${workersString}`;
    }


    _getAverageSalary(departmentName) {
        let departmentWorker = this.departments.get(departmentName);//with get cause we Map
        return departmentWorker.reduce((acc, w) => acc + w.salary, 0) / departmentWorker.length;//find average salary
    }
}
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());

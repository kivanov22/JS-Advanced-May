function personAndTeacher() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }
        // toString(end = ')') {
        //     return `${this.constructor.name} (name: ${this.name}, email: ${this.email}${end}`;
        // }
    }


    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }

        // toString() {
        //     return super.toString(`, ${this.subject}`);
        // }
    }

    return {
        Person,
        Teacher
    }

}
personAndTeacher();

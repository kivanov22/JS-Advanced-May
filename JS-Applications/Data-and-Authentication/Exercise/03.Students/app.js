
const submitButton = document.querySelector('#submit');
submitButton.addEventListener('click', createStudent);

const studentName = document.querySelector('input[name="firstName"]');
const studentLastName = document.querySelector('input[name="lastName"]');
const studentFaculty = document.querySelector('input[name="facultyNumber"]');
const studentGrade = document.querySelector('input[name="grade"]');



async function getStudents() {
    const tbody = document.querySelector('tbody');
    tbody.querySelectorAll('tr').forEach(tr => tr.remove());
    // tbody.innerHTML='';

    const url = 'http://localhost:3030/jsonstore/collections/students';
    const response = await fetch(url);
    const data = await response.json();

    //console.log(data);
    Object.values(data).map(appendStudents);

}



async function createStudent(e) {
    e.preventDefault();

    if (studentName.value == '' || studentLastName.value == ''
        || studentFaculty.value == '' || studentGrade.value == '') {
        return;
    }

    let newStudent = {
        firstName: studentName.value,
        lastName: studentLastName.value,
        facultyNumber: studentFaculty.value,
        grade: Number(studentGrade.value)
    }

    const url = 'http://localhost:3030/jsonstore/collections/students';

    let createResponse = await fetch(url, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'Post',
        body: JSON.stringify(newStudent)

    });

    getStudents();
}

function appendStudents({ facultyNumber, firstName, grade, lastName, _id }) {
    const tbody = document.querySelector('tbody');

    const tr = document.createElement('tr');
    tr.id = _id;

    const firstNameTh = document.createElement('th');
    firstNameTh.textContent = firstName;

    const lastNameTh = document.createElement('th');
    lastNameTh.textContent = lastName;


    const facultyNumberTh = document.createElement('th');
    facultyNumberTh.textContent = facultyNumber;


    const gradeTh = document.createElement('th');
    gradeTh.textContent = grade;

    tr.appendChild(firstNameTh);
    tr.appendChild(lastNameTh);
    tr.appendChild(facultyNumberTh);
    tr.appendChild(gradeTh);

    tbody.appendChild(tr);
}
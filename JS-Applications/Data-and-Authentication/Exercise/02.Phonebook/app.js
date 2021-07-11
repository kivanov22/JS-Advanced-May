const buttonLoad = document.querySelector('#btnLoad');
buttonLoad.addEventListener('click', getPhoneBook);

const createButton = document.querySelector('#btnCreate');
createButton.addEventListener('click', createContact);

async function getPhoneBook() {
    const phoneBookUl = document.querySelector('#phonebook');
    phoneBookUl.querySelectorAll('li').forEach(li=>li.remove());

    const url = 'http://localhost:3030/jsonstore/phonebook';
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    // const entriesPhonebook = Object.values(data).forEach(v=>{
    //     document.createElement('li');

    // });

    const entriesPhonebook = Object.values(data).map(({ _id, person, phone }) => {
        let li = document.createElement('li');
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', deleteCurrentContact);

        let createString = `${person}: ${phone}`;
        li.id = _id;
        li.textContent = createString;
        li.appendChild(deleteButton);
        phoneBookUl.appendChild(li);
    });

    async function deleteCurrentContact(e) {
        let currentContact = e.target.parentNode;
        let id = e.target.parentNode.id;

        const url = `http://localhost:3030/jsonstore/phonebook/${id}`;
        const deleteReponse = await fetch(url, {
            method: 'Delete',
        });

        currentContact.remove();
        getPhoneBook();
    }

}

async function createContact() {
    const contactName = document.querySelector('#person');
    const contactPhone = document.querySelector('#phone');

    let newContact = {
        person: contactName.value,
        phone: contactPhone.value
    };

    const url = 'http://localhost:3030/jsonstore/phonebook';
    const createReponse = await fetch(url, {
        header: {
            'Content-Type': 'application/json'
        },
        method: 'Post',
        body: JSON.stringify(newContact)
    });
    //let createResult = await createReponse.json();
       
    contactPhone.value = '';
    contactName.value = ''; 
    getPhoneBook();
}
function lockedProfile() {
    getProfileInfo();
}

async function getProfileInfo() {


    try {
        const url = `http://localhost:3030/jsonstore/advanced/profiles`;
        const response = await fetch(url);
        const data = await response.json();

        const main = document.querySelector('#main');
        const profile = document.querySelector('.profile');
        profile.remove();
        // console.log(data);
        // Object.entries()
        Object.values(data).map(({ id, username, email, age }) => {
            // console.log(username);
            // console.log(email);
            // console.log(age);
            let htmlProfile = createProfile(id, username, email, age);
            main.appendChild(htmlProfile);
        });

    } catch (error) {
        alert(error);
    }
    function createProfile(userId, name, email, age) {
        const profileDIv = document.createElement('div');
        profileDIv.classList.add('profile');

        const profileImg = document.createElement('img');
        profileImg.classList.add('userIcon');
        profileImg.src = './iconProfile2.png';

        const labelLock = document.createElement('label');
        labelLock.textContent = 'Lock';

        const inputLock = document.createElement('input');
        inputLock.type = 'radio';
        inputLock.name = `user${userId}Locked`;
        inputLock.value = 'lock';
        inputLock.checked = true;

        const labelUnlock = document.createElement('label');
        labelUnlock.textContent = 'Unlock';

        const inputUnlock = document.createElement('input');
        inputUnlock.type = 'radio';
        inputUnlock.name = `user${userId}Locked`;
        inputUnlock.value = 'unlock';

        const br = document.createElement('br');
        const hr = document.createElement('hr');

        const usernameLabel = document.createElement('label');
        usernameLabel.textContent = 'Username';

        const inputUsername = document.createElement('input');
        inputUsername.type = 'text';
        inputUsername.name = `user${userId}Username`;
        inputUsername.value = name;
        inputUsername.readOnly = true;
        inputUsername.disabled = true;

        const hiddenFieldsDiv = document.createElement('div');
        hiddenFieldsDiv.id = `user${userId}HiddenFields`;
        //hiddenFieldsDiv.style.display = 'none';

        const hr2 = document.createElement('hr');

        const labelEmail = document.createElement('label');
        labelEmail.textContent = 'Email:';

        const inputEmail = document.createElement('input');
        inputEmail.type = 'email';
        inputEmail.name = `user${email}Email`;
        inputEmail.value = email;
        inputEmail.disabled = true;
        inputEmail.readOnly = true;

        const labelAge = document.createElement('label');
        labelAge.textContent = 'Age';

        const inputAge = document.createElement('input');
        inputAge.type = email;
        inputAge.name = `user${userId}Age`;
        inputAge.value = age;
        inputAge.disabled = true;
        inputAge.readOnly = true;

        hiddenFieldsDiv.appendChild(hr2);
        hiddenFieldsDiv.appendChild(labelEmail);
        hiddenFieldsDiv.appendChild(inputEmail);
        hiddenFieldsDiv.appendChild(labelAge);
        hiddenFieldsDiv.appendChild(inputAge);




        const showMoreButton = document.createElement('button');
        showMoreButton.textContent = 'Show More';
        showMoreButton.addEventListener('click', showMoreEventHandler);


        profileDIv.appendChild(profileImg);
        profileDIv.appendChild(labelLock);
        profileDIv.appendChild(inputLock);
        profileDIv.appendChild(labelUnlock);
        profileDIv.appendChild(inputUnlock);
        profileDIv.appendChild(br);
        profileDIv.appendChild(hr);
        profileDIv.appendChild(usernameLabel);
        profileDIv.appendChild(inputUsername);
        profileDIv.appendChild(hiddenFieldsDiv);
        profileDIv.appendChild(showMoreButton);


        return profileDIv;
    }

    function showMoreEventHandler(e) {
        let profileTarget = e.target.parentElement;//parentNode
        let showMoreButtonTarget = e.target;
        let hiddenFields = e.target.previousElementSibling;
        let radioButton = profileTarget.querySelector('input[type="radio"]:checked');

        if (radioButton.value !== 'unlock') {
            return;
        }


        showMoreButtonTarget.textContent = showMoreButtonTarget.textContent === 'Show More'
            ? 'Hide it'
            : 'SHow More';

        hiddenFields.style.display = hiddenFields.style.display === 'block'
            ? 'none'
            : 'block';

    }
}


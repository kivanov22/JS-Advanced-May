function loadCommits() {
    // Try it with Fetch API
    let username = document.getElementById('username').value;
    let repository = document.getElementById('repo').value;
    let ul = document.getElementById('commits');

    const url = `https://api.github.com/repos/${username}/${repository}/commits`;
    ul.textContent = '';

    fetch(url)
        .then((response) => {
            if (response.status === 404) {
                throw new Error(`<li>${response.status} ${response.statusText}</li>`);
            }

            return response.json();
        })
        .then((data) => {

            data.forEach(element => {
                let li = document.createElement('li');
                li.textContent = `${element.commit.author.name}: ${element.commit.message}`;
                ul.appendChild(li);
            });
        })
        .catch(error => {
            alert(error.message);
        });

}
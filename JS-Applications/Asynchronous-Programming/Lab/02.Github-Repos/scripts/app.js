function loadRepos() {
	let username = document.getElementById('username').value;

	const url = `https://api.github.com/users/${username}/repos`;

	fetch(url)
	.then((response)=>{//get a response from server and parse to json
		if(response.status==404){
			throw new Error('User not found')
		}
		console.log(response);
		return response.json()//returns a promise
	})
	.then((data)=>{
		console.log(data)
		let elementUl = document.getElementById('repos');
		elementUl.textContent='';

		data.forEach(element => {
			const a = document.createElement('a');
			const li = document.createElement('li');
			a.setAttribute('href',element.html_url);
			a.textContent=element.full_name;

			li.append(a);
			elementUl.append(li);
		});
	})
	.catch(error=>{
		alert(error.message)
	});

	
}
// Your task is to write a JS function that executes an AJAX request with Fetch API and loads all user github repositories
//  by a given username (taken from an input field with id "username") into a list (each repository as a list-item) with id "repos". 
// Use the properties full_name and html_url of the returned objects to create a link to each repo’s GitHub page. 
// If an error occurs (like 404 “Not Found”), append to the list a list-item with text the current instead. 
// Clear the contents of the list before any new content is appended.
//  See the highlighted lines of the skeleton for formatting details of each list item.
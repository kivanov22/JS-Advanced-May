
import {createHomeViewTopic} from "./homeViewTopic.js";

let topicContainer = document.querySelector('.topic-container');
let form = document.querySelector('.new-topic-border form');
form.addEventListener('submit', postTopic);

let cancelButton = form.querySelector('.cancel');
cancelButton.addEventListener('click',form.reset());


async function getPosts(){
    let url = 'http://localhost:3030/jsonstore/collections/myboard/posts';
    let res = await fetch(url);
    let data = await res.json();

    Object.values(data).forEach(t=>{
        topicContainer.appendChild(createHomeViewTopic(t));
    })
}
getPosts();

async function postTopic(e) {
    e.preventDefault();

    try {
        let currentForm = e.target;
        let formData = new FormData(currentForm);
        let title = formData.get('topicName');
        let username = formData.get('username');
        let post = formData.get('postText');
        

        if (title === '' || username === '' || post === '') {
            alert('Fields cannot be empty');
            return;
        }

        let userPost = {
            title: title,
            username: username,
            post: post
        }

        currentForm.reset();

        let url = 'http://localhost:3030/jsonstore/collections/myboard/posts';
        let res = await fetch(url,{
            headers:{
                'Content-Type':'application/json'
            },
            method:'Post',
            body:JSON.stringify(userPost)
        })

    let resultResponse = await res.json();

    topicContainer.appendChild(createHomeViewTopic(resultResponse));

    }catch(err){
        console.error(err);
        alert(err);
    }
  
}







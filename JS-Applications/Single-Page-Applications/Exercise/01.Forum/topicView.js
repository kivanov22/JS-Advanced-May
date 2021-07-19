import { ce } from "./helpers/htmlHelper.js";

let commentDiv = document.querySelector('.comment');
let replyCommentForm = document.querySelector('.answer form');

let userComment = document.querySelector('#user-comment');
let homeElement = document.querySelector('li a');

homeElement.addEventListener('click', toHomePage);
replyCommentForm.addEventListener('submit', createReply);

async function createPostTopic() {
    let url = `http://localhost:3030/jsonstore/collections/myboard/posts/${localStorage.getItem('topicId')}`;

    let res = await fetch(url);
    let data = await res.json();
    // console.log(data);
    commentDiv.appendChild(createHtmlTopic(data));
}

createPostTopic();

async function createReplyTopic() {
    let url = `http://localhost:3030/jsonstore/collections/myboard/comments?where=postId%3D"${localStorage.getItem('topicId')}`;

    let res = await fetch(url);
    let data = await res.json();
    Object.values(data).forEach(r => {
        commentDiv.appendChild(createHtmlReply(r));
    });
};


async function createReply(e) {
    e.preventDefault();
    let formData = new FormData(replyCommentForm);
    let comment = formData.get('postText');
    let username = formData.get('username');

    replyCommentForm.reset();

    if (username === '' || comment === '') {
        alert('Fields cannot be empty');
        return;
    }

    let replyUser = {
        comment: comment,
        username: username,
        postId: localStorage.getItem('topicId')
    }

    let url = 'http://localhost:3030/jsonstore/collections/myboard/comments';
    let replyResponse = await fetch(url,
        {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'Post',
            body: JSON.stringify(replyUser)

        });

    let result = await replyResponse.json();
    console.log(result);
    commentDiv.appendChild(createHtmlReply(result));
}

createReplyTopic();


function createHtmlReply(r) {
    //wrapper
    let wrapperDiv = ce('div', { class: 'topic-name-wrapper' });
    let topicNameDIv = ce('div', { class: 'topic-name' });

    let paragraphDateTime = ce('p');
    paragraphDateTime.textContent = ' commented on ';

    // let name = ce('strong');
    let userNameStrong = document.createElement('strong');
    userNameStrong.textContent = r.username;

    paragraphDateTime.prepend(userNameStrong);

    let timeElement = ce('time');
    timeElement.textContent = getDateTime();//'2020-10-10T12:08:28.45'
    paragraphDateTime.appendChild(timeElement);

    let postContentDiv = ce('div', { class: 'post-content' });
    let paragraph = ce('p', undefined, r.comment);

    postContentDiv.appendChild(paragraph);
    topicNameDIv.appendChild(paragraphDateTime);
    topicNameDIv.appendChild(postContentDiv);
    wrapperDiv.appendChild(topicNameDIv);

    return wrapperDiv;
}

function createHtmlTopic(t) {

    let headerDiv = ce('div', { class: 'header' });

    let imgElement = ce('img', { src: './static/profile.png', alt: 'avatar' });

    let paragraphDateTime = ce('p');
    let usernameSpan = ce('span');
    usernameSpan.textContent = t.username;

    let timeElement = ce('time');
    timeElement.textContent = getDateTime();//'2020-10-10T12:08:28.45' 

    paragraphDateTime.textContent = ' posted on ';
    paragraphDateTime.prepend(usernameSpan);
    paragraphDateTime.appendChild(timeElement);

    let paragraphPostContent = ce('p', { class: 'post-content' });
    paragraphPostContent.textContent = t.post;

    headerDiv.appendChild(imgElement);
    headerDiv.appendChild(paragraphDateTime);
    headerDiv.appendChild(paragraphPostContent);


    return headerDiv;
}
//Real-Time 
function getDateTime() {
    let currentdate = new Date();

    return currentdate.getDate() + "/"
        + (currentdate.getMonth() + 1) + "/"
        + currentdate.getFullYear() + " , "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds();
}

function toHomePage() {
    location.assign('index.html');
}
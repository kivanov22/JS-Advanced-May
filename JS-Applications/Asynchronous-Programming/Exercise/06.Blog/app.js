function attachEvents() {
    const loadPostsBtn = document.querySelector('#btnLoadPosts');
    loadPostsBtn.addEventListener('click', getPosts);

    const viewPostsBtn = document.querySelector('#btnViewPost');
    viewPostsBtn.addEventListener('click', displayPost);
}

attachEvents();

async function getPosts() {

    const url = `http://localhost:3030/jsonstore/blog/posts`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    const select = document.querySelector('#posts');

    Object.values(data).map(createOption).forEach(o => select.appendChild(o));
}

function createOption(post) {
    const result = document.createElement('option');
    result.textContent = post.title;
    result.value = post.id;

    return result;
}

function displayPost() {
    const postId = document.querySelector('#posts').value;
    getComments(postId);
}

async function getComments(postId) {
    const commentsUl = document.getElementById('post-comments');
    commentsUl.innerHTML = '';//clear comments 

    const postUrl = `http://localhost:3030/jsonstore/blog/posts/${postId}`;
    const commentsUrl = `http://localhost:3030/jsonstore/blog/comments`;

    //two requests return one promise which we wait, instead of waiting one by one for requests
    const [postResponse, commentsResponse] = await Promise.all([
        fetch(postUrl),
        fetch(commentsUrl)
    ]);

    const postData = await postResponse.json();

    document.getElementById('post-title').textContent = postData.title;
    document.getElementById('post-body').textContent = postData.body;

    //const commentsResponse = await fetch(url);
    const commentsData = await commentsResponse.json();

    //fitler objects by id
    const comments = Object.values(commentsData).filter(c => c.postId == postId);

    //create a li for each comment and append it to Ul
    comments.map(createComment).forEach(c => commentsUl.appendChild(c));


}

function createComment(comment) {
    const result = document.createElement('li');
    result.textContent = comment.text;
    result.id = comment.id;
    return result;
}



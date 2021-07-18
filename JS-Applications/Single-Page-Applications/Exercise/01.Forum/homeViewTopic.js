import { ce } from "./helpers/htmlHelper.js";

export function createHomeViewTopic(userPost) {


    let topicWrapperDiv = ce('div', { class: 'topic-name-wrapper' });
    let topicNameDiv = ce('div', { class: 'topic-name' });

    let anchorTag = ce('a', { href: '#', class: 'normal' });
    anchorTag.id = userPost._id;
    anchorTag.addEventListener('click', goToPage);

    let h2Element = ce('h2', undefined, userPost.title);
    let columnsDiv = ce('div', { class: 'columns' });

    let div = ce('div');

    let paragraphDate = ce('p', undefined, 'Date:2020-10-10T12:08:28.451Z');

    let nickNameDiv = ce('div', { class: 'nick-name' });
    let usernameParagraph = ce('p');
    usernameParagraph.textContent= 'Username: ';

    let usernameSpan = ce('span');
    usernameSpan.textContent=userPost.username;

    usernameParagraph.appendChild(usernameSpan);
    nickNameDiv.appendChild(usernameParagraph);
    div.appendChild(paragraphDate);
    div.appendChild(nickNameDiv);

    columnsDiv.appendChild(div);
    anchorTag.appendChild(h2Element);

    topicNameDiv.appendChild(anchorTag);
    topicNameDiv.appendChild(columnsDiv);

    topicWrapperDiv.appendChild(topicNameDiv);

    return topicWrapperDiv;
}
function goToPage(e) {
    e.preventDefault();

    let header = e.target.parentElement;

    let selectedId = header.id;

    localStorage.setItem('topicId', selectedId);

    location.assign('theme-content.html');
}


let homeModule = {
    createHomeViewTopic
}

export default homeModule;
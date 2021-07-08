function solution() {
    
    getInfos();
}

solution();

async function getInfos() {

    const content = {};
    const main = document.getElementById('main');
    const articleTitle = await getArticle();
    const index = articleTitle.map(id => id._id);

    for (const id of index) {
        content[id] = await getArticleDetails(id);
    }

    articleTitle.map(createArticleStructure).forEach(el => {
        main.appendChild(el);
    });
    async function getArticle() {


        const url = `http://localhost:3030/jsonstore/advanced/articles/list`;

        const response = await fetch(url);
        const data = await response.json();
        return data;
    }

    async function getArticleDetails(_id) {
        const url = `http://localhost:3030/jsonstore/advanced/articles/details/${_id}`;

        const response = await fetch(url);
        const data = await response.json();
        //console.log(data.content)
        return data.content;
    }

    function createArticleStructure({ _id, title }) {

        const accordionDIv = document.createElement('div');
        accordionDIv.classList.add('accordion');

        const headDiv = document.createElement('div');
        headDiv.classList.add('head');

        const spanTitle = document.createElement('span');
        spanTitle.textContent = title;

        const moreButton = document.createElement('button');
        moreButton.classList.add('button');
        moreButton.id = _id;
        moreButton.textContent = 'More';




        const extraDiv = document.createElement('div');
        extraDiv.classList.add('extra');

        const paragraph = document.createElement('p');
        paragraph.textContent = content[_id];

        headDiv.appendChild(spanTitle);
        headDiv.appendChild(moreButton);

        extraDiv.appendChild(paragraph);

        accordionDIv.appendChild(headDiv);
        accordionDIv.appendChild(extraDiv);



        moreButton.addEventListener('click', (e) => {
           
            // if (e.target.textContent == 'More') {
            //     extraDiv.style.display = 'block'
            //     e.target.textContent = 'Less';
            // } else if(e.target.textContent=='Less'){
            //     extraDiv.style.display = 'none'
            //     e.target.textContent = 'More';
            // } 
            let showButton = e.target;
            extraDiv.style.display= extraDiv.style.display =='block' 
            ? 'none'
            : 'block';

            showButton.textContent= showButton.textContent == 'Less' 
            ? 'More'
            : 'Less';
        });

        return accordionDIv;

    }
}



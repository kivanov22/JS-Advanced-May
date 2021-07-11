let submitButton = document.querySelector('#submit');
submitButton.addEventListener('click', submitMessage);


let refreshButton = document.querySelector('#refresh');
refreshButton.addEventListener('click', refreshMessages);

let textArea = document.querySelector('#messages');

async function getMessages() {
    const url = 'http://localhost:3030/jsonstore/messenger';
    const response = await fetch(url);
    const data = await response.json();
    //console.log(data);

    return data;
}

async function submitMessage() {
    try {
        const authorElement = document.querySelector('#author');
        const contentElement = document.querySelector('#content');
        const url = 'http://localhost:3030/jsonstore/messenger';


        let userMessage = {
            author: authorElement.value,
            content: contentElement.value
        };

        let sendResponse = await fetch(url,
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'Post',
                body: JSON.stringify(userMessage)

            });

        let submitResult = await sendResponse.json();
        //console.log(submitMessage);

        let messageCreate = `${submitResult.author}: ${submitResult.content}`;
        textArea.value = textArea.value + `\n${messageCreate}`;
    } catch (error) {
        alert(error);
    }
}

async function refreshMessages() {
    try {
        const url = 'http://localhost:3030/jsonstore/messenger';
        //let allMessage = await getMessages(url);
        let allMessage = await fetch(url);
        let dataMessage = await allMessage.json();

        let formatMessage = Object.values(dataMessage)
            .map(m => `${m.author}: ${m.content}`)
            .join('\n');

        textArea.value = formatMessage;
    }catch(error){
        alert(error);
    }
}





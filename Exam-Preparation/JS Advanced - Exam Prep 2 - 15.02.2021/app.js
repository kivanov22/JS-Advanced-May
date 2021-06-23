function solution() {
    //take all the sections List of gifts,sent gifts,discard
    //so we take under the sections the ul's
    const [listGift, sent, discarded] = document.querySelectorAll('section ul');
    const input = document.querySelector('input');//the text field where we write
    document.querySelector('button').addEventListener('click', addGift);//there is one button only

    function addGift() {
        const name = input.value;//we take the writed name of toy
        input.value = '';//clear the box

        let element = e('li', name, 'giftsList');//creating the element
        let sendButton = e('button', 'Send', 'sendButton');//
        let discardButton = e('button', 'Discard', 'discardButton');

        element.appendChild(sendButton);
        element.appendChild(discardButton);

        sendButton.addEventListener('click', () => send(name,element));
        discardButton.addEventListener('click',()=>discard(name,element));

        listGift.appendChild(element);

        sortGift();
    }


    function send(name,gift){
        gift.remove();
        const element = e('li',name,'sendGifts');
        sent.appendChild(element);
    }

    function discard(name,gift){
        gift.remove();
        const element = e('li',name,'discardedGifts');
        discarded.appendChild(element);
    }

    function sortGift(){
        Array.from(listGift.children).sort((a,b)=>a.textContent.localeCompare(b.textContent)).forEach((g)=>{
            listGift.appendChild(g);
        })
    }

    function e(type,content,addClass){
        const result = document.createElement(type);
        result.textContent=content;

        if (addClass) {
            result.className = addClass;
        }
        return result;
    }

}
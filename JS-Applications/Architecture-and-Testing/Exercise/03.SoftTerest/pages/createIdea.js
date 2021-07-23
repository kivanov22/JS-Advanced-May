let section = undefined;
let navLinkClass =undefined;

function initialize(domElement,linkClass){
    section=domElement;
    navLinkClass=linkClass;
}

async function getView(){
    return section;
}

let createIdeaPage = {
    initialize,
    getView
};

export default createIdeaPage;
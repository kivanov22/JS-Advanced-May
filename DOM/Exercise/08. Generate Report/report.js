function generateReport() {
    let thElements = document.querySelectorAll('th');//take all Headers Employee,Department etc
    let trInbodyElements = document.querySelectorAll('tbody tr');//infro about header Person
    let outputElements = document.getElementById('output');//result box
    let infoThElements = [];//array for headers
    let result = [];//array for all people

    Array.from(thElements).forEach(th => {
        if (th.children[0].checked) {//check if checkbox checked
            infoThElements.push(th.textContent.toLowerCase().trim());
        } else {
            infoThElements.push(false);
        }
    });

    Array.from(trInbodyElements).forEach(trEl => {//going through poeple data
        let rowObj = {};//object with different information properties
        Array.from(trEl.children).forEach((el, i) => {
            if (infoThElements[i]) {//catergory check if we have it
                let currCell = infoThElements[i];
                rowObj[currCell] = el.textContent;//fill the object property with info
            }
        });
        result.push(rowObj);//push object to array
    });
    outputElements.textContent = JSON.stringify(result);//extract array to Json
}
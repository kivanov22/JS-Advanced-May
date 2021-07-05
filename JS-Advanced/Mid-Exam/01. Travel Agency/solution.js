window.addEventListener('load', solution);

function solution() {

  let fullNameElement = document.getElementById('fname');
  let emailElement = document.getElementById('email');
  let numberElement = document.getElementById('phone');
  let addressElement = document.getElementById('address');
  let postalCodeElement = document.getElementById('code');

  let submitButtonElement = document.getElementById('submitBTN');


  submitButtonElement.addEventListener('click', (e) => {

    e.preventDefault();

    if (fullNameElement.value === '' || emailElement.value === '') {
      return;
    }

    submitButtonElement.disabled = true;
    //Edit Button
    let editButtonElement = document.getElementById('editBTN');
    editButtonElement.disabled = false;

    //Continue button
    let continueButtonElement = document.getElementById('continueBTN');
    continueButtonElement.disabled = false;


    //section to append all LI's
    // let infoPreviewUl = document.getElementById('infoPreview');
    let ulElelement = document.getElementById('infoPreview');

    let nameElementLi = document.createElement('li');
    nameElementLi.textContent = `Full Name: ${fullNameElement.value}`;

    let emailElementLi = document.createElement('li');
    emailElementLi.textContent = `Email: ${emailElement.value}`;

    let numberElementLi = document.createElement('li');
    numberElementLi.textContent = `Phone Number: ${numberElement.value}`;

    let addressElementLi = document.createElement('li');
    addressElementLi.textContent = `Address: ${addressElement.value}`;

    let postalCodeElementLi = document.createElement('li');
    postalCodeElementLi.textContent = `Postal Code: ${postalCodeElement.value}`;

    ulElelement.appendChild(nameElementLi);
    ulElelement.appendChild(emailElementLi);
    ulElelement.appendChild(numberElementLi);
    ulElelement.appendChild(addressElementLi);
    ulElelement.appendChild(postalCodeElementLi);


    fullNameElement.value = '';
    emailElement.value = '';
    numberElement.value = '';
    addressElement.value = '';
    postalCodeElement.value = '';



    editButtonElement.addEventListener('click', (e) => {
      e.preventDefault();

      // let editButtonTarget = e.target.parentElement;

      // let removeAllLis = Array.from(infoPreviewUl.querySelectorAll('li'));

      //removeAllLis.forEach(li=>infoPreviewUl.removeChild(li));

      while (ulElelement.firstChild) {
        ulElelement.removeChild(ulElelement.firstChild);
      }

      fullNameElement.value = nameElementLi.textContent;
      emailElement.value = emailElementLi.textContent;
      numberElement.value = Number(numberElementLi.textContent);
      addressElement.value = addressElementLi.textContent;
      postalCodeElement.value = Number(postalCodeElementLi.textContent);

      submitButtonElement.disabled = false;
      editButtonElement.disabled = true;
      continueButtonElement.disabled = true;
    });

    continueButtonElement.addEventListener('click', (e) => {
      e.preventDefault();

      let mailDivElement = document.getElementById('block');

      while (mailDivElement.firstChild) {
        mailDivElement.removeChild(mailDivElement.firstChild);
      }
      let finalHeader = document.createElement('h3');
      finalHeader.textContent = 'Thank you for your reservation!';
      mailDivElement.appendChild(finalHeader);
    })

  });


}






function validate() {
    let reg = /^([\w\-.]+)@([a-z]+)(\.[a-z]+)+$/;
    let inputElement = document.getElementById('email');
    let value = inputElement.value;

    inputElement.addEventListener('change',checkEmail);

    function checkEmail(e){
        if (reg.test(e.target.value)) {
            e.target.removeAttribute('class');
            return;
        }
        e.target.className='error';
    }
}
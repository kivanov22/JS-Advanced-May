function solve() {
  let textElement = document.querySelector('#text');
  let conventionElement = document.querySelector('#naming-convention');

  let text = textElement.value;
  let namingConvention = conventionElement.value;

  let result = applyNamingConvention(text, namingConvention);

  let resultElement = document.getElementById('result');
  resultElement.textContent = result;

  function applyNamingConvention(text, convention) {
    const convetionSwitch = {
      'Pascal Case': () =>text
          .toLowerCase()
          .split(' ')
          .map((x) => x[0].toUpperCase() + x.slice(1))
          .join(''),
      'Camel Case': () => text
          .toLowerCase()
          .split(' ')
          .map((x, i) => x = i !== 0 ? x[0].toUpperCase() + x.slice(1) : x)
          .join(''),
      default: () => 'Error!'
    };
   return (convetionSwitch[convention] || convetionSwitch.default)();
  }
}

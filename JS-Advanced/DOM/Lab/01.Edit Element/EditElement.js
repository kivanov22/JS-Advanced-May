function editElement(reff,match,replacer) {
   const content =reff.textContent;
   const matcher = new RegExp(match, 'g');
   const edit =content.replace(matcher, replacer);
   reff.textContent =edit;
}

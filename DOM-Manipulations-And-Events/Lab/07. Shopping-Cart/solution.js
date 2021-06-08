function solve() {
 let addProductButton = document.querySelectorAll('.add-product');
 let textAreaElement = document.querySelector('textarea');
 let checkoutButton = document.querySelector('.checkout');
 let sum =0;
 let products = [];

 for (const addProduct of addProductButton) {
    addProduct.addEventListener('click',(e)=>{
    let currentProduct= e.currentTarget.parentElement.parentElement;
    let productName = currentProduct.querySelector('.product-title').textContent;
    let productPrice =Number(currentProduct.querySelector('.product-line-price').textContent);

    sum+=productPrice;
    products.push(productName);

    textAreaElement.textContent+=`Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;

    });
 }//geting unique products 
 checkoutButton.addEventListener('click',(e)=>{
    let uniqueProducts = products.reduce((a,x)=>{
       if (!a.includes(x)) {
          a.push(x);
       }
       return a;
    },[]);
    textAreaElement.textContent+=`You bought ${uniqueProducts.join(', ')} for ${sum.toFixed(2)}.`;
    disableButtons();
 });
//disable buttons after click checkout
 function disableButtons(){
 let buttons = document.querySelectorAll('button');
 for (const butt of buttons) {
    butt.disabled=true;
 }
 }
}
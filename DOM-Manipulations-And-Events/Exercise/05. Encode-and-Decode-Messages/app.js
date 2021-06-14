function encodeAndDecodeMessages() {
    // let encodeArea = document.querySelectorAll('textarea')[0];
    // let decodeArea = document.querySelectorAll('textarea')[1];
    
    // let encodeButton = document.querySelectorAll('button')[0];
    // let decodeButton = document.querySelectorAll('button')[1];
     let [sendButton, receiveButton] = Array.from(document.querySelectorAll('button'));
     let [sendArea , receiveArea] = Array.from(document.querySelectorAll('textarea'));

     sendButton.addEventListener('click',send);
     receiveButton.addEventListener('click',receive);

     function send(){
     receiveArea.value=sendArea.value.split('')
     .map(x=>x.charCodeAt(0)+1)
     .map(x=> String.fromCharCode(x))
     .join('');
     sendArea.value='';
     }

     function receive(){
      receiveArea.value=receiveArea.value.split('')
      .map(x=>x.charCodeAt(0)-1)
      .map(x=>String.fromCharCode(x))
      .join('');

     }
    
   

}
// function encodeAndDecodeMessages() {
//     const [sendButton, recieveButton] = Array.from(document.querySelectorAll('button'));
//     const [sendArea, recieveArea] = Array.from(document.querySelectorAll('textarea'))

//     sendButton.addEventListener('click', send);
//     recieveButton.addEventListener('click', recieve);

//     function send(){
//         recieveArea.value = sendArea.value.split('')
//         .map(x => x.charCodeAt(0)+1)
//         .map(x => String.fromCharCode(x))
//         .join('');
//         sendArea.value ='';
//     }
//     function recieve(){
//         recieveArea.value = recieveArea.value.split('')
//         .map(x => x.charCodeAt(0)-1)
//         .map(x => String.fromCharCode(x))
//         .join('');
//     } 
// }
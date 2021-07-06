// function getInfo() {

//     let stopId = document.getElementById('stopId').value;

//     fetch(`http://localhost:3030/jsonstore/bus/businfo/${stopId}`)
//     .then(response => response.json())
//     .then(data => {
//         //Take name of bus stop and show it 
//         let stopName = document.getElementById('stopName');
//         stopName.textContent=data.name;

//         let bussesUl = document.getElementById('buses');

//         //Clear Li elements from Ul
//         Array.from(bussesUl.querySelectorAll('li')).forEach(li=>{
//             li.remove();
//         })

//         //Create a Li element for every bus arrival and time
//         Object.keys(data.buses).forEach(currentBus=>{
//             let bussesLi = document.createElement('li');
//          bussesLi.textContent=`Bus ${currentBus} arrives in ${data.buses[currentBus]} minutes`;
//          bussesUl.appendChild(bussesLi);
//         })


//     })
//     .catch(error=>{
//         let stopName = document.getElementById('stopName');
//         stopName.textContent='Error';

//         let bussesUl = document.getElementById('buses');


//         Array.from(bussesUl.querySelectorAll('li')).forEach(li=>{
//             li.remove();
//         })
//     })

// }

//Solution with Async/await

async function getInfo() {
    const stopId = document.getElementById('stopId').value;

    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;
    const bussesUl = document.getElementById('buses');

    try {
        const response = await fetch(url);
        const data = await response.json();

        bussesUl.innerHTML='';

         document.getElementById('stopName').textContent=data.name;
         Object.entries(data.buses).map(([bus, time])=>{
             const busesLi = document.createElement('li');
             busesLi.textContent=`Bus ${bus} arrives in ${time} minutes`;
             bussesUl.appendChild(busesLi);
         })

    } catch (error){
        bussesUl.innerHTML='';
        document.getElementById('stopName').textContent='Error';

    }
}
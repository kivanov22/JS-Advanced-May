function solve() {
    const departButton = document.querySelector('#depart');
    const arriveButton = document.querySelector('#arrive');
    const infoBox = document.querySelector('#info');
    let allStops ={
        next: 'depot',
       
    }; 
    // let nextStop = 'depot';
    //  nextStop = infoBox.getAttribute('next-stop-id');

    async function depart() {
        departButton.disabled=true;
        arriveButton.disabled=false;

        const ulr = `http://localhost:3030/jsonstore/bus/schedule/${allStops.next}`;

        try{

            const response = await fetch(ulr);
            const data = await response.json();
            allStops = data;
            console.log(allStops);
            
            infoBox.textContent=`Next stop ${allStops.name}`;


        }catch(error){
            infoBox.textContent='Error';
            departButton.disabled=true;
            arriveButton.disabled=true;
        }

    }

    function arrive() {
        
        departButton.disabled=false;
        arriveButton.disabled=true;

        infoBox.textContent=`Arriving at ${allStops.name}`;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();
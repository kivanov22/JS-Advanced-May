function attachEventsListeners() {
    //days
    let daysText = document.getElementById('days');
    let daysBtn = document.getElementById('daysBtn');
    //hours
    let hoursText = document.getElementById('hours');
    let hoursBtn = document.getElementById('hoursBtn');
    //minutes
    let minutesText = document.getElementById('minutes');
    let minutesBtn = document.getElementById('minutesBtn');
    //seconds
    let secondsText = document.getElementById('seconds');
    let secondsBtn = document.getElementById('secondsBtn');

    

    daysBtn.addEventListener('click', () =>{
       let days = Number(daysText.value);

       let hours = days*24;
       let minutes = days*24*60;
       let seconds = days*24 * 60*60;
       
       hoursText.value = hours;
       minutesText.value = minutes;
       secondsText.value = seconds;
    });

    hoursBtn.addEventListener('click', () =>{
        let hours = Number(hoursText.value);
 
        let days = hours/24;
        let minutes = hours*60;
        let seconds = hours* 60*60;
        
        daysText.value = days;
        minutesText.value = minutes;
        secondsText.value = seconds;
     });

     minutesBtn.addEventListener('click', () =>{
        let minutes = Number(minutesText.value);
 
        let days = minutes/60/24;
        let hours = minutes/60;
        let seconds = minutes * 60;
        
        daysText.value = days;
        hoursText.value = hours;
        secondsText.value = seconds;
     });

     secondsBtn.addEventListener('click', () =>{
        let seconds = Number(secondsText.value);
 
        let days = seconds/24/60/60;
        let hours = seconds/60/60;
        let minutes = seconds/60;
        
        
        hoursText.value = hours;
        minutesText.value = minutes;
        daysText.value = days;
     });
    
}

function dayOfWeek(input){
    let day=0;
    

    if(input==='Monday'){
        day=1;
        
    }
    else if(input ==='Tuesday'){
        day=2;
       
    }
    else if(input ==='Wednesday'){
        day=3;
    }
    else if(input ==='Thursday'){
        day=4;
    }
    else if(input ==='Friday'){
        day=5;
    }
    else if(input ==='Saturday'){
        day=6;
    }
    else if(input ==='Sunday'){
        day=7;
    }
    else{
        console.log('error')
    }
    if(day!=0){
 console.log(day);
    }
   
}
//  dayOfWeek();

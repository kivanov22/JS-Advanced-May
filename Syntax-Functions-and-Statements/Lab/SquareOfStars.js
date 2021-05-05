function squareOfStars(num){
    let number =Number(num);
    if(num===null){
        number=5;
    }
    
    for(let row = 0;row<=number; row++){
      
      for(let col=row;col<=row; col++){
          console.log('*'.repeat(number));
        //   console.log(row+'*');
        //   console.log(col+'*');
          
        return;
      }
        
    }

}
squareOfStars(5);
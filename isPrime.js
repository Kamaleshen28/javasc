
function isPrime(num){
    if(num <=1 )
        console.log('not prime')
    
    for(let i=0; i<=Math.sqrt(num); i++){
        if(num%i == 0){
            console.log('Not prime');
            return ;
        }
        
    }
    console.log('Prime')
}


function isArmstrong(a){
    let val = a.toString();
    let res=0;
    for(let i=0; i<val.length; i++){
        res = Number(val[i])**3 + res;
    }
    if(res==a){
        console.log('Armstrong')
    } else{
        console.log('Not Armstrong')
    }
}

isArmstrong(153)
isPrime(4)
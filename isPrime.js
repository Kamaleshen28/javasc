const isPrime = (num) =>{
    if(num <=1 )
        return false;
    for(let i=2; i<=Math.sqrt(num); i++){
        if(num%i == 0){
            return false;
        }
    }
    return true;
}

const isArmstrong = (a) => {
    let val = a.toString();
    let res=0;
    for(let i=0; i<val.length; i++){
        res = Number(val[i])**(val.length) + res;
    }
    if(res==a){
        return true;
    } else{
        return false
    }
}

console.log(isArmstrong(1634))
console.log(isPrime(3))

module.exports = {isArmstrong, isPrime};




/*
function isPrime(num){
    if(num <=1 )
        console.log('not prime')
    
    for(let i=2; i<=Math.sqrt(num); i++){
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
*/
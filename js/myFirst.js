/* Fibonacci series */
function fib(number){
    let first = 1; 
    let second =1;
    let thrd;
    let i;
    let result =[1,1]; 
    if (number === 0){
        return 0
    } else if (number === 1){
               return 1
    } else if(number === 2){
               return result
    } else if(number === null){
             return `please enter te number`
    } else if (number === undefined){
              return `please enter the number`
    }
    for (i = 2; i <= number-1; i++){
        thrd = (first + second);
        result.push(thrd);
        first = second;
        second = thrd;
        thrd = 0;
    }
        return result;
console.log(result);
};
/* multiplication table  */

function mtpTable(num){
    let mul;
    for (i = 1; i < 11; i++){
        mul = num * i;
        console.log(` ${num} * ${i} =  ${mul}`)
    }
};

/* even or odd */

function evenOrOdd(number){
    if (number % 2 ===0){
       console.log( `The number is even`);
    }else {
           console.log(`The number is odd`);
    }
}
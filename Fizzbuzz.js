var array1=[1,2,3,4,5,6]
var array2=[1,2,3,4]

function FizzBuzz(List1,list2){
    let newList = List1.concat(list2);
    let totallet  = newList.length;
    if(totalLength % 3 === 0 && totalLength % 5 === 0){
    } else if(totalLength % 5 === 0){
        return('Buzz');
    } else if(totalLength % 3 === 0){
        return('Fizz');
    } else {
        return(totalLength);
    }
};
FizzBuzz(array1,array2);



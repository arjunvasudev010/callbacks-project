/*******************************************************************************
Write a function `minValueCallback` that accepts an array and an optional callback as arguments.
If a callback is not passed in, then the function should return the smallest
value in the array. If a callback is passed in, then the function should return
the result of the smallest value being passed into the given callback.

Examples:
console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3

*******************************************************************************/

let minValueCallback = function(array,cb) {
    let newArr =[];
     for(let i = 0; i  < array.length; i++){
        if (cb === undefined){
            newArr.push(array[i]);

        }else {
            resultEl = cb(array[i]);
            newArr.push(resultEl);

        }

     }
     //let smallNum = el;
    //  newArr.filter(function(el,newel){

    //     if (el  < newel){
    //         let smallNum = el;
    //     }

    //  });
    //  return smallNum;
    let smallNum;
    for(let j = 0; j < newArr.length; j++){
        if(j === 0){
            smallNum = newArr[0];
        }else {
            if(newArr[j] < smallNum){
                smallNum = newArr[j];

            }
        }
    };return smallNum;
}






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = minValueCallback;

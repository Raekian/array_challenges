// function alwaysHungry(arr) {
//     var hungry = true
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] == "food") {
//             console.log("yummy")
//             hungry = false
//         }
//     }
//     if (hungry == true) {
//         console.log("I'm hungry")
//     }
// }

// alwaysHungry([3.14, "food", "pie", true, "food"]);
// // this should console log "yummy", "yummy"
// alwaysHungry([4, 1, 5, 7, 2]);

// create a forloop checking if arr[i] greater than 5, if it is push arry[i] into filteredarr

// function highPass(arr, cutoff) {
//     var filteredArr = [];
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] > cutoff) {
//             filteredArr.push(arr[i])
//         }
//     }
//     return filteredArr;
// }
// var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
// console.log(result);

// create a forloop that checks the average number or larger values,

// function betterThanAverage(arr) {
//     var sum = 0;
//     var average = 0
//     for (var i = 0; i < arr.length; i++){
//         sum += arr[i]
//     }
//     average = sum/arr.length
//     var count = 0
//     for (var i = 0;  i <arr.length; i++){
//     if (arr[i] >average){
//         count++
//     }
//     }
//     return count;
// }
// var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
// console.log(result);


// function reverse(arr) {
//     for (var i = 0; i < Math.floor(arr.length/2); i++) {
//         var temp = arr[i]
//         arr[i] = arr[arr.length-1-i]
//         arr[arr.length-1-i] = temp
//     }
//     return arr;
// }

// var result = reverse(["a", "b", "c", "d", "e"]);
// console.log(result); // we expect back ["e", "d", "c", "b", "a"]

// create a loop that adds the last two values of an array and pushes it into the array

// function fibonacciArray(n) {
//     var fibArr = [0, 1];
//     // var temp = 0
//     for (var i = 1; i < fibArr.length;i++) {
//         // temp = fibArr[i-2] + fibArr[i-1]
//         while (fibArr.length <= 9) {
//             fibArr.push(fibArr[i] + fibArr[i-1])
//     }
//     return fibArr;    this is my small brain pass
// }
// }

// var result = fibonacciArray(10);
// console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


function fibonacciArray(n) {
    var fibArr = [0, 1];
    for (var i = 1; i < n-1;i++) {
        fibArr.push(fibArr[i] + fibArr[i-1])
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

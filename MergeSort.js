// unsorted array
// in this merge sort, we are specifically sorting a simple array where each element of the array is of a primitive datatype
// sorting works in JS - UTF-8, (previously ASCII table)

function mergeSort(array) {

    // all recursive functions, we need something called the BASE CASE
    // because recursive functions are similar to the `WHILE` LOOP. So it can go on infinitely if there is no base case

    if (array.length <= 1) {
        return array;
    }
    // what this hints is that, we will be breaking down the array until they are of length of 1 ONLY
    // we will have array.length number of arrays in mergesort;

    // MEAT PORTION OF THE ALGO
    // THIS portion accounts for wyh mergeSort will be log(n) in time complexity

    let middleIndex = Math.floor(array.length / 2); // rounding down

    let left = mergeSort(array.slice(0, middleIndex)); // mergeSort on the left half of the array that we sliced
    let right = mergeSort(array.slice(middleIndex));

    // The ACTUAL SORTING
    let sortedValues = [];
    let leftIndexSlider = 0;
    let rightIndexSlider = 0; // on each recursion iteration, this will reset to ZERO, becuase we initialize again

    // if index haven't reach the end, we continue
 while(leftIndexSlider < left.length && rightIndexSlider < right.length){
if (left[leftIndexSlider] < right[rightIndexSlider]) {
    sortedValues.push(left[leftIndexSlider]);
    leftIndexSlider += 1;
} else {
    sortedValues.push(right[rightIndexSlider]);
    rightIndexSlider += 1;
}
 }
 // this is currently imperfect algorithm because it will have leftover values in the left or right array;

 sortedValues.push(...left.slice(leftIndexSlider));
 sortedValues.push(...right.slice(rightIndexSlider));

 return sortedValues;
}
module.exports = mergeSort;
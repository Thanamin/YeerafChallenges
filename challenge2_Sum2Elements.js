// Given an array of integers nums and an integer sum, return the indexes of 2 elements in the array that add up to the given sum.

// Example 1:
// Input: nums = [2,7,11,15], sum = 9
// Output: 0,1
// Explanation: Because nums[0] + nums[1] = 9
// Example 2:
// Input: nums = [3,2,4], sum = 6
// Output: 1,2
// Explanation: Because nums[1] + nums[2] = 6
// Example 3:
// Input: nums = [3,1,2,3], sum = 6
// Output: 0,3
// Explanation: Because nums[0] + nums[3] = 6
// Example 4:
// Input: nums = [3,2], sum = 3
// Output: no output
// Explanation: The are no two numbers that add up to 3
// Notes:

// There may be duplications in the array (see example 3)
// The array is not necessarily sorted
// The may be multiple pairs of elements that add up to the given sum. For simplicity, only the first pair you can find
// After finish, please submit the code on github and send it to jobs@yeeraf.co.th

// NOTE: Any programming language can be used



///input Number in Array and sum
// const numArray = [1, 2, 3, 4, 5];
// const sum = 6;
//////////////////////

const Sum2Elements = (numArray = [0], sum = 0) => {

    let indexI, indexJ, a, b;

    for (indexI = 0; indexI < numArray.length; indexI++) {
        for (indexJ = indexI + 1; indexJ < numArray.length; indexJ++) {
            if (numArray[indexI] + numArray[indexJ] === sum) {
                a = indexI
                b = indexJ
                break
            } else if (indexI === (numArray.length - 2) && (indexJ === (numArray.length - 1))) {
                console.log("no output")
            }
        }
        if (a === indexI && b === indexJ) {
            console.log(`${a},${b}`)
            break
        }
    }
}

Sum2Elements([3,2], 3) ; //  Input nums(array) and sum

// Write a function called ThreeFive to print number from 1 to 100 in a new line.

// if the number is divisible by 3 then print "Three"
// if the number is divisible by 5 then print "Five"
// if the number is divisible by both 3 and 5 then print "ThreeFive"
// Otherwise just print the number
// for example

// 1
// 2
// Three
// 4
// Five
// Three
// 7
// 8
// Three
// Five
// 11
// Three
// 13
// 14
// ThreeFive
// ....
// After finish, please submit the code on github and send it to jobs@yeeraf.co.th

// NOTE: Any programming language can be used


const ThreeFive = (number) => {
    if (number > 100 || number < 1) {
        console.log("Please input number from 1 to 100");
    } else {
        if ((number % 3 === 0) && (number % 5 === 0)) {
            console.log("ThreeFive");
        } else if (number % 3 === 0) {
            console.log("Three");
        } else if (number % 5 === 0) {
            console.log("Five");
        } else {
            console.log(number);
        }
    }
}

ThreeFive(15);
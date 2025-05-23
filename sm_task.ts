// Write a function that receives two sequences: A and B of integers and returns one sequence C.
// Sequence C should contain all elements from sequence A (maintaining the order) except those,
// that are present in sequence B p times, where p is a prime number.

// Example:
// A=[2,3,9,2,5,1,3,7,10] 
// B=[2,1,3,4,3,10,6,6,1,7,10,10,10] 
// C=[2,9,2,5,7,10] 

// Notes: 
// 1. The time complexity is important – try to write an algorithm with good time complexity and specify it in your answer. 
// 2. You can choose any reasonable type present in your chosen language to represent the sequence. 
// 3. Make sure the function signature is correct. 
// 4. Write your own code to test primality. 

const arrA = [2, 3, 9, 2, 5, 1, 3, 7, 10];
const arrB = [2, 1, 3, 4, 3, 10, 6, 6, 1, 7, 10, 10, 10];

const checkIfPrime = (num: number): boolean => {
    if (num < 2 || (num !== 2 && num % 2 === 0))
        return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2)
        if (num % i === 0)
            return false;
    return true;
}
// Complexity in checkIfPrime is O(a), since I loop through the array once

const getSubtractedArray = (arrayA: number[], arrayB: number[]): number[] => {
    let primesArray: number[] = [];
    const occurrences = new Map<number, number>();

    for (const value of arrayB) {
        occurrences.set(value, (occurrences.get(value) || 0) + 1);
    };

    for (const [num, count] of occurrences.entries()) {
        if (checkIfPrime(count)) {
            primesArray.push(num);
        };
    };
    // For building the Map with values from arrayB – O(b√b),

    return arrayA.filter(item => !primesArray.includes(item));
    // For the final filtering - to recieve result array – O(c*d)
    // Overall, the total complexity is O(a + c*d + b√b
}

console.log(getSubtractedArray(arrA, arrB));


//!! ********************************
//!! Please hit yarn and yarn smRun to run the code :)
//!! ********************************
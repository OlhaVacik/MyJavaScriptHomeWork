function sumNumericArray(arr: number[]): void {

    let x = 0;
    let sumArr = 0;

    while (x < arr.length) {
        sumArr += arr[x];
        x ++;
    }
    console.log(sumArr);
}

sumNumericArray([25, 67, 85, 28, 90, 100]);

function sumArray (arr1: number[], arr2: string[]): void {
    sumNumbers(arr1);
    joinStrings(arr2);
}

function sumNumbers(arr1: number[]): void {
    const sumArr = arr1.reduce((sum: number, num: number) => sum + num, 0);
    console.log(sumArr);
}

function joinStrings(arr2: string[]): void {
    const concatArr = arr2.join(' ');
    console.log(concatArr);
}

sumArray([23, 54, 2, 6, 8], ['Hi', 'I', 'am', 'Peter']);


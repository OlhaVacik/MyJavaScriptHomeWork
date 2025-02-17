const sumNumericArray1 = (arr: number[]): void => {
    let x = 0;
    let sumArr = 0;

    while (x < arr.length) {
        sumArr += arr[x];
        x ++;
    }
    console.log(sumArr);
};

sumNumericArray1([25, 67, 85, 28, 90, 100]);

const sumArray1 = (arr1: number[], arr2: string[]): void => {
    sumNumbers1(arr1);
    joinStrings1(arr2);
};

const sumNumbers1 = (arr1: number[]): void => {
    const sumArr = arr1.reduce((sum: number, num: number) => sum + num, 0);
    console.log(sumArr);
};


const joinStrings1 = (arr2: string[]): void => {
    const concatArr = arr2.join(' ');
    console.log(concatArr);
};

sumArray1([23, 54, 2, 6, 8], ['Hi', 'I', 'am', 'Peter']);

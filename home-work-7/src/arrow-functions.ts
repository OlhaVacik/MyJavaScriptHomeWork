const doArrowAdditionFun = (arr: number[]): void => {
    let x = 0;
    let sumArr = 0;

    while (x < arr.length) {
        sumArr += arr[x];
        x ++;
    }
    console.log(sumArr);
};

doArrowAdditionFun([25, 67, 85, 28, 90, 100]);

const doArrowAddition = (arr1: number[], arr2: string[]): void => {
    arrowFun1(arr1);
    arrowFun2(arr2);
};

const arrowFun1 = (arr1: number[]): void => {
    const sumArr1 = arr1.reduce((sum: number, num: number) => sum + num, 0);
    console.log(sumArr1);
};


const arrowFun2 = (arr2: string[]): void => {
    const sumArr2 = arr2.join(' ');
    console.log(sumArr2);
};

doArrowAddition([23, 54, 2, 6, 8], ['Hi', 'I', 'am', 'Peter']);

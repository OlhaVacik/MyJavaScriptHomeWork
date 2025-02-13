
function doArrayAddition(arr: number[]): void {

    let x = 0;
    let sumArr = 0;

    while (x < arr.length) {
        sumArr += arr[x];
        x ++;
    }
    console.log(sumArr);
}

doArrayAddition([25, 67, 85, 28, 90, 100]);

function doArrayAddition1 (arr1: number[], arr2: string[]): void {
    addition1(arr1);
    addition2(arr2);
}

function addition1(arr1: number[]): void {
    const sumArr = arr1.reduce((sum: number, num: number) => sum + num, 0);
    console.log(sumArr);
}


function addition2(arr2: string[]): void {
    const sumArr = arr2.join(' ');
    console.log(sumArr);
}

doArrayAddition1([23, 54, 2, 6, 8], ['Hi', 'I', 'am', 'Peter']);


const doArrayAddition = (arr) => {
    let x = 0;
    let sumArr = 0;

    while (x < arr.length) {
        sumArr += arr[x];
        x ++;
    }
    console.log(sumArr);
};

const arr = [25, 67, 85, 28, 90, 100];
doArrayAddition(arr);

const doArrayAddition1 = (arr1, arr2) => {
    addition1(arr1);
    addition2(arr2);
};

const addition1 = (arr1) => {
    const sumArr = arr1.reduce((sum, num) => sum + num, 0);
    console.log(sumArr);
};


const addition2 = (arr2) => {
    const sumArr = arr2.join(" ");
    console.log(sumArr);
};

doArrayAddition1([23, 54, 2, 6, 8], ["Hi", 'I', "am", "Peter"]);

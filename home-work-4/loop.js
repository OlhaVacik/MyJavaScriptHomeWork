function loop() {
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
}

loop();

const iter1 = "0123456789";

let subsequence = "";
for (const x of iter1) {
    subsequence += x + "\n";
}
console.log(subsequence);


const oneObject = {a:0, b:1, c:2, d:3, e:4, f:5, j:6, k:7, l:8, m:9};

let value = "";
for (const y in oneObject) {
    value += oneObject[y] + "\n";
}
console.log(value);

function oneNum() {
    let i = 0;

    while (i < 10) {
        console.log(i);
        i++;
    }

}

oneNum();

function nextNum() {
    let i = 0;
    do {
        console.log(i);
        i++;
    } while (i < 10);
}

nextNum();

function loop1() {
    for (let j = 100; j >= 0; j -= 10) {
        console.log(j);
    }
}

loop1();

function loop2() {
    let i = 100;
    while (i >= 0) {
        console.log(i);
        i -= 10;
    }
}

loop2();

function loop3() {
    let i = 100;
    do {
        console.log(i);
        i -= 10;
    } while (i >= 10);
}

loop3();

function loop4() {
    const iter1 = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0];

    let subsequence = "";
    for (const x of iter1) {
        subsequence += x + "\n";
    }
    console.log(subsequence);
}

loop4();

function loop5() {
    const iter1 = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0];

    let subsequence = "";
    for (const x in iter1) {
        subsequence += iter1[x] + "\n";
    }
    console.log(subsequence);
}

loop5();

const arr = [1, 25, 34, 55];
const arr1 = ['add', 'Name', 'room'];
const arr2 = [true, false, true, false, false];
const arr3 = ['any', 45, true, [1,3,5,7,9], {password: true, firstName: "Name", lastName: "Name2"} ];
const mapArr = arr.map((x) => x * 2);

arr.push(78);
console.log(arr);
console.log(arr.length);
console.log(mapArr);
arr1.unshift("Medley");
console.log(arr1);
console.log(arr2.includes(true));
arr3.forEach((item, index) => {
    console.log(`${index}: ${item}`);
});

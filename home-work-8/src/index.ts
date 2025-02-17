import { Car, Bicycle, Engine } from './abstraction';

const car = new Car('BMW', 200, 'black', new Engine(220));
const car1 = new Car('Toyota', 120, 'red', new Engine(200));
const bicycle = new Bicycle('BMX', 30);
const bicycle1 = new Bicycle('Mountings Bicycle', 25);

car.move();
car.stop();
car.choiceColor();
car1.move();
car1.stop();
car1.choiceColor();
car1.startEngine();


console.log('—'.repeat(20));

bicycle.move();
bicycle1.move();

console.log('—'.repeat(20));

import { Result } from './json-interface';

async function getJson(): Promise<Result> {
    const response = await fetch('https://api.restful-api.dev/objects');
    const json = await response.json() as Result;
    return json;
}

(async () => {
    const data = await getJson();
    console.log(data[0]);
})();

console.log('—'.repeat(20));


import { ResultsClass, DataClass } from './json-class';

(async () => {
    const data1 = await getJson();
    console.log(data1[2]);
    console.log(data1[11].data?.Price);
    const data2 = new ResultsClass('14', 'Apple Watch Series 10', data1.find(item => item.id === '6') ? new DataClass(
        data1.find(item => item.id === '3')!.data?.color || '',
        data1.find(item => item.id === '3')!.data?.capacity || '',
        data1.find(item => item.id === '6')!.data?.price || 0,
        data1.find(item => item.id === '6')!.data?.generation || '',
        data1.find(item => item.id === '6')!.data?.year || 0
    ) : null);
    data2.sayYourChoice();
    console.log(data2.lookSomePrices());
    console.log(data2.name);
})();

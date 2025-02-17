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

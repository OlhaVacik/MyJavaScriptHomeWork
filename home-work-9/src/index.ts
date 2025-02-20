
import { AdvancedFormulaMaxHR, FormulaMaxHR} from './class-formulas';
import { HeartRateZones } from './class-zone';

const person1 = new FormulaMaxHR('John', 55, 65, 'standard');

console.log(person1.maxHR());
console.log(person1.getHeartRateReserve());
console.log(person1.standardHRmax());
console.log(person1.tanakaHRmax());
console.log(person1.gelishHRmax());

console.log('—'.repeat(20));


const person2 = new HeartRateZones('Jane', 45, 70, 'gelish');

console.log(person2.getZones());
console.log(person2.maxHR());
console.log(person2.getHeartRateReserve());
console.log(person2.standardHRmax());
console.log(person2.tanakaHRmax());

console.log('—'.repeat(20));

const person3 = new AdvancedFormulaMaxHR('Jack', 35, 60);

console.log(person3.maxHR());

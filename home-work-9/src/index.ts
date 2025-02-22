import { FormulaMaxHR } from './class-formulas';
import { AdvancedFormulaMaxHR } from './class-advance-formula';
import { HeartRateZones } from './class-zone';
import { AthletePerson } from './class-athlete-person';
import { printAllFormula, printReserveRate, printHRmax, printZones} from './functions-print';

const person1 = new FormulaMaxHR('John', 55, 65, 'standard');
console.log(person1.maxHR());
console.log(person1.standardHRmax());
console.log(person1.tanakaHRmax());
console.log(person1.gelishHRmax());

console.log('—'.repeat(20));

const person2 = new HeartRateZones('Jane', 45, 70);
console.log(person2.getZones());
console.log(person2.maxHR());
console.log(person2.getHeartRateReserve());
console.log(person2.zone1);
console.log(person2.zone5);

console.log('—'.repeat(20));

const person3 = new AdvancedFormulaMaxHR('Jack', 35, 60);
console.log(person3.maxHR());

console.log('—'.repeat(20));

const athlete = new AthletePerson('Alex', 33, 54, 'running', 'gelish');
printAllFormula(athlete);
printReserveRate(athlete);

console.log('—'.repeat(20));

const advance = new AdvancedFormulaMaxHR('Bob', 33, 54);
printHRmax(advance);

console.log('—'.repeat(20));

const person4 = new HeartRateZones('Jane', 45, 70);
printZones(person4);

import { IFormula, IZones } from './interfaces';
import { Person } from './class-abstract-person';

export function printAllFormula(formula: IFormula): void {
    console.log(`Your HRmax pulse: ${formula.gelishHRmax()} Using Gelish Formula`);
    console.log(`Your HRmax pulse: ${formula.standardHRmax()} Using Standard Formula`);
    console.log(`Your HRmax pulse: ${formula.tanakaHRmax()} Using Tanaka Formula`);
}

export function printReserveRate(person: Person): void {
    console.log(`Hi ${person.name}, Your reserve ${person.getHeartRateReserve()}.`);
}

export function printHRmax(max: Person): void {
    console.log(`You are ${max.age} Don't exceed ${max.maxHR()}.`);
}

export function printZones(zone: IZones): void {
    console.log(`The pulse zone 1: ${zone.zone1}. Light activity zone.`);
    console.log(`The pulse zone 2: ${zone.zone2}. Moderate load zone.`);
    console.log(`The pulse zone 3: ${zone.zone3}. Aerobic zone.`);
    console.log(`The pulse zone 4: ${zone.zone4}. Anaerobic zone.`);
    console.log(`The pulse zone 5: ${zone.zone5}. Maximum load zone.`);
}

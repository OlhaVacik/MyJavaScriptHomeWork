import { IFormula, IZones } from './interfaces';
import { Person } from './class-abstract-person';

export function printAllFormula(formula: IFormula): string[] {
    const allFormulas = [
        `Your HRmax pulse: ${formula.gelishHRmax()} Using Gelish Formula`,
        `Your HRmax pulse: ${formula.standardHRmax()} Using Standard Formula`,
        `Your HRmax pulse: ${formula.tanakaHRmax()} Using Tanaka Formula`
    ];
    return allFormulas;
}

export function printReserveRate(person: Person): string {
    const reserve = `Hi ${person.name}, Your reserve ${person.getHeartRateReserve()}.`;
    return reserve;
}

export function printHRmax(max: Person): string {
    const maxPulse = `You are ${max.age} Don't exceed ${max.maxHR()}.`;
    return maxPulse;
}

export function printZones(zone: IZones): string[] {
    const zones = [
        `The pulse zone 1: ${zone.zone1}. Light activity zone.`,
        `The pulse zone 2: ${zone.zone2}. Moderate load zone.`,
        `The pulse zone 3: ${zone.zone3}. Aerobic zone.`,
        `The pulse zone 4: ${zone.zone4}. Anaerobic zone.`,
        `The pulse zone 5: ${zone.zone5}. Maximum load zone.`
    ];
    return zones;
}

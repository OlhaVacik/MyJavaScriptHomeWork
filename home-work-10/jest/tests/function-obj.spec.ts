import { describe, it} from '@jest/globals';
import { expect } from '@jest/globals';
import { AthletePerson } from '../src/class-athlete-person';
import { printAllFormula, printReserveRate, printHRmax, printZones } from '../src/functions-print';
import { HeartRateZones} from '../src/class-zone';

describe('Jest test suite: printAllFormula', () => {
    it('Should return array with correct strings for AthletePerson', () => {
        const formula = new AthletePerson('Bob', 32, 55, 'swimming', 'gelish');
        const expectedOutput = [
            `Your HRmax pulse: ${formula.gelishHRmax()} Using Gelish Formula`,
            `Your HRmax pulse: ${formula.standardHRmax()} Using Standard Formula`,
            `Your HRmax pulse: ${formula.tanakaHRmax()} Using Tanaka Formula`
        ];
        const result = printAllFormula(formula);

        expect(result).toEqual(expectedOutput);
    });
    it('Should return array from three elements', () => {
        const formula = new AthletePerson('Bob', 32, 55, 'swimming', 'gelish');
        const result = printAllFormula(formula);

        expect(result.length).toBe(3);
    });
});

describe('Jest test suite: printReserveRate', () => {
    it('Should return string with correct reserve rate', () => {
        const athlete = new AthletePerson('Bob', 32, 55, 'swimming', 'gelish');
        const expectedOutput = `Hi ${athlete.name}, Your reserve ${athlete.getHeartRateReserve()}.`;
        const result = printReserveRate(athlete);

        expect(result).toEqual(expectedOutput);
    });
});

describe('Jest unit test: printHRmax', () => {
    it('Should return string with correct max rate', () => {
        const athlete = new AthletePerson('Tom', 22, 65, 'running', 'gelish');
        const expectedOutput = `You are ${athlete.age} Don't exceed ${athlete.maxHR()}.`;
        const result = printHRmax(athlete);

        expect(result).toEqual(expectedOutput);
    });
});

describe('Jest unit test: printZones', () => {
    it('Should return array with correct pulses zones', () => {
        const zone = new HeartRateZones('Jane', 45, 70);
        const expectedOutput = [
            `The pulse zone 1: ${zone.zone1}. Light activity zone.`,
            `The pulse zone 2: ${zone.zone2}. Moderate load zone.`,
            `The pulse zone 3: ${zone.zone3}. Aerobic zone.`,
            `The pulse zone 4: ${zone.zone4}. Anaerobic zone.`,
            `The pulse zone 5: ${zone.zone5}. Maximum load zone.`
        ];
        const result = printZones(zone);

        expect(result).toEqual(expectedOutput);
    });
});

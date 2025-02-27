import { describe, test, expect, beforeEach, Mocked, vi } from 'vitest';
import { AthletePerson } from '../src/class-athlete-person';
import { HeartRateZones } from '../src/class-zone';
import { printAllFormula, printReserveRate, printZones } from '../src/functions-print';
import { IFormula, IZones } from '../src/interfaces';
import { Person } from '../src/class-abstract-person';

let mockedAthlete: Mocked<AthletePerson>;
let mockedZones: Mocked<HeartRateZones>;
let mockFormula: Mocked<IFormula>;
let mockPerson: Mocked<Person>;
let mockZones: Mocked<IZones>;

beforeEach(() => {
    mockedAthlete = {
        maxHR: vi.fn(),
        gelishHRmax: vi.fn(),
        standardHRmax: vi.fn(),
        tanakaHRmax: vi.fn()
    } as unknown as Mocked<AthletePerson>;

    mockedZones = {
        getZones: vi.fn(),
        getHeartRateReserve: vi.fn()
    } as unknown as Mocked<HeartRateZones>;

    mockFormula = {
        gelishHRmax: vi.fn(),
        standardHRmax: vi.fn(),
        tanakaHRmax: vi.fn()
    } as unknown as Mocked<IFormula>;

    mockPerson = {
        name: 'Alice',
        getHeartRateReserve: vi.fn()
    } as unknown as Mocked<Person>;

    mockZones = {
        zone1: [60, 100],
        zone2: [101, 120],
        zone3: [121, 140],
        zone4: [141, 160],
        zone5: [161, 180],
        getZones: vi.fn()
    } as unknown as Mocked<IZones>;
});

describe('AthletePerson mock tests', () => {
    test('maxHR() should return correct HRmax using mock', () => {
        mockedAthlete.maxHR.mockReturnValue(190);
        expect(mockedAthlete.maxHR()).toBe(190);
        expect(mockedAthlete.maxHR).toHaveBeenCalledTimes(1);
    });

    test('gelishHRmax() should return 180 with mock', () => {
        mockedAthlete.gelishHRmax.mockReturnValue(180);
        expect(mockedAthlete.gelishHRmax()).toBe(180);
        expect(mockedAthlete.gelishHRmax).toHaveBeenCalledTimes(1);
    });
});

describe('HeartRateZones mock tests', () => {
    test('getHeartRateReserve() should return 50 with mock', () => {
        mockedZones.getHeartRateReserve.mockReturnValue(50);
        expect(mockedZones.getHeartRateReserve()).toBe(50);
        expect(mockedZones.getHeartRateReserve).toHaveBeenCalledTimes(1);
    });
});

describe('printAllFormula function tests with mocks', () => {
    test('should return correct HRmax formulas output', () => {
        mockFormula.gelishHRmax.mockReturnValue(180);
        mockFormula.standardHRmax.mockReturnValue(190);
        mockFormula.tanakaHRmax.mockReturnValue(178);
        const result = printAllFormula(mockFormula);
        expect(result).toEqual([
            'Your HRmax pulse: 180 Using Gelish Formula',
            'Your HRmax pulse: 190 Using Standard Formula',
            'Your HRmax pulse: 178 Using Tanaka Formula'
        ]);
        expect(mockFormula.gelishHRmax).toHaveBeenCalledTimes(1);
        expect(mockFormula.standardHRmax).toHaveBeenCalledTimes(1);
        expect(mockFormula.tanakaHRmax).toHaveBeenCalledTimes(1);
    });
});

describe('printZones function tests with mocks', () => {
    test('should return correct zone descriptions', () => {
        const result = printZones(mockZones);
        expect(result).toEqual([
            'The pulse zone 1: 60,100. Light activity zone.',
            'The pulse zone 2: 101,120. Moderate load zone.',
            'The pulse zone 3: 121,140. Aerobic zone.',
            'The pulse zone 4: 141,160. Anaerobic zone.',
            'The pulse zone 5: 161,180. Maximum load zone.'
        ]);
    });
});

describe('printReserveRate function tests with mocks', () => {
    test('should return correct reserve heart rate massage', () => {
        mockPerson.getHeartRateReserve.mockReturnValue(120);
        const result = printReserveRate(mockPerson);
        expect(result).toBe('Hi Alice, Your reserve 120.');
        expect(mockPerson.getHeartRateReserve).toHaveBeenCalledTimes(1);
    });
});

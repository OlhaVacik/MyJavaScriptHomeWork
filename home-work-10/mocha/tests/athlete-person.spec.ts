import { expect } from 'chai';
import { describe, it } from 'mocha';
import { AthletePerson } from '../src/class-athlete-person';


describe('Methods of Class Athlete-Person', () => {

    describe ('Mocha test gelishHRmax()', () => {
        it('Should correctly calculate Gelish HRmax', () => {

            const athlete = new AthletePerson('John', 30, 60, 'running', 'gelish');

            const expectedHrmax = Math.round(207 - 30);

            expect(athlete.gelishHRmax()).to.be.equal(expectedHrmax);
        });
    });

    describe ('Mocha test tanakaHRmax()', () => {
        it('Should correctly calculate Tanaka HRmax', () => {

            const athlete = new AthletePerson('John', 30, 60, 'running', 'gelish');

            const expectedHrmax = Math.round(208 - 30);

            expect(athlete.tanakaHRmax()).to.be.equal(expectedHrmax);
        });
    });

    describe ('Mocha test standardHRmax()', () => {
        it('Should correctly calculate Standard HRmax', () => {

            const athlete = new AthletePerson('John', 30, 60, 'running', 'gelish');

            const expectedHrmax = Math.round(220 - 30);

            expect(athlete.standardHRmax()).to.be.equal(expectedHrmax);
        });
    });

    describe ('Mocha test correct value', () => {
        it('should return an integer value Gelish HRmax', () => {

            const athlete = new AthletePerson('Tom', 25, 65, 'swimming', 'standard');

            expect(athlete.gelishHRmax()).to.be.a('number');
            expect(athlete.gelishHRmax() % 1).to.be.equal(0);
        });

        it('should return an integer value Tanaka HRmax', () => {

            const athlete = new AthletePerson('Tom', 25, 65, 'swimming', 'standard');

            expect(athlete.tanakaHRmax()).to.be.a('number');
            expect(athlete.tanakaHRmax() % 1).to.be.equal(0);
        });

        it('should return an integer value Standard HRmax', () => {

            const athlete = new AthletePerson('Tom', 25, 65, 'swimming', 'standard');

            expect(athlete.standardHRmax()).to.be.a('number');
            expect(athlete.standardHRmax() % 1).to.be.equal(0);
        });
    });
});

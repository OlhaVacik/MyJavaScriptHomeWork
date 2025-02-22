import {IFormula } from './interfaces';
import { Person } from './class-abstract-person';

export class AdvancedFormulaMaxHR extends Person implements IFormula {
    public constructor (name:string, age:number, restingHR: number) {
        super(name, age, restingHR);
    }
    public standardHRmax(): number {
        return  215 - this.age;

    }
    public tanakaHRmax(): number {
        return 207 - (0.7 * this.age);
    }

    public gelishHRmax(): number {
        return 206 - (0.7 * this.age);
    }

    public maxHR(): number {
        const allMaxHR = [this.standardHRmax(), this.tanakaHRmax(), this.gelishHRmax()];
        const advancedMaxHR = allMaxHR.reduce((a: number, b: number) => a + b, 0) / allMaxHR.length;
        console.log(`Your max heart rate is ${Math.ceil(advancedMaxHR)}`);
        return Math.ceil(advancedMaxHR);
    }

}

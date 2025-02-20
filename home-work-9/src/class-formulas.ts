import {Formula } from './interfaces';
import { Person } from './class-abstract-person';

export class FormulaMaxHR extends Person implements Formula {
    private formulaType: 'standard' | 'tanaka' | 'gelish';

    public constructor (name:string, age:number, restingHR: number, formulaType: 'standard' | 'tanaka' | 'gelish') {
        super(name, age, restingHR);
        this.formulaType = formulaType;


    }

    public standardHRmax(): number {
        return  220 - this.age;

    }
    public tanakaHRmax(): number {
        return 208 - (0.7 * this.age);
    }

    public gelishHRmax(): number {
        return Math.ceil(205.8 - (0.685 * this.age));
    }


    public maxHR(): number {
        switch  (this.formulaType) {
            case 'standard':
                console.log(`Your max standard heart rate is ${this.standardHRmax()}`);
                return this.standardHRmax();
            case 'tanaka':
                console.log(`Your max Tanaka heart rate is ${this.tanakaHRmax()}`);
                return this.tanakaHRmax();
            case 'gelish':
                console.log(`Your max Gelish heart rate is ${this.gelishHRmax()}`);
                return this.gelishHRmax();
            default:
                throw new Error('Invalid formula type');
        }
    }
}


export class AdvancedFormulaMaxHR extends Person implements Formula {
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

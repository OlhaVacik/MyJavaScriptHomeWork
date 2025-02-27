import { Person } from './class-abstract-person';
import { IFormula } from './interfaces';

export class AthletePerson extends Person implements IFormula {
    public activities: string;
    private formulaType: 'standard' | 'tanaka' | 'gelish';
    public constructor (name: string, age: number, restingHR: number, activities: string, formulaType: 'standard' | 'tanaka' | 'gelish') {
        super(name, age, restingHR);
        this.activities = activities;
        this.formulaType = formulaType;
    }
    public gelishHRmax(): number {
        const gelish = Math.round(207 - this.age);
        return gelish;
    }
    public standardHRmax(): number {
        const standard = Math.round(220 - this.age);
        return standard;
    }
    public tanakaHRmax(): number {
        const tanaka = Math.round(208 - this.age);
        return tanaka;
    }
    public maxHR(): number {
        switch (this.formulaType) {
            case 'gelish':
                return this.gelishHRmax();
            case 'tanaka':
                return this.tanakaHRmax();
            default:
                return this.standardHRmax();
        }
    }

}

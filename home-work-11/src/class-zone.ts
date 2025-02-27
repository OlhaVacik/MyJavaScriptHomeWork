import { Person } from './class-abstract-person';
import { IZones } from './interfaces';

export class HeartRateZones extends Person implements IZones {
    public zone1: [number, number] = [0, 0];
    public zone2: [number, number] = [0, 0];
    public zone3: [number, number] = [0, 0];
    public zone4: [number, number] = [0, 0];
    public zone5: [number, number] = [0, 0];

    public constructor (name:string, age:number, restingHR: number) {
        super(name, age, restingHR);
        this.calculateZones();
    }

    public maxHR(): number {
        return 220 - this.age;
    }

    public getZones(): Record<string, [number, number]> {
        return {
            zone1: this.zone1,
            zone2: this.zone2,
            zone3: this.zone3,
            zone4: this.zone4,
            zone5: this.zone5
        };
    }

    private calculateZones(): void {
        const hrr = this.getHeartRateReserve();
        this.zone1 = [this.restingHR, Math.round(this.restingHR + (hrr * 0.5))];
        this.zone2 = [Math.round(this.restingHR + (hrr * 0.5)), Math.round(this.restingHR + (hrr * 0.6))];
        this.zone3 = [Math.round(this.restingHR + (hrr * 0.6)), Math.round(this.restingHR + (hrr * 0.7))];
        this.zone4 = [Math.round(this.restingHR + (hrr * 0.7)), Math.round(this.restingHR + (hrr * 0.8))];
        this.zone5 = [Math.round(this.restingHR + (hrr * 0.8)), this.maxHR()];
    }
}

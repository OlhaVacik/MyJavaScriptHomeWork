export abstract class Person {
    public name: string;
    public age: number;
    public restingHR: number;

    public constructor (name:string, age:number, restingHR: number) {
        this.name = name;
        this.age = age;
        this.restingHR = restingHR;
    }

    public abstract maxHR(): number;

    public getHeartRateReserve(): number {
        return this.maxHR() - this.restingHR;
    }
}

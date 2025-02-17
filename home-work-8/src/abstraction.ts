export abstract class Vehicle {
    protected _name: string;
    protected _speed: number;
    public constructor(name: string, speed: number) {
        this._name = name;
        this._speed = speed;
    }

    public stop(): string {
        return `${this._name} stopped`;
    }

    public abstract move(): void;
}

export class Engine {
    public _power: number;
    public constructor( power: number) {
        this._power = power;
    }
    public start(): void {
        console.log(`Engine started with ${this._power} horsepower`);
    }

    public stop(): void {
        console.log('Engine stopped');
    }
}

export class Car extends Vehicle {
    private _color: string;
    private engine: Engine;
    public constructor(name: string, speed: number, color: string, engine: Engine) {
        super(name, speed);
        this._color = color;
        this.engine = engine;
    }

    public choiceColor(): void {
        console.log(`My choice color is ${this._color}`);
    }

    public move(): void {
        console.log(`${this._name} is moving at ${this._speed} km/h`);
    }

    public stop(): string {
        this.engine.stop();
        return super.stop();
    }

    public startEngine(): void {
        this.engine.start();
    }
}

export class Bicycle extends Vehicle {
    public constructor(name: string, speed: number) {
        super(name, speed);
    }

    public move(): void {
        console.log(`${this._name} is moving at ${this._speed} km/h`);
    }
}


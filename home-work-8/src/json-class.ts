

export class DataClass {
    public color: string;
    public capacity: string | number;
    public price: number;
    public generation: string;
    public year: number;

    public constructor(
        color: string,
        capacity: string | number,
        price: number,
        generation: string,
        year: number

    ) {
        this.color = color;
        this.capacity = capacity;
        this.price = price;
        this.generation = generation;
        this.year = year;

    }
}

export class ResultsClass  {
    public constructor(
        public id: string,
        public name: string,
        public data: DataClass | null
    ) {
        this.id = id;
        this.name = name;
        this.data = data;
    }


    public sayYourChoice(): void {
        console.log(`My Choice is ${this.name}`);
    }

    public lookSomePrices(): string {
        const prices = this.data?.price ? this.data.price : 0;
        const priceName = `${this.name} price is ${prices}`;
        return  priceName;
    }

}

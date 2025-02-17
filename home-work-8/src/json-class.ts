import {getJson } from './json-interface';
class DataClass {
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

class ResultsClass  {
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


(async () => {
    const data1 = await getJson();
    console.log(data1[2]);
    console.log(data1[11].data?.Price);
    const data2 = new ResultsClass('14', 'Apple Watch Series 10', data1.find(item => item.id === '6') ? new DataClass(
        data1.find(item => item.id === '3')!.data?.color || '',
        data1.find(item => item.id === '3')!.data?.capacity || '',
        data1.find(item => item.id === '6')!.data?.price || 0,
        data1.find(item => item.id === '6')!.data?.generation || '',
        data1.find(item => item.id === '6')!.data?.year || 0
    ) : null);
    data2.sayYourChoice();
    console.log(data2.lookSomePrices());
    console.log(data2.name);
})();



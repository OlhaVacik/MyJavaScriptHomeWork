interface Data {
    color?: string;
    capacity?: string | number;
    price?: number;
    generation?: string;
    year?: number;
    'CPU model'?: string;
    'Hard disk size'?: string;
    'Strap Colour'?: string;
    'Case Size'?: string;
    'Description'?: string;
    'Screen size'?: number;
    'Capacity'?: string;
    'Capacity GB'?: number;
    'Price'?: string;
}

interface Item {
    id: string;
    name: string;
    data: Data | null;
}

type Result = Item[];

export async function getJson(): Promise<Result> {
    const response = await fetch('https://api.restful-api.dev/objects');
    const json = await response.json() as Result;
    return json;
}

(async () => {
    const data = await getJson();
    console.log(data[0]);
})();

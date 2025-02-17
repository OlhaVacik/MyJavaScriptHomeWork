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

export type Result = Partial<Item>[];

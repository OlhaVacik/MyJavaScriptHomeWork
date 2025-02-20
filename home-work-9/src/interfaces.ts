export interface Formula {
    standardHRmax(): number;
    tanakaHRmax(): number;
    gelishHRmax(): number;
}


export interface Zones {
    zone1: [number, number];
    zone2: [number, number];
    zone3: [number, number];
    zone4: [number, number];
    zone5: [number, number];

    getZones(): Record<string, [number, number]>;
}

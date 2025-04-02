import { ApiWorld } from '../api-world';
import { initGlobal } from '../global';
import type { TestProject } from 'vitest/node';

const world = new ApiWorld();

export default function setup(project: TestProject): void {
    console.log('global hook');
    initGlobal();

    project.provide('world', world);
};

export { world };

declare module 'vitest' {
    export interface ProvidedContext {
        world: ApiWorld;
    }
}

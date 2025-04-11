import { After, Before } from '@cucumber/cucumber';
import { RobotDreamsWorld } from '../worlds/robot-dreams.world.ts';


export function browserContextHook(): void {
    Before(async function(this: RobotDreamsWorld) {
        this.context = await RobotDreamsWorld.browser.newContext();
    });

    After(async function(this: RobotDreamsWorld) {
        await this.context.close();
    });
}

import { After, Before } from '@cucumber/cucumber';
import { RobotDreamsWorld } from '../worlds/robot-dreams.world.ts';

export function pageHook(): void {
    Before(async function(this: RobotDreamsWorld) {
        this.page = await this.context.newPage();
    });

    After(async function(this: RobotDreamsWorld) {
        if (this.page && !this.page.isClosed()) {
            await this.page.close();
        }
    });
};

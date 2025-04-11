import { IWorldOptions, World } from '@cucumber/cucumber';
import { NordstromPage } from '../pages/nordstrom/nordstrom.page.ts';
import { Browser, BrowserContext, Page } from 'playwright';
import { NordstromHomePage } from '../pages/nordstrom/home/home.page.ts';


export class RobotDreamsWorld extends World {
    public static globalContext: Map<string, unknown>;
    public scenarioContext: Map<string, unknown>;

    public static browser: Browser;
    public context: BrowserContext;
    public page: Page;

    public get nordstromPage(): NordstromPage {
        if (!this._nordstromPage) {
            this._nordstromPage = new NordstromPage(this.page);
        }
        return this._nordstromPage;
    }

    public get homePage(): NordstromHomePage {
        if (!this._homePage) {
            this._homePage = new NordstromHomePage(this.page);
        }
        return this._homePage;
    }

    // pages
    private _nordstromPage: NordstromPage;
    private _homePage: NordstromHomePage;

    public constructor(options: IWorldOptions) {
        super(options);
        this.scenarioContext = new Map();
    }
}

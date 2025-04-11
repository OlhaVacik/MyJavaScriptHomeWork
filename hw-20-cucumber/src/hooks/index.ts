import { browserContextHook } from './browser-context.hook.ts';
import { browserHook } from './browser.hooks.ts';
import { globalContextHook } from './global-context.hook.ts';
import { pageHook } from './page.hooks.ts';

globalContextHook();
browserHook();
browserContextHook();
pageHook();

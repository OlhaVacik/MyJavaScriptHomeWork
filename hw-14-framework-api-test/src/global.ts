/* eslint-disable */
declare global {
    var testContext: Record<string, unknown>;
}

export function initGlobal(): void {
    globalThis.testContext = {};
}
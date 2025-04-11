export function getRandomTab(tabs: string[], exclude?: string): string {
    const filtered = exclude ? tabs.filter(tab => tab !== exclude) : tabs;

    if (filtered.length === 0) {
        throw new Error('No tabs available to choose after exclusion.');
    }

    const randomIndex = Math.floor(Math.random() * filtered.length);
    return filtered[randomIndex];
}

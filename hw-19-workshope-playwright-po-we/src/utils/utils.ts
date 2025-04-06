export function getRandomTab(tabs: string[], exclude: string): string {
    const filtered = tabs.filter(tab => tab !== exclude);
    const randomIndex = Math.floor(Math.random() * filtered.length);
    return filtered[randomIndex];
}

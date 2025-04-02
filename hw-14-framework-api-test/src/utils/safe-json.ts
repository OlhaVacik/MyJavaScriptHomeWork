export async function safeJson<T>(response: Response): Promise<T> {
    try {
        return await response.json();
    } catch {
        throw new Error('Failed to parse response as JSON.');
    }
}

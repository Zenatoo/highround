// Everything a reader saves stays on their device (localStorage). Storage can be blocked
// (private mode, strict settings): these never throw, the page just forgets on reload.

export function readJSON<T>(key: string): T | undefined {
  try {
    const raw = localStorage.getItem(key);
    return raw === null ? undefined : (JSON.parse(raw) as T);
  } catch {
    return undefined;
  }
}

export function writeJSON(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {}
}

export function removeKey(key: string) {
  try {
    localStorage.removeItem(key);
  } catch {}
}

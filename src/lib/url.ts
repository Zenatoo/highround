// Every internal link goes through here so the same build works under "/highround/" (GitHub Pages)
// and "/" (Windows app).
export function href(...parts: string[]): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const path = parts.filter(Boolean).join('/');
  return `${base}/${path}${path ? '/' : ''}`;
}

const REPO = 'https://github.com/Zenatoo/highround';

export function reportUrl(pageUrl: string, pageTitle: string): string {
  const params = new URLSearchParams({
    template: 'content-error.yml',
    title: `[Erreur] ${pageTitle}`,
    page: pageUrl,
  });
  return `${REPO}/issues/new?${params}`;
}

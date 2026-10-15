import { readdir, writeFile } from 'node:fs/promises';
import { resolve, sep } from 'node:path';
import { pathToFileURL } from 'node:url';
import { domain } from '../src/lib/variables.js';

export async function generateSitemap(directory, origin) {
    const files = await readdir(directory, { recursive: true });
    const urls = files
        .map((file) => file.split(sep).join('/'))
        .filter((file) => file.endsWith('.html') && !['404.html', '404/index.html'].includes(file))
        .sort()
        .map((file) => {
            const path = file.replace(/(^|\/)index\.html$/, '$1').replace(/\.html$/, '');
            const url = new URL(path.split('/').map(encodeURIComponent).join('/'), `${origin}/`).href;
            return `  <url><loc>${url.replaceAll('&', '&amp;')}</loc></url>`;
        });
    await writeFile(resolve(directory, 'sitemap.xml'),
        `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
    await generateSitemap('build', domain);
}

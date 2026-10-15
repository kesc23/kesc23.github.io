import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { generateSitemap } from '../scripts/sitemap.mjs';

test('sitemap includes built pages, encodes URLs, and excludes assets and 404 pages', async () => {
    const directory = await mkdtemp(join(tmpdir(), 'kesc-sitemap-'));
    try {
        await mkdir(join(directory, 'blog'));
        await mkdir(join(directory, '404'));
        for (const file of ['index.html', '404.html', '404/index.html', 'blog/index.html', 'blog/a & b.html', 'asset.js']) {
            await writeFile(join(directory, file), '');
        }
        await generateSitemap(directory, 'https://example.com');
        const xml = await readFile(join(directory, 'sitemap.xml'), 'utf8');
        assert.equal((xml.match(/<url>/g) || []).length, 3);
        assert.ok(xml.includes('<loc>https://example.com/</loc>'));
        assert.ok(xml.includes('<loc>https://example.com/blog/</loc>'));
        assert.ok(xml.includes('<loc>https://example.com/blog/a%20%26%20b</loc>'));
        assert.ok(!xml.includes('404') && !xml.includes('asset.js'));
    } finally {
        await rm(directory, { recursive: true, force: true });
    }
});

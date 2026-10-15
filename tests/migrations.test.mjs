import { test } from 'node:test';
import assert from 'node:assert/strict';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import { needsMigration } from '../src/lib/db/migrations.ts';
import { DB_VERSION } from '../src/lib/variables.js';

test('a fresh database initializes its version and closes without unfinished statements', async () => {
    const db = await open({ filename: ':memory:', driver: sqlite3.Database });
    try {
        await db.exec('CREATE TABLE options (name TEXT PRIMARY KEY, value TEXT)');
        assert.equal(await needsMigration(db), false);
        assert.equal((await db.get("SELECT value FROM options WHERE name = 'version'")).value, DB_VERSION);
        assert.equal(await needsMigration(db), false);
        assert.equal((await db.get('SELECT COUNT(*) AS count FROM options')).count, 1);
    } finally {
        await db.close();
    }
});

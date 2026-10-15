import { DB_VERSION } from "../variables.js";
import type { Database } from "sqlite";

export async function needsMigration( db: Database ): Promise<Boolean> {
    let result = await db.get( 'SELECT o.value FROM options o WHERE o.name = "version"');

    if( ! result ) {
        await db.run("INSERT OR IGNORE INTO options(name, value) VALUES (?, ?)", ["version", DB_VERSION]);
        return false;
    }

    let { value } = result;

    if( value != DB_VERSION ) return true
    return false;
}

export async function migrate( database: Database ) {
    let { value } = await database.get( 'SELECT o.value FROM options o WHERE o.name = "version"');
    const {db}: Database = database;

    db.serialize( async () => {
        await db.run("BEGIN TRANSACTION;");

        try {
            for( let i = parseInt(value); i < parseInt(DB_VERSION); i++ ) {
                await migrations[i + 1]( database );
            }

            await database.run("UPDATE options SET value = ? WHERE name = 'version'", [DB_VERSION]);

            await db.run("COMMIT;")
        } catch( err ) {
            await db.run("ROLLBACK;");
        }
    })
}

const migrations: any = {0: async () => {}};

migrations[1] = async ( db: Database ) => {
    const sql = `SELECT name from sqlite_master WHERE type='table' AND name='posts' AND sql LIKE "%status TEXT CHECK( status IN ('published','draft','unpublished') ) NOT NULL DEFAULT 'draft'%"`
    const result = await db.get( sql );
    if( result ) return;
    await db.db.run( "ALTER TABLE posts ADD COLUMN status TEXT CHECK( status IN ('published','draft','unpublished') ) NOT NULL DEFAULT 'draft'", (err) => { if( err ) throw( err ); } );
}

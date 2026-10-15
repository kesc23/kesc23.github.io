import sqlite from "sqlite3";
import { open } from "sqlite";
import { POST, USERS, OPTIONS, CATEGORIES } from "./schemas";
const { Database, OPEN_READONLY, OPEN_READWRITE, OPEN_CREATE } = sqlite;
import { needsMigration, migrate } from "./migrations";

/**
 * @param {number} mode 
 */
async function getDb( mode ) {
    return open( { filename: 'site.db', driver: Database, mode } )
}

async function getDbReadOnly() {
    return getDb( OPEN_READONLY | OPEN_CREATE )
}
async function getDbReadWrite() {
    return getDb( OPEN_READWRITE | OPEN_CREATE )
}
async function enforceSchema() {
    const db = await getDbReadWrite();

    await Promise.all([POST, USERS, OPTIONS, CATEGORIES].map( sql => db.run( sql ) ));
    
    if( await needsMigration( db ) ) {
        await migrate( db )
    }

    let options = await db.get( "SELECT * FROM options" );
    await db.close()
}

export default { getDbReadOnly, getDbReadWrite, enforceSchema };
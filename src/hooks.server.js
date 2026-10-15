import DB from "$lib/db";

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    await DB.enforceSchema();

	return await resolve(event);
}
import { error } from '@sveltejs/kit';

const posts = ['hello-world'];

/** @type {import('./$types').EntryGenerator} */
export function entries() {
	return posts.map( p => { 
		return { slug: p }
	});
}

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	// const post = await db.getPost(params.slug);

	// @ts-ignore
	if ( posts.includes( params.slug ) ) {
		return {};
	}

	error( 404, { message: 'Not found' } );
}

export const prerender = true;
export const ssr = true
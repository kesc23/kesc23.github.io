import { error } from '@sveltejs/kit';

/**
 * @type {import('./$types').PageServerLoad}
 */
export async function load( {url} ){
    const { searchParams } = url;
    const post = searchParams.get('post');

    if( ! post ) {
        error( 404, 'Post not specified' );
        return 
    }

    if( post == "new" ) return;

    
}
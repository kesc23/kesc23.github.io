import { building, browser } from '$app/environment';

export async function load( { fetch, url, data }) {
    if( building && ! browser ) {
        const { posts } = await (await fetch( '/api/posts' )).json();
        return { data, posts };
    }

    // @ts-ignore
    if( ! ( url.searchParams.has( 's' ) && url.searchParams.get( 's' ).length > 0 ) ) {
        const { posts } = await (await fetch( '/api/posts' )).json();
        return { data, posts };
    }
    const { posts } = await (await fetch( '/api/posts' )).json();
    
    return { data, posts: posts.filter( (/** @type {any} */ p) => {
            // @ts-ignore
            const search = url.searchParams.get( 's' ).split(' ').join('|');
            return p.title.match( new RegExp( search, "mi" ) );
        })
    };
}

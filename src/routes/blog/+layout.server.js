/** @type {import('./$types').LayoutServerLoad} */
export async function load({ url, route  }) {
    return { path: url.pathname, route: route.id };
}

export const prerender = true;
export const ssr = true;
export const csr = true;
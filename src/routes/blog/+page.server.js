/**
 * @param {*} url
 */
export async function load({url}) {
    return { path: url.pathname }
}
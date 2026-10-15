import DB from "$lib/db";

const NEW_POST_QUERY    = "INSERT INTO posts(title, slug, status, tags, description, keywords, content, featured_image, social_media_image, publish_date, modified_date, author, category) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
const UPDATE_POST_QUERY = "UPDATE posts SET title = ?, slug = ?, status = ?, tags = ?, description = ?, keywords = ?, content = ?, featured_image = ?, social_media_image = ?, publish_date = ?, modified_date = ?, author = ?, category = ? WHERE id = ?"

async function savePost( post: any, id = null ) {
    const { db } = await DB.getDbReadWrite();

    const fail = checkPostValidity( post );

    if ( fail ) return fail;

    if( id ) {
        let params = [ post.title, post.slug, post.status, post.tags, post.description, post.keywords, post.content, post.featured_image, post.social_media_image, post.publish_date, post.modified_date, post.author, post.category ];
        db.prepare( UPDATE_POST_QUERY,  )

        return {}
    }
    db.prepare( "" )
}

function checkPostValidity( post: any ) {
    return {};
}
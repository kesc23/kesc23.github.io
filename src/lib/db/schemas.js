export const POST = `
CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    title TEXT,
    slug TEXT UNIQUE,
    status TEXT CHECK( status IN ('published','draft','unpublished') ) NOT NULL DEFAULT 'draft',
    tags TEXT,
    description TEXT,
    keywords TEXT,
    content TEXT,
    featured_image TEXT,
    social_media_image TEXT,
    publish_date TEXT,
    modified_date TEXT,
    author INT,
    category INT,
    FOREIGN KEY (author) REFERENCES users(id),
    FOREIGN KEY (category) REFERENCES categories(id)
)
`
export const CATEGORIES = `
CREATE TABLE IF NOT EXISTS categories (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    name VARCHAR(100),
    slug TEXT,
    description TEXT,
    creator INT,
    FOREIGN KEY (creator) REFERENCES users(id)
)
`


export const OPTIONS = `
CREATE TABLE IF NOT EXISTS options (
    name TEXT PRIMARY KEY UNIQUE NOT NULL,
    value TEXT
)
`

export const USERS = `
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    name VARCHAR(100),
    photo TEXT,
    author INT,
    FOREIGN KEY (author) REFERENCES users(id)
)
`
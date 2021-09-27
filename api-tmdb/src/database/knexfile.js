const api_db = process.env.API_DB
const api_db_key = process.env.API_DB_KEY
const api_db_user = process.env.API_DB_USER


module.exports = {
    client: 'mysql2',
    connection: {
        host: '127.0.0.1',
        user: user,
        password: masterkey,
        database: api_db
    },
    debug: true
}

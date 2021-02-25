//const Pool = require('pg').Pool
import { Pool } from 'pg';
const pool = new Pool({
  user: 'postgres',
  host: 'database-1.ckw2c4zzgdfy.ap-southeast-2.rds.amazonaws.com',
  database: 'postgres',
  password: 'DZsfx3UCIoBtx40cFghQ',
  port: 5432,
});

const createUser = (body) => {
    return new Promise(function(resolve, reject) {
      const { user_id, username, site } = body
      pool.query('INSERT INTO user_registration (user_id, username, site) VALUES ($1, $2, $3) RETURNING *', [user_id, username, site], (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(`A new username has been added: ${results.rows[0]}`)
      })
    })
  }

  module.exports = {
    createUser,
    
  }
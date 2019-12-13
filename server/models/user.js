import { Pool } from 'pg';
import dotenv from 'dotenv';
import 'idempotent-babel-polyfill';

dotenv.config();
class User {
  constructor() {
    this.pool = new Pool({
      connectionString: process.env.DATABASE_URL
    });
  this.pool.connect() 
  .then(()=> console.log('db connected'))
  .catch((e)=> console.log(e));   
  this.initialize();
  }
  createUserTable = `CREATE TABLE IF NOT EXISTS
  users(
    id SERIAL NOT NULL PRIMARY KEY,
    first_name VARCHAR(128) NOT NULL,
    last_name VARCHAR(128) NOT NULL,
    email VARCHAR(128) NOT NULL UNIQUE,
    password VARCHAR(128) NOT NULL,
    birth_day VARCHAR(128) NOT NULL,
    gender VARCHAR(128) NOT NULL
  )`;

  async execute (sql, data = []) {
    const connection = await this.pool.connect() ;
    try {
      if (data.length) return await connection.query(sql, data);
      return await connection.query(sql);
    } catch (error) {
      return error;
    } finally {
      connection.release();
    }
  }
  async initialize() {
    await this.execute(this.createUserTable);
  }
}
export default new User();
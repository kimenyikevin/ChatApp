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
    user_name VARCHAR(128) NOT NULL,
    password VARCHAR(128) NOT NULL,
    birth_day VARCHAR(128) NOT NULL,
    gender VARCHAR(128) NOT NULL
  )`;

  createmessagesTable = `CREATE TABLE IF NOT EXISTS
  messages(
    id SERIAL NOT NULL PRIMARY KEY,
    sender_id INTEGER,
    receiver_id INTEGER,
    sender_username VARCHAR(128) NOT NULL,
    receiver_username VARCHAR(128) NOT NULL,
    message VARCHAR(128) NOT NULL,
    created_date DATE
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
    await this.execute(this.createmessagesTable);
  }
}
export default new User();
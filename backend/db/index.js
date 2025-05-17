import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pkg;

const pool = new Pool(
    {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
}
);
const connectToDB = async () => {
  try {
    await pool.connect();
    console.log('🟢 Postgres connected');
  } catch (err) {
    console.error('🔴 Postgres connection failed', err);
  }
};

connectToDB();

export default pool;

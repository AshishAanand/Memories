import dotenv from 'dotenv'
dotenv.config({path: `.env.${process.env.NODE_ENV || 'development'}`})

export const {
  PORT,
  NODE_ENV,
  DB_URL,
  JWT_SECRET,
  JWT_EXPIRES_IN
} = process.env


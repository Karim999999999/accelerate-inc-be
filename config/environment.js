import dotenv from 'dotenv';
dotenv.config();

export const DB_URI = process.env.DB_URI || 'mongodb://localhost/project-0';
export const port = process.env.PORT || 4000;
export const secret = process.env.SECRET || 'shhhh its a secret';

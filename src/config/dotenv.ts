import { config } from 'dotenv';

export const NODE_ENV = process.env.NODE_ENV ?? 'production';

if (NODE_ENV !== 'production') {
  config();
}

export const DB_HOST = process.env.DB_HOST || 'localhost';

export const DB_PORT = Number(process.env.DB_PORT) || 1433;

export const DB_USERNAME = process.env.DB_USERNAME || 'sa';

export const DB_PASSWORD = process.env.DB_PASSWORD || '';

export const DB_DATABASE = process.env.DB_DATABASE || 'project_management';

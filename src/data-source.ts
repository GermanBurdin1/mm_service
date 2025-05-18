// data-source.ts
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { MindmapNode } from './mindmap/entities/node.entity';
import * as dotenv from 'dotenv';

dotenv.config(); // загружаем .env

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgre',
  database: 'mindmap_db',
  entities: [MindmapNode],
  migrations: ['src/migrations/*.ts'],
  synchronize: false,
});


import { DataSource } from 'typeorm';
import { MindmapNode } from './src/mindmap/entities/node.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgre',
  database: 'mindmap_service',
  entities: [MindmapNode],
  migrations: ['src/migrations/*.ts'],
  synchronize: false,
});

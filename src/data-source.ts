import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'mahan',
  password: 'mahan',
  database: 'mydb02',
  entities: [__dirname + '/../**/*.entity.js'],
  migrations: ['src/migrations/*.ts'],
  synchronize: false,
});

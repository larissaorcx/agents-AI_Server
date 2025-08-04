//config par criar a tabela

import { defineConfig } from 'drizzle-kit';
import { env } from './src/env.ts';

export default defineConfig({
  dialect: 'postgresql',
  casing: 'snake_case',
  schema: './src/db/schema/**.ts', //colocar o ** faz com que todos os arquivos dentro da pasta schema pode ser uma tabela do db
  out: './src/db/migrations',
  dbCredentials: {
    url: env.DATABASE_URL,
  },
});

//populando a tabela com dados fictícios

import { reset, seed } from 'drizzle-seed';
import { db, sql } from './connection.ts';
import { schema } from './schema/index.ts';

await reset(db, schema); //limpando o db

await seed(db, schema).refine((f) => {
  //populando a tabela rooms com dados fictícios
  return {
    rooms: {
      count: 5,
      columns: {
        //colunas da tabela
        name: f.companyName(),
        description: f.loremIpsum(),
      },
    },
    questions: {
      count: 20,
    },
  };
});

await sql.end();

// biome-ignore lint/suspicious/noConsole: only used in dev
console.log('Database seeded');

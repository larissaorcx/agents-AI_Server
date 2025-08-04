import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

export const rooms = pgTable('rooms', {
  //criação da tabela rooms
  id: uuid().primaryKey().defaultRandom(), //id criado de forma aleatória
  name: text().notNull(),
  description: text(),
  createdAt: timestamp().defaultNow().notNull(), //data de criação com a data atual
});

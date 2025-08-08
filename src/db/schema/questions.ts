import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { rooms } from './rooms.ts';

export const questions = pgTable('questions', {
  //criação da tabela rooms
  id: uuid().primaryKey().defaultRandom(), //id criado de forma aleatória
  roomId: uuid()
    .references(() => rooms.id)
    .notNull(), //id da sala que a pergunta pertence
  question: text().notNull(),
  answer: text(),
  createdAt: timestamp().defaultNow().notNull(), //data de criação com a data atual
});

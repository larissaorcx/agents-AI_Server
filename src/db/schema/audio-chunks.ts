import { pgTable, text, timestamp, uuid, vector } from 'drizzle-orm/pg-core';
import { rooms } from './rooms.ts';

export const audioChunks = pgTable('audio_chunks', {
  //criação da tabela rooms
  id: uuid().primaryKey().defaultRandom(),
  roomId: uuid()
    .references(() => rooms.id)
    .notNull(),
  transcription: text().notNull(),
  //busca semantica pela característica do áudio
  embeddings: vector({ dimensions: 768 }).notNull(), // vetor de embeddings
  createdAt: timestamp().defaultNow().notNull(), //data de criação com a data atual
});

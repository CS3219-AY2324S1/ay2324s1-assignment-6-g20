import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('sessions', (t) => {
    t.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
    t.timestamps(true, true);
  });

  await knex.schema.createTable('userSessions', (t) => {
    t.increments('id').primary();
    t.uuid('userId').notNullable();
    t.uuid('sessionId').references('id').inTable('sessions').notNullable();
    t.timestamps(true, true);
  });

  await knex.schema.createTable('collabSessionWsTickets', (t) => {
    t.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
    t.uuid('userId').notNullable();
    t.uuid('sessionId').references('id').inTable('sessions').notNullable();
    t.datetime('expiry').notNullable();
    t.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('collabSessionWsTickets');
  await knex.schema.dropTable('userSessions');
  await knex.schema.dropTable('sessions');
}

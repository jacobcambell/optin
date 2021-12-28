import knex from "knex";

export const pg = knex({
  client: "pg",
  connection: process.env.POSTGRES_CONNECTION_STRING,
});

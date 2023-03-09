// strapi-api/config/database.js
module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("PGHOST", "localhost"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("PGDATABASE", "blog"),
      user: env("PGUSER", "postgres"),
      password: env("PGPASSWORD", "12345678"),
      schema: env("DATABASE_SCHEMA", "public"), // Not required
      ssl: {
        rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false),
      },
    },
    debug: false,
  },
});

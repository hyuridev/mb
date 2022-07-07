require("dotenv/config");

const migrations =
    process.env.NODE_ENV === "hml"
        ? "dist/src/database/migrations/*.js"
        : "src/config/migrations/*.ts";
const entities =
    process.env.NODE_ENV === "hml"
        ? "dist/src/entities/*.js"
        : "src/entities/*.ts";

module.exports = {
    type: process.env.DB_CONNECTION,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [entities],
    migrations: [migrations],
    cli: {
        migrationsDir: "./src/config/migrations",
    },
};

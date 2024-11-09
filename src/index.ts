import express from "express";
import { Client } from "pg";

const PORT = process.env.PORT || 3000;

const setupDatabaseClient = () => {
  return new Client({
    password: process.env.DB_PASSWORD,
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
  });
};

const client = setupDatabaseClient();
const app = express();

app.get("/ping", async (req, res) => {
  try {
    const result = await client.query("SELECT * FROM users");
    res.send({
      environment: process.env.NODE_ENV,
      database: result.rows,
    });
  } catch (error) {
    res.status(500).send({
      environment: process.env.NODE_ENV,
      database: "down",
      error: error,
    });
  }
});

(async () => {
  try {
    await client.connect();
    app.listen(PORT, () => {
      console.log(`Server started at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    process.exit(1);
  }
})();

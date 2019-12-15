import express from "express";
import { Client } from "pg";

const PORT = process.env.PORT || 3000;

const client = new Client({
  password: process.env.DB_PASSWORD,
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
});

const app = express();

app.get("/ping", async (req, res) => {
  const database = await client.query("SELECT 1 + 1").then(() => "up").catch(() => "down");

  res.send({
    environment: process.env.NODE_ENV,
    database,
  });
});

(async () => {
  await client.connect();

  app.listen(PORT, () => {
    console.log("Started at http://localhost:%d", PORT);
  });
})();

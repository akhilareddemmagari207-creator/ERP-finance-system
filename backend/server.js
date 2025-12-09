import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import pkg from "pg";

const { Pool } = pkg;

const app = express();
app.use(cors());
app.use(bodyParser.json());

// PostgreSQL connection
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "erp",
  password: "akhila",
  port: 5432,
});

// Test Route
app.get("/", (req, res) => {
  res.send("ERP Backend Running Successfully");
});

// Login Route
app.post("/auth/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const result = await pool.query(
      "SELECT * FROM users WHERE username = $1 AND password = $2",
      [username, password]
    );

    if (result.rows.length > 0) {
      res.json({ message: "Login Successful" });
    } else {
      res.json({ message: "Invalid Username or Password" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

// Start Server
app.listen(4000, () => {
  console.log("Backend running on http://localhost:4000");
});

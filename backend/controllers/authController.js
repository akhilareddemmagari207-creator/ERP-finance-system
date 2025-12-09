const pool = require("../db");

exports.loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const query = "SELECT * FROM users WHERE username=$1 AND password=$2";
    const result = await pool.query(query, [username, password]);

    if (result.rows.length === 0) {
      return res.status(401).json({ message: "Invalid Username or Password" });
    }

    res.json({
      message: "Login Success",
      user: result.rows[0],
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

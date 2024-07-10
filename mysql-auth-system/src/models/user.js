const { getPool } = require("../config/database");

const User = {
  create: async (user) => {
    const pool = getPool();
    const [result] = await pool.execute(
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
      [user.username, user.email, user.password]
    );
    return result;
  },

  findByEmail: async (email) => {
    const pool = getPool();
    const [rows] = await pool.query("SELECT * FROM users WHERE email = ?", [email]);
    return rows;
  },

  updateToken: async (id, token) => {
    const pool = getPool();
    const [result] = await pool.query("UPDATE users SET token = ? WHERE id = ?", [token, id]);
    return result;
  },

  findIdByToken: async (token) => {
    const pool = getPool();
    const [rows] = await pool.query("SELECT id FROM users WHERE token = ?", [token]);
    return rows;
  },

  getInfoUserById: async (id) => {
    const pool = getPool();
    const [rows] = await pool.query("SELECT username, points, email FROM users WHERE id = ?", [id]);
    console.log(rows);
    return rows;
  }
};

module.exports = User;

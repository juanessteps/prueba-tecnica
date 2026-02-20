const pool = require('../config/db');

const crearTablaUsuarios = async () => {
    const query = `
    CREATE TABLE IF NOT EXISTS usuarios (
      id SERIAL PRIMARY KEY,
      nombre VARCHAR(100) NOT NULL,
      email VARCHAR(150) UNIQUE NOT NULL,
      creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;
    await pool.query(query);
};

const crearUsuario = async (nombre, email) => {
    const query = `
    INSERT INTO usuarios (nombre, email)
    VALUES ($1, $2)
    RETURNING *;
  `;
    const { rows } = await pool.query(query, [nombre, email]);
    return rows[0];
};

const obtenerUsuarios = async () => {
    const query = 'SELECT * FROM usuarios ORDER BY creado_en DESC;';
    const { rows } = await pool.query(query);
    return rows;
};

module.exports = {
    crearTablaUsuarios,
    crearUsuario,
    obtenerUsuarios,
};

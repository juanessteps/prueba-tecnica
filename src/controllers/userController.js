const { crearUsuario } = require('../models/userModel');

const postUsuario = async (req, res) => {
    const { nombre, email } = req.body;

    if (!nombre || !email) {
        return res.status(400).json({ error: 'El nombre y el email son obligatorios' });
    }

    try {
        const usuario = await crearUsuario(nombre, email);
        return res.status(201).json(usuario);
    } catch (error) {
        if (error.code === '23505') {
            return res.status(400).json({ error: 'El email ya está registrado' });
        }
        return res.status(500).json({ error: 'Error interno del servidor' });
    }
};

module.exports = { postUsuario };

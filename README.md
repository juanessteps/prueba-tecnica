# Prueba Técnica – API REST con Node.js y PostgreSQL

API REST construida con Node.js y Express que permite crear y listar usuarios, con persistencia en PostgreSQL.

## Requisitos previos

- [Node.js](https://nodejs.org/) v18 o superior
- [PostgreSQL](https://www.postgresql.org/) instalado y corriendo

## Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/juanessteps/prueba-tecnica.git
cd prueba-tecnica
```

2. Instala las dependencias:
```bash
npm install
```

3. Crea el archivo de variables de entorno copiando el ejemplo:
```bash
cp .env.example .env
```

4. Abre el archivo `.env` y configura tus credenciales de PostgreSQL:
```
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_NAME=nombre_de_tu_base_de_datos
```

5. Crea una base de datos vacía en PostgreSQL con el nombre que pusiste en `DB_NAME`. La tabla de usuarios se crea automáticamente al iniciar el servidor.

## Ejecución

**Modo desarrollo** (con reinicio automático):
```bash
npm run dev
```

**Modo producción:**
```bash
npm start
```

El servidor estará disponible en `http://localhost:3000`.

## Endpoints

### POST /api/users
Crea un nuevo usuario.

**Body (JSON):**
```json
{
  "nombre": "Juan",
  "email": "juan@correo.com"
}
```

**Respuesta exitosa (201):**
```json
{
  "id": 1,
  "nombre": "Juan",
  "email": "juan@correo.com",
  "creado_en": "2026-02-20T23:00:00.000Z"
}
```

**Errores posibles:**
- `400` – Si falta el nombre o el email
- `400` – Si el email ya está registrado
- `500` – Error interno del servidor

---

### GET /api/users
Retorna la lista de todos los usuarios registrados.

**Respuesta exitosa (200):**
```json
[
  {
    "id": 1,
    "nombre": "Juan",
    "email": "juan@correo.com",
    "creado_en": "2026-02-20T23:00:00.000Z"
  }
]
```

## Estructura del proyecto

```
src/
├── config/
│   └── db.js          # Configuración de la conexión a PostgreSQL
├── controllers/
│   └── userController.js  # Lógica de los endpoints
├── models/
│   └── userModel.js   # Consultas a la base de datos
├── routes/
│   └── userRoutes.js  # Definición de rutas
└── index.js           # Punto de entrada de la aplicación
```

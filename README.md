# Prueba Técnica - EDUCAMÁS

Hola, mi nombre es **Edwin Hernández** y esta es mi entrega para la prueba técnica de EDUCAMÁS.

## 🧠 Sobre el Proyecto

Este proyecto es una aplicación full stack compuesta por un frontend desarrollado en **React** y un backend con **Node.js**, **Express** y **MongoDB**. Tiene como objetivo permitir la autenticación de usuarios, registro, gestión de inventario, usuarios y visualización de datos en un dashboard administrativo.

## 🌐 Enlaces del Proyecto

- 🔗 Frontend: [ecommerce-frontend](https://github.com/Edwinjhs/ecommerce-frontend)
- 🔗 Backend: [inventory-backend](https://github.com/Edwinjhs/inventory-backend)
- 👨‍💻 GitHub: [Edwinjhs](https://github.com/Edwinjhs)

## ✨ Funcionalidades Implementadas

### 🔐 Autenticación
- Login con correo y contraseña.
- Registro de nuevos usuarios.
- Validación de usuarios autenticados vía JWT.
- Modal de registro desde el login.

### 🧾 Administración
- Panel de administración con rutas protegidas.
- Visualización de resumen de bodegas y médicos.
- Navegación entre secciones como CRM, gestión de bodegas y médicos autorizados.

### 📦 Inventario
- Creación y visualización de bodegas (warehouses).
- Visualización de médicos autorizados.
- Envíos con seguimiento utilizando una API externa.

### 🌍 Internacionalización (i18n)
- Interfaz multilenguaje: español, inglés y portugués.
- Sistema de cambio de idioma implementado en frontend.

### 📡 Seguimiento de pedidos
- Integración con API de rastreo (PostalNinja).
- Sistema de seguimiento de libros enviados tras inscripción a cursos.

---

## 🧱 Tecnologías Usadas

### Frontend:
- React
- React Router
- Context API para autenticación
- CSS Modules / SCSS
- i18next para internacionalización

### Backend:
- Node.js
- Express
- MongoDB y Mongoose
- JWT para autenticación
- Bcrypt para encriptar contraseñas
- CORS, Dotenv, Helmet

---

## 📂 Estructura del Proyecto

### Frontend
/src
├── components/
├── context/
├── pages/
├── styles/
├── App.jsx
└── main.jsx

shell
Copiar
Editar

### Backend
/src
├── controllers/
├── middlewares/
├── models/
├── routes/
├── .env
└── index.js


---

## ⚙️ Instalación y Uso

### Clonar los repositorios

```bash
git clone https://github.com/Edwinjhs/ecommerce-frontend
git clone https://github.com/Edwinjhs/inventory-backend

cd inventory-backend
npm install
# Crear archivo .env con MONGODB_URI y JWT_SECRET
npm run dev
 🧠 Teoría Aplicada
Autenticación y Seguridad
Implementación de JWT para mantener sesiones seguras.

Uso de Bcrypt para proteger contraseñas.

Middleware personalizado para proteger rutas (requireAuth).

Buenas prácticas
Separación de responsabilidades: rutas, controladores, modelos.

Código modular y reutilizable.

Variables de entorno con Dotenv.

Validaciones en frontend y backend.

Manejo de errores adecuado.

Internacionalización
Implementación de i18next para soporte multilenguaje.

Traducciones en archivos separados para cada idioma (es.json, en.json, pt.json).

📬 Contacto
Si deseas contactarme o saber más sobre mi perfil:

GitHub: Edwinjhs

Email: edwin.ejhnsn@gmail.com

Gracias por la oportunidad de presentar esta prueba. Estoy disponible para cualquier retroalimentación o entrevista técnica.

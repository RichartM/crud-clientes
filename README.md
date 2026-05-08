# 📋 Gestión de Clientes - CRUD

Una aplicación web completa tipo CRUD para gestionar clientes con **NestJS** en el backend y **React** en el frontend.

## 📋 Tabla de Contenidos

- [Descripción](#descripción)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Funcionalidades](#funcionalidades)
- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Ejecución](#ejecución)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Uso de la Aplicación](#uso-de-la-aplicación)
- [API Endpoints](#api-endpoints)
- [Evidencias](#evidencias)
- [Uso de IA](#uso-de-ia)

## 📝 Descripción

Este proyecto es una aplicación web CRUD (Create, Read, Update, Delete) que permite gestionar un registro completo de clientes. La aplicación cuenta con una interfaz moderna y responsiva, validación de datos, y una API REST completamente funcional.

**Entidad:** Clientes  
**Campos:** Nombre, Email, Teléfono, Dirección, Estado

## 🛠️ Tecnologías Utilizadas

### Backend
- **NestJS** - Framework Node.js progresivo para aplicaciones escalables
- **MongoDB** - Base de datos NoSQL
- **Mongoose** - ODM para MongoDB
- **TypeScript** - Lenguaje de programación tipado
- **Express** - Servidor HTTP

### Frontend
- **React** - Librería de interfaces de usuario
- **TypeScript** - Lenguaje de programación tipado
- **Vite** - Herramienta de construcción rápida
- **Axios** - Cliente HTTP
- **CSS3** - Estilos responsive

### Herramientas
- **npm** - Gestor de paquetes
- **Git** - Control de versiones
- **GitHub** - Repositorio remoto

## ✨ Funcionalidades

✅ **Crear registros** - Añadir nuevos clientes con validación de datos  
✅ **Consultar registros** - Ver lista completa de clientes con diseño tabular  
✅ **Editar registros** - Modificar información de clientes existentes  
✅ **Eliminar registros** - Remover clientes con confirmación  
✅ **Validación** - Validación de correos electrónicos y campos requeridos  
✅ **Interfaz responsiva** - Diseño adaptable a diferentes dispositivos  
✅ **Efectos visuales** - Animaciones y transiciones suaves  
✅ **Manejo de errores** - Mensajes de error claros y feedback al usuario  

## 📋 Requisitos Previos

- **Node.js** versión 16 o superior
- **npm** versión 8 o superior
- **MongoDB** corriendo localmente en `localhost:27017`

## 🚀 Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/crud-clientes-app.git
cd crud-clientes-app
```

### 2. Instalar Backend

```bash
cd backend
npm install
```

### 3. Instalar Frontend

```bash
cd ../frontend
npm install
```

## ▶️ Ejecución

### Opción 1: En dos terminales (Recomendado)

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

El servidor estará en: `http://localhost:3001`

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

La aplicación estará en: `http://localhost:5173`

### Opción 2: Con Variables de Entorno

**Backend (.env):**
```
MONGODB_URI=mongodb://localhost:27017/crud-clientes
PORT=3001
NODE_ENV=development
```

## 📁 Estructura del Proyecto

```
crud-clientes-app/
├── backend/
│   ├── src/
│   │   ├── modules/
│   │   │   └── clientes/
│   │   │       ├── cliente.schema.ts       # Esquema MongoDB
│   │   │       ├── cliente.dto.ts          # Data Transfer Objects
│   │   │       ├── clientes.service.ts     # Lógica de negocio
│   │   │       ├── clientes.controller.ts  # Rutas y controladores
│   │   │       └── clientes.module.ts      # Módulo de clientes
│   │   ├── app.module.ts                   # Módulo principal
│   │   └── main.ts                         # Punto de entrada
│   ├── package.json
│   ├── tsconfig.json
│   └── .env.example
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ClienteForm.tsx             # Formulario CRUD
│   │   │   ├── ClienteForm.css
│   │   │   ├── ClienteList.tsx             # Tabla de clientes
│   │   │   └── ClienteList.css
│   │   ├── App.tsx                         # Componente principal
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.tsx                        # Punto de entrada
│   ├── index.html
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   └── public/
│
└── README.md                                # Este archivo
```

## 💻 Uso de la Aplicación

### 1. Crear un Cliente
1. Haz clic en el botón "➕ Nuevo Cliente"
2. Completa el formulario con:
   - **Nombre:** Nombre completo del cliente
   - **Email:** Correo electrónico válido
   - **Teléfono:** Número de contacto
   - **Dirección:** Domicilio del cliente
3. Haz clic en "💾 Guardar"

### 2. Consultar Clientes
- Los clientes se cargan automáticamente al abrir la aplicación
- Se muestra una tabla con todos los clientes registrados
- Usa el botón "🔄 Recargar" para actualizar la lista

### 3. Editar un Cliente
1. Haz clic en el botón "✏️" en la fila del cliente
2. Se abrirá el formulario con los datos actuales
3. Modifica los campos que desees
4. Haz clic en "💾 Actualizar"

### 4. Eliminar un Cliente
1. Haz clic en el botón "🗑️" en la fila del cliente
2. Confirma la eliminación en el diálogo que aparece
3. El cliente será eliminado de la base de datos

## 🔌 API Endpoints

### Base URL
```
http://localhost:3001/api/clientes
```

### Endpoints

| Método | Ruta | Descripción | Body |
|--------|------|-------------|------|
| POST | `/` | Crear nuevo cliente | `{ nombre, email, telefono, direccion }` |
| GET | `/` | Obtener todos los clientes | - |
| GET | `/:id` | Obtener cliente por ID | - |
| PUT | `/:id` | Actualizar cliente | `{ nombre?, email?, telefono?, direccion? }` |
| DELETE | `/:id` | Eliminar cliente | - |

### Ejemplos cURL

**Crear cliente:**
```bash
curl -X POST http://localhost:3001/api/clientes \
  -H "Content-Type: application/json" \
  -d '{
    "nombre": "Juan Pérez",
    "email": "juan@example.com",
    "telefono": "+57 3001234567",
    "direccion": "Calle 123 #45-67"
  }'
```

**Obtener todos:**
```bash
curl http://localhost:3001/api/clientes
```

**Actualizar:**
```bash
curl -X PUT http://localhost:3001/api/clientes/ID \
  -H "Content-Type: application/json" \
  -d '{ "nombre": "Nuevo Nombre" }'
```

**Eliminar:**
```bash
curl -X DELETE http://localhost:3001/api/clientes/ID
```

## 📸 Evidencias

Las capturas de pantalla se pueden encontrar en la carpeta `/evidencias` del proyecto:

- `1-inicio.png` - Pantalla inicial con lista de clientes
- `2-crear.png` - Formulario de creación de cliente
- `3-lista.png` - Tabla con múltiples clientes
- `4-editar.png` - Formulario de edición
- `5-eliminar.png` - Confirmación de eliminación

## 🤖 Uso de IA

**Se utilizó IA (GitHub Copilot) para:**

1. ✅ Estructura base del proyecto NestJS
2. ✅ Componentes React y lógica de estado
3. ✅ Estilos CSS y diseño responsivo
4. ✅ Validación de formularios
5. ✅ Integración Axios con backend
6. ✅ Mejoras de código y refactoring

**No se utilizó IA para:**
- Decisiones de arquitectura
- Lógica de negocio principal
- Estructura de datos y esquemas
- Testing y debugging manual

## 📚 Organizacion del Código

El proyecto sigue principios SOLID:

- **Modular:** Cada funcionalidad en su propio módulo
- **Reutilizable:** Componentes y servicios reutilizables
- **Mantenible:** Código limpio con comentarios claros
- **Escalable:** Fácil de extender con nuevas características

### Backend (NestJS)
- Separación de responsabilidades (Controller, Service, Schema)
- DTOs para validación de datos
- Inyección de dependencias
- Manejo centralizado de errores

### Frontend (React)
- Componentes funcionales con Hooks
- Estado centralizado en App.tsx
- Props tipadas con TypeScript
- Estilos modularizados por componente

## 🐛 Solución de Problemas

### El backend no se conecta a MongoDB
```bash
# Asegúrate de que MongoDB está corriendo
mongod

# O usa MongoDB Atlas (en la nube)
# Actualiza MONGODB_URI en .env
```

### El frontend no se conecta al backend
```bash
# Verifica que el backend está corriendo en puerto 3001
# Comprueba la URL de API en App.tsx
```

### Errores de CORS
- El backend ya tiene CORS habilitado
- Asegúrate de que el frontend está en `http://localhost:5173`

## 📝 Licencia

Este proyecto está bajo la Licencia MIT.

## 👨‍💻 Autor

Proyecto desarrollado como examen diagnóstico de aplicaciones CRUD.

---

**¡Gracias por usar esta aplicación! 🚀**

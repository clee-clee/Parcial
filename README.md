# API REST — Estudiantes (Next.js)

Aplicación Next.js con servicios REST API para el registro de **estudiantes**.
La información se almacena en un **arreglo en memoria** (no usa base de
datos), tal como fue solicitado.

## Requisitos

- Node.js 18 o superior
- npm

## Instalación y ejecución

1. Abre esta carpeta en **Visual Studio Code**.
2. Abre una terminal integrada (`Ctrl + ñ` o `Terminal > New Terminal`).
3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Ejecuta el servidor en modo desarrollo:

   ```bash
   npm run dev
   ```

5. Abre [http://localhost:3000](http://localhost:3000) para ver la
   documentación básica de endpoints en el navegador.

> Nota: al ser almacenamiento en memoria, los datos se reinician cada vez que
> detienes y vuelves a iniciar el servidor (`npm run dev`).

## Modelo: Estudiante

| Campo           | Tipo   | Descripción                     |
|-----------------|--------|----------------------------------|
| id              | number | Generado automáticamente         |
| nombres         | string | Nombres del estudiante           |
| apellidos       | string | Apellidos del estudiante         |
| fechaNacimiento | string | Fecha de nacimiento (YYYY-MM-DD) |
| sexo            | string | Sexo del estudiante              |
| carnet          | string | Carnet / código de estudiante    |

## Endpoints

Base: `/api/estudiantes`

| Método | Ruta                  | Descripción                     |
|--------|-----------------------|----------------------------------|
| GET    | /api/estudiantes      | Lista todos los estudiantes      |
| GET    | /api/estudiantes/:id  | Obtiene un estudiante por id      |
| POST   | /api/estudiantes      | Crea un nuevo estudiante          |
| PUT    | /api/estudiantes/:id  | Reemplaza el estudiante completo  |
| PATCH  | /api/estudiantes/:id  | Actualiza campos parciales        |
| DELETE | /api/estudiantes/:id  | Elimina un estudiante             |

## Ejemplos (curl)

```bash
# Crear estudiante
curl -X POST http://localhost:3000/api/estudiantes \
  -H "Content-Type: application/json" \
  -d '{"nombres":"Cindy","apellidos":"Lopez","fechaNacimiento":"2000-05-10","sexo":"F","carnet":"2023-12345"}'

# Listar estudiantes
curl http://localhost:3000/api/estudiantes

# Obtener un estudiante por id
curl http://localhost:3000/api/estudiantes/1

# Reemplazar completo (PUT)
curl -X PUT http://localhost:3000/api/estudiantes/1 \
  -H "Content-Type: application/json" \
  -d '{"nombres":"Cindy","apellidos":"Lopez Garcia","fechaNacimiento":"2000-05-10","sexo":"F","carnet":"2023-12345"}'

# Actualizar parcial (PATCH)
curl -X PATCH http://localhost:3000/api/estudiantes/1 \
  -H "Content-Type: application/json" \
  -d '{"apellidos":"Lopez Mendez"}'

# Eliminar
curl -X DELETE http://localhost:3000/api/estudiantes/1
```

## Estructura del proyecto

```
estudiantes-api/
├── app/
│   ├── api/
│   │   └── estudiantes/
│   │       ├── route.js          (GET, POST)
│   │       └── [id]/route.js     (GET, PUT, PATCH, DELETE)
│   ├── layout.js
│   └── page.js
├── lib/
│   └── db.js                     (arreglo en memoria + funciones CRUD)
├── package.json
├── next.config.js
└── README.md
```

export default function Home() {
  return (
    <main style={{ maxWidth: 800, margin: "40px auto", padding: "0 20px" }}>
      <h1>API REST — Estudiantes</h1>
      <p>
        Servidor de ejemplo con almacenamiento en memoria (arreglo). Usa
        Postman, Thunder Client o curl para probar los endpoints.
      </p>

      <h2>Estudiantes</h2>
      <ul>
        <li>GET /api/estudiantes</li>
        <li>GET /api/estudiantes/:id</li>
        <li>POST /api/estudiantes</li>
        <li>PUT /api/estudiantes/:id</li>
        <li>PATCH /api/estudiantes/:id</li>
        <li>DELETE /api/estudiantes/:id</li>
      </ul>
      <p>Modelo Estudiante: nombres, apellidos, fechaNacimiento, sexo, carnet</p>
    </main>
  );
}

export const metadata = {
  title: "API Estudiantes y Cursos",
  description: "REST API para registro de estudiantes y cursos asignados",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{ fontFamily: "Arial, sans-serif", margin: 0 }}>
        {children}
      </body>
    </html>
  );
}

import { NextResponse } from "next/server";
import {
  findEstudiante,
  replaceEstudiante,
  updateEstudiante,
  deleteEstudiante,
} from "../../../../lib/db";

// GET /api/estudiantes/:id -> obtiene un estudiante por id
export async function GET(request, { params }) {
  const estudiante = findEstudiante(params.id);
  if (!estudiante) {
    return NextResponse.json(
      { error: "Estudiante no encontrado" },
      { status: 404 }
    );
  }
  return NextResponse.json(estudiante);
}

// PUT /api/estudiantes/:id -> reemplaza el estudiante completo
export async function PUT(request, { params }) {
  const body = await request.json();
  const { nombres, apellidos, fechaNacimiento, sexo, carnet } = body;

  if (!nombres || !apellidos || !fechaNacimiento || !sexo || !carnet) {
    return NextResponse.json(
      {
        error:
          "PUT requiere todos los campos: nombres, apellidos, fechaNacimiento, sexo, carnet",
      },
      { status: 400 }
    );
  }

  const actualizado = replaceEstudiante(params.id, {
    nombres,
    apellidos,
    fechaNacimiento,
    sexo,
    carnet,
  });

  if (!actualizado) {
    return NextResponse.json(
      { error: "Estudiante no encontrado" },
      { status: 404 }
    );
  }
  return NextResponse.json(actualizado);
}

// PATCH /api/estudiantes/:id -> actualiza campos parciales
export async function PATCH(request, { params }) {
  const body = await request.json();
  const actualizado = updateEstudiante(params.id, body);

  if (!actualizado) {
    return NextResponse.json(
      { error: "Estudiante no encontrado" },
      { status: 404 }
    );
  }
  return NextResponse.json(actualizado);
}

// DELETE /api/estudiantes/:id -> elimina un estudiante
export async function DELETE(request, { params }) {
  const eliminado = deleteEstudiante(params.id);
  if (!eliminado) {
    return NextResponse.json(
      { error: "Estudiante no encontrado" },
      { status: 404 }
    );
  }
  return NextResponse.json({ message: "Estudiante eliminado correctamente" });
}

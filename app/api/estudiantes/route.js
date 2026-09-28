import { NextResponse } from "next/server";
import { getEstudiantes, addEstudiante } from "../../../lib/db";


export async function GET() {
  return NextResponse.json(getEstudiantes());
}

export async function POST(request) {
  const body = await request.json();
  const { nombres, apellidos, fechaNacimiento, sexo, carnet } = body;

  if (!nombres || !apellidos || !fechaNacimiento || !sexo || !carnet) {
    return NextResponse.json(
      {
        error:
          "Los campos nombres, apellidos, fechaNacimiento, sexo y carnet son obligatorios",
      },
      { status: 400 }
    );
  }

  const nuevoEstudiante = addEstudiante({
    nombres,
    apellidos,
    fechaNacimiento,
    sexo,
    carnet,
  });

  return NextResponse.json(nuevoEstudiante, { status: 201 });
}

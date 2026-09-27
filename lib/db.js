let estudiantes = [];
let estudianteIdCounter = 1;

export function getEstudiantes() {
  return estudiantes;
}

export function findEstudiante(id) {
  return estudiantes.find((e) => e.id === Number(id));
}

export function addEstudiante(data) {
  const nuevo = {
    id: estudianteIdCounter++,
    nombres: data.nombres,
    apellidos: data.apellidos,
    fechaNacimiento: data.fechaNacimiento,
    sexo: data.sexo,
    carnet: data.carnet,
  };
  estudiantes.push(nuevo);
  return nuevo;
}


export function replaceEstudiante(id, data) {
  const idx = estudiantes.findIndex((e) => e.id === Number(id));
  if (idx === -1) return null;
  estudiantes[idx] = {
    id: estudiantes[idx].id,
    nombres: data.nombres,
    apellidos: data.apellidos,
    fechaNacimiento: data.fechaNacimiento,
    sexo: data.sexo,
    carnet: data.carnet,
  };
  return estudiantes[idx];
}


export function updateEstudiante(id, data) {
  const idx = estudiantes.findIndex((e) => e.id === Number(id));
  if (idx === -1) return null;
  estudiantes[idx] = { ...estudiantes[idx], ...data, id: estudiantes[idx].id };
  return estudiantes[idx];
}

export function deleteEstudiante(id) {
  const idx = estudiantes.findIndex((e) => e.id === Number(id));
  if (idx === -1) return false;
  estudiantes.splice(idx, 1);
  return true;
}

// Obtener las iniciales del avatar
export const GetInitials = (stringName) => {
  const palabras = stringName.trim().split(/\s+/); // Divide el nombre en palabras eliminando espacios extra
  const iniciales = palabras
    .slice(0, 2)
    .map((palabra) => palabra[0].toUpperCase())
    .join("");
  return iniciales;
};

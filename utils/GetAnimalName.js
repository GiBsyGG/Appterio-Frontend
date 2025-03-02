export const GetAnimalName = async (animalId, animalFamily) => {
  // El nombre del animal será la familia más el los primeros 4 caracteres del ID
  const animalName = `${animalFamily}${animalId.slice(0, 4)}`;
  return animalName;
};

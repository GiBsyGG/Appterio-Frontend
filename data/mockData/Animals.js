export const animalStatus = {
  SALUDABLE: "Saludable",
  DESCESO: "Deceso",
  CUIDADO: "Cuidado",
};

export const animals = [
  { id: 1, species: "Ratón", sex: "Macho", state: animalStatus.SALUDABLE },
  { id: 2, species: "Ratón", sex: "Hembra", state: animalStatus.SALUDABLE },
  { id: 3, species: "Rata", sex: "Macho", state: animalStatus.SALUDABLE },
  { id: 4, species: "Rata", sex: "Hembra", state: animalStatus.SALUDABLE },
  { id: 5, species: "Cobaya", sex: "Macho", state: animalStatus.DESCESO },
  { id: 6, species: "Cobaya", sex: "Hembra", state: animalStatus.CUIDADO },
  { id: 7, species: "Conejo", sex: "Macho", state: animalStatus.DESCESO },
  { id: 8, species: "Conejo", sex: "Hembra", state: animalStatus.CUIDADO },
  { id: 9, species: "Hamster", sex: "Macho", state: animalStatus.SALUDABLE },
  { id: 10, species: "Hamster", sex: "Hembra", state: animalStatus.SALUDABLE },
];

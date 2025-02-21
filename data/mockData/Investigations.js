export const investigationEnum = {
  ENCURSO: "En curso",
  CERRADA: "Cerrada",
};

export const investigations = [
  {
    id: 1,
    title: "Estudio genético en ratones",
    description:
      "Investigación sobre la expresión génica en ratones de la cepa C57BL/6 para identificar marcadores de enfermeda.Investigación sobre la expresión génica en ratones de la cepa C57BL/6 para identificar marcadores de enfermeda.Investigación sobre la expresión génica en ratones de la cepa C57BL/6 para identificar marcadores de enfermeda.Investigación sobre la expresión génica en ratones de la cepa C57BL/6 para identificar marcadores de enfermeda",
    animalId: 1, // Relacionado con el ratón macho (id: 1)
    status: investigationEnum.ENCURSO,
  },
  {
    id: 2,
    title: "Efectos de la dieta en cobayas",
    description:
      "Estudio para evaluar el impacto de una dieta alta en fibra en la salud digestiva de cobayas.",
    animalId: 5, // Relacionado con la cobaya macho (id: 5)
    status: investigationEnum.CERRADA,
  },
  {
    id: 3,
    title: "Comportamiento social en ratas",
    description:
      "Investigación sobre el comportamiento social y jerarquías en ratas de laboratorio.",
    animalId: 3, // Relacionado con la rata macho (id: 3)
    status: investigationEnum.ENCURSO,
  },
  {
    id: 4,
    title: "Terapia génica en conejos",
    description:
      "Estudio experimental para probar la eficacia de una terapia génica en conejos con enfermedades hereditarias.",
    animalId: 7, // Relacionado con el conejo macho (id: 7)
    status: investigationEnum.ENCURSO,
  },
  {
    id: 5,
    title: "Envejecimiento en hámsters",
    description:
      "Investigación sobre los efectos del envejecimiento en la capacidad cognitiva de hámsters.",
    animalId: 9, // Relacionado con el hámster macho (id: 9)
    status: investigationEnum.CERRADA,
  },
  {
    id: 6,
    title: "Impacto del estrés en ratones",
    description:
      "Estudio para evaluar cómo el estrés crónico afecta el sistema inmunológico de ratones.",
    animalId: 2, // Relacionado con el ratón hembra (id: 2)
    status: investigationEnum.ENCURSO,
  },
  {
    id: 7,
    title: "Nuevo fármaco para cobayas",
    description:
      "Pruebas de un nuevo fármaco para tratar infecciones respiratorias en cobayas.",
    animalId: 6, // Relacionado con la cobaya hembra (id: 6)
    status: investigationEnum.CERRADA,
  },
  {
    id: 8,
    title: "Biopsia de tejido en ratas",
    description:
      "Estudio para analizar la regeneración de tejidos en ratas después de una biopsia.",
    animalId: 4, // Relacionado con la rata hembra (id: 4)
    status: investigationEnum.ENCURSO,
  },
  {
    id: 9,
    title: "Cirugía experimental en conejos",
    description:
      "Investigación sobre técnicas quirúrgicas innovadoras en conejos.",
    animalId: 8, // Relacionado con el conejo hembra (id: 8)
    status: investigationEnum.ENCURSO,
  },
  {
    id: 10,
    title: "Dieta y longevidad en hámsters",
    description:
      "Estudio para determinar si una dieta baja en calorías aumenta la longevidad en hámsters.",
    animalId: 10, // Relacionado con el hámster hembra (id: 10)
    status: investigationEnum.CERRADA,
  },
  {
    id: 11,
    title: "Efectos de la dieta en cobayas",
    description:
      "Estudio para evaluar el impacto de una dieta alta en fibra en la salud digestiva de cobayas.",
    animalId: 1, // Relacionado con la cobaya macho (id: 5)
    status: investigationEnum.CERRADA,
  },
];

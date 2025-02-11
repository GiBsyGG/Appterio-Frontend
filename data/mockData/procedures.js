export const statusEnum = {
  NUEVO: "Nuevo",
  PENDIENTE: "Pendiente",
  HECHO: "Hecho",
};

// Procedures for lab animals mock data contains, an id, name, description (long), and date.
export const proceduresData = [
  {
    id: 1,
    title: "Extracción de sangre",
    description:
      "Extracción de sangre para análisis de glucosa y colesterol. Se requiere ayuno de 12 horas antes del procedimiento.",
    date: "2023-10-15",
    specimenID: 1, // Asignado al Ratón Macho (ID: 1)
    status: statusEnum.PENDIENTE,
  },
  {
    id: 2,
    title: "Administración de medicamento",
    description:
      "Administración de dosis única de antibiótico para tratar infección bacteriana. Seguir protocolo de dosificación.",
    date: "2023-10-16",
    specimenID: 2, // Asignado al Ratón Hembra (ID: 2)
    status: statusEnum.HECHO,
  },
  {
    id: 3,
    title: "Cirugía de tumor",
    description:
      "Extracción de tumor subcutáneo en la región dorsal. Preparar quirófano y equipo de anestesia.",
    date: "2023-10-17",
    specimenID: 3, // Asignado a la Rata Macho (ID: 3)
    status: statusEnum.NUEVO,
  },
  {
    id: 4,
    title: "Control de peso",
    description:
      "Registro semanal de peso para monitorear crecimiento y salud general del animal. Anotar en la ficha correspondiente.",
    date: "2023-10-18",
    specimenID: 4, // Asignado a la Rata Hembra (ID: 4)
    status: statusEnum.PENDIENTE,
  },
  {
    id: 5,
    title: "Vacunación",
    description:
      "Aplicación de vacuna contra la rabia. Verificar historial de vacunación previa.",
    date: "2023-10-19",
    specimenID: 5, // Asignado a la Cobaya Macho (ID: 5)
    status: statusEnum.HECHO,
  },
  {
    id: 6,
    title: "Biopsia de tejido",
    description:
      "Toma de muestra de tejido para análisis histopatológico. Preparar material de sutura.",
    date: "2023-10-20",
    specimenID: 6, // Asignado a la Cobaya Hembra (ID: 6)
    status: statusEnum.NUEVO,
  },
  {
    id: 7,
    title: "Radiografía",
    description:
      "Realización de radiografía torácica para evaluar posibles anomalías pulmonares. Usar protección radiológica.",
    date: "2023-10-21",
    specimenID: 7, // Asignado al Conejo Macho (ID: 7)
    status: statusEnum.PENDIENTE,
  },
  {
    id: 8,
    title: "Cambio de vendaje",
    description:
      "Cambio de vendaje en pata posterior derecha. Verificar herida y aplicar pomada antibiótica.",
    date: "2023-10-22",
    specimenID: 8, // Asignado al Conejo Hembra (ID: 8)
    status: statusEnum.HECHO,
  },
  {
    id: 9,
    title: "Monitoreo postoperatorio",
    description:
      "Control de signos vitales y recuperación después de cirugía. Registrar temperatura, frecuencia cardíaca y respiratoria.",
    date: "2023-10-23",
    specimenID: 9, // Asignado al Hamster Macho (ID: 9)
    status: statusEnum.NUEVO,
  },
  {
    id: 10,
    title: "Eutanasia",
    description:
      "Procedimiento de eutanasia por enfermedad terminal. Seguir protocolo ético y de bienestar animal.",
    date: "2023-10-24",
    specimenID: 10, // Asignado al Hamster Hembra (ID: 10)
    status: statusEnum.PENDIENTE,
  },
];

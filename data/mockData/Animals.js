export const animalStatus = {
  SALUDABLE: "Saludable",
  DESCESO: "Deceso",
  CUIDADO: "Cuidado",
};

export const animals = [
  {
    id: 1,
    species: "Ratón",
    sex: "Macho",
    state: animalStatus.SALUDABLE,
    weight: 25, // en gramos
    age: 3, // en meses
    origin: "nacimiento",
    family: "748B",
    details: {
      dieta: {
        lastUpdate: "12/02/2024",
        description:
          "Su dieta se compone de alimento balanceado en pellets con suplementos vitamínicos. Se han introducido pequeñas porciones de frutas para mejorar la digestión y aportar variedad nutricional.",
      },
      ultimasObservaciones: {
        lastUpdate: "14/02/2024",
        description:
          "Se encuentra en estado activo y responde bien a estímulos externos. No se han identificado cambios en el peso ni en el apetito durante la última semana.",
      },
      signosClinicos: {
        lastUpdate: "10/02/2024",
        description:
          "Examen físico sin hallazgos relevantes. No presenta signos de enfermedades ni alteraciones en la piel o mucosas.",
      },
      vacunas: {
        lastUpdate: "08/01/2024",
        description: "Rabia, Moquillo, Hepatitis infecciosa",
      },
    },
    parent1Id: 2,
    parent2Id: 4,
  },
  {
    id: 2,
    species: "Ratón",
    sex: "Hembra",
    state: animalStatus.SALUDABLE,
    weight: 22,
    age: 2,
    origin: "nacimiento",
    family: "748B",
    details: {
      dieta: {
        lastUpdate: "20/02/2024",
        description:
          "Mantiene una alimentación con pellets de alta calidad y pequeñas porciones de hortalizas. Se ha limitado el acceso a semillas con alto contenido de grasa para evitar sobrepeso.",
      },
      ultimasObservaciones: {
        lastUpdate: "22/02/2024",
        description:
          "Ha mostrado un comportamiento más activo durante la noche. Se mantiene en peso óptimo y con buena movilidad.",
      },
      signosClinicos: {
        lastUpdate: "18/02/2024",
        description:
          "Ligero enrojecimiento en la zona ocular, posiblemente causado por el sustrato. Se recomienda monitoreo y cambio de material en su hábitat.",
      },
      vacunas: {
        lastUpdate: "15/01/2024",
        description: "Parvovirus, Leptospirosis, Tos de las perreras",
      },
    },
    parent1Id: 0,
    parent2Id: 0,
  },
  {
    id: 3,
    species: "Rata",
    sex: "Macho",
    state: animalStatus.SALUDABLE,
    weight: 300,
    age: 6,
    origin: "externo",
    family: "912C",
    details: {
      dieta: {
        lastUpdate: "05/02/2024",
        description:
          "Consumo diario de alimento balanceado y porciones controladas de proteína animal. Se ha reducido el acceso a carbohidratos para evitar problemas digestivos.",
      },
      ultimasObservaciones: {
        lastUpdate: "07/02/2024",
        description:
          "Muestra buen ánimo y actividad normal. Se ha registrado un ligero aumento de peso, por lo que se ajustará la dieta.",
      },
      signosClinicos: {
        lastUpdate: "03/02/2024",
        description:
          "Sin signos de enfermedad visibles. El pelaje se mantiene brillante y sin presencia de lesiones o parásitos.",
      },
      vacunas: {
        lastUpdate: "02/01/2024",
        description: "Rabia, Moquillo, Leishmaniasis",
      },
    },
    parent1Id: 2,
    parent2Id: 4,
  },
  {
    id: 4,
    species: "Rata",
    sex: "Hembra",
    state: animalStatus.SALUDABLE,
    weight: 280,
    age: 5,
    origin: "externo",
    family: "912C",
    details: {
      dieta: {
        lastUpdate: "17/02/2024",
        description:
          "Dieta rica en fibra con forraje fresco y pellets especializados. Se ha restringido el consumo de frutas dulces para controlar el peso.",
      },
      ultimasObservaciones: {
        lastUpdate: "19/02/2024",
        description:
          "Ha mostrado un comportamiento tranquilo. Se ha notado una ligera disminución en la ingesta de agua, se recomienda monitoreo.",
      },
      signosClinicos: {
        lastUpdate: "15/02/2024",
        description:
          "Presenta una leve irritación en una de las patas traseras. Se realizará revisión adicional en la próxima consulta.",
      },
      vacunas: {
        lastUpdate: "12/01/2024",
        description: "Fiebre, aftosa, Clostridiosis",
      },
    },
    parent1Id: 0,
    parent2Id: 0,
  },
  {
    id: 5,
    species: "Cobaya",
    sex: "Macho",
    state: animalStatus.DESCESO,
    weight: 800,
    age: 12,
    origin: "nacimiento",
    family: "356A",
    details: {
      dieta: {
        lastUpdate: "10/02/2024",
        description:
          "Alimentación basada en un 70% de heno, complementado con pellets de alta calidad y vegetales frescos. Se ha introducido un suplemento de calcio para mejorar la salud ósea.",
      },
      ultimasObservaciones: {
        lastUpdate: "12/02/2024",
        description:
          "Muestra un comportamiento social estable y un peso adecuado. Se recomienda seguir monitoreando su adaptación a un nuevo entorno.",
      },
      signosClinicos: {
        lastUpdate: "08/02/2024",
        description:
          "No se observan alteraciones en la piel ni signos de malestar. Movilidad dentro de los parámetros normales.",
      },
      vacunas: {
        lastUpdate: "06/01/2024",
        description: "Rabia, Leptospirosis",
      },
    },
    parent1Id: 10,
    parent2Id: 9,
  },
  {
    id: 6,
    species: "Cobaya",
    sex: "Hembra",
    state: animalStatus.CUIDADO,
    weight: 750,
    age: 10,
    origin: "nacimiento",
    family: "356A",
    details: {
      dieta: {
        lastUpdate: "18/02/2024",
        description:
          "Dieta controlada con base en pellets comerciales, con un refuerzo de proteínas mediante el suministro ocasional de insectos secos.",
      },
      ultimasObservaciones: {
        lastUpdate: "20/02/2024",
        description:
          "Se observa mayor actividad nocturna y una leve reducción en el consumo de alimento. Se continuará monitoreando para detectar posibles cambios en la salud.",
      },
      signosClinicos: {
        lastUpdate: "16/02/2024",
        description:
          "Estado general saludable. Se observó una pequeña pérdida de pelo en la zona dorsal, sin signos de infección.",
      },
      vacunas: {
        lastUpdate: "14/01/2024",
        description: "Rabia, Moquillo, Parvovirus",
      },
    },
    parent1Id: 1,
    parent2Id: 0,
  },
  {
    id: 7,
    species: "Conejo",
    sex: "Macho",
    state: animalStatus.DESCESO,
    weight: 1500,
    age: 18,
    origin: "externo",
    family: "123D",
    details: {
      dieta: {
        lastUpdate: "22/02/2024",
        description:
          "Dieta estándar con inclusión de semillas bajas en grasa. Se ha reducido la frecuencia de snacks para evitar alteraciones metabólicas.",
      },
      ultimasObservaciones: {
        lastUpdate: "24/02/2024",
        description:
          "Se encuentra en óptimas condiciones. No se han registrado alteraciones en el comportamiento ni en la alimentación.",
      },
      signosClinicos: {
        lastUpdate: "20/02/2024",
        description:
          "No presenta signos clínicos preocupantes. Se mantiene alerta y con reflejos adecuados.",
      },
      vacunas: {
        lastUpdate: "18/01/2024",
        description: "Rabia, Tifus, Leptospirosis",
      },
    },
    parent1Id: 1,
    parent2Id: 0,
  },
  {
    id: 8,
    species: "Conejo",
    sex: "Hembra",
    state: animalStatus.CUIDADO,
    weight: 1400,
    age: 15,
    origin: "externo",
    family: "123D",
    details: {
      dieta: {
        lastUpdate: "09/02/2024",
        description:
          "Consumo de heno en un 80%, con un suplemento de pellets y vegetales de hoja verde. Se ha reducido la cantidad de zanahorias por su alto contenido en azúcar.",
      },
      ultimasObservaciones: {
        lastUpdate: "11/02/2024",
        description:
          "Muestra un estado de ánimo estable. Se recomienda continuar con el monitoreo del peso para evitar sobrepeso.",
      },
      signosClinicos: {
        lastUpdate: "07/02/2024",
        description:
          "No se observan heridas ni signos de enfermedad. Buen estado general.",
      },
      vacunas: {
        lastUpdate: "05/01/2024",
        description: "Rabia, Moquillo",
      },
    },
    parent1Id: 0,
    parent2Id: 0,
  },
  {
    id: 9,
    species: "Hamster",
    sex: "Macho",
    state: animalStatus.SALUDABLE,
    weight: 120,
    age: 4,
    origin: "nacimiento",
    family: "567E",
    details: {
      dieta: {
        lastUpdate: "06/02/2024",
        description:
          "Dieta basada en alimento balanceado con suplementos de omega 3 para mejorar la condición del pelaje.",
      },
      ultimasObservaciones: {
        lastUpdate: "08/02/2024",
        description:
          "Se ha notado un leve incremento en el nivel de actividad. No se detectaron cambios en la ingesta de alimento o agua.",
      },
      signosClinicos: {
        lastUpdate: "04/02/2024",
        description:
          "Sin signos clínicos relevantes. Se recomienda control en la próxima revisión.",
      },
      vacunas: {
        lastUpdate: "02/01/2024",
        description: "Parvovirus, Leptospirosis",
      },
    },
    parent1Id: 6,
    parent2Id: 7,
  },
  {
    id: 10,
    species: "Hamster",
    sex: "Hembra",
    state: animalStatus.SALUDABLE,
    weight: 110,
    age: 3,
    origin: "nacimiento",
    family: "567E",
    details: {
      dieta: {
        lastUpdate: "06/02/2024",
        description:
          "Dieta basada en alimento balanceado con suplementos de omega 3 para mejorar la condición del pelaje.",
      },
      ultimasObservaciones: {
        lastUpdate: "08/02/2024",
        description:
          "Se ha notado un leve incremento en el nivel de actividad. No se detectaron cambios en la ingesta de alimento o agua.",
      },
      signosClinicos: {
        lastUpdate: "04/02/2024",
        description:
          "Sin signos clínicos relevantes. Se recomienda control en la próxima revisión.",
      },
      vacunas: {
        lastUpdate: "02/01/2024",
        description: "Parvovirus, Leptospirosis",
      },
    },
    parent1Id: 6,
    parent2Id: 7,
  },
];

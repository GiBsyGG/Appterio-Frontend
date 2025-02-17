import { statusEnum } from "./procedures";

export const requests = [
  {
    id: 1,
    titulo: "Adquisición de nuevos especímenes",
    descripcion:
      "Solicitud para adquirir 10 ratones de la cepa C57BL/6 para un nuevo estudio genético.",
    date: "2023-10-15",
    solicitanteID: 1,
    adignadoID: 2,
    status: statusEnum.PENDIENTE,
  },
  {
    id: 2,
    titulo: "Compra de alimentos especiales",
    descripcion:
      "Solicitud para comprar alimentos especiales para cobayas con necesidades dietéticas específicas.",
    date: "2023-10-16",
    solicitanteID: 3,
    adignadoID: 4,
    status: statusEnum.NUEVO,
  },
  {
    id: 3,
    titulo: "Reparación de jaulas",
    descripcion:
      "Solicitud para reparar jaulas dañadas en el área de roedores. Se necesitan 5 jaulas nuevas.",
    date: "2023-10-17",
    solicitanteID: 5,
    adignadoID: 6,
    status: statusEnum.HECHO,
  },
  {
    id: 4,
    titulo: "Adquisición de material de enriquecimiento",
    descripcion:
      "Solicitud para comprar juguetes y estructuras de enriquecimiento ambiental para los primates.",
    date: "2023-10-18",
    solicitanteID: 7,
    adignadoID: 8,
    status: statusEnum.PENDIENTE,
  },
  {
    id: 5,
    titulo: "Transporte de especímenes",
    descripcion:
      "Solicitud para organizar el transporte de 20 ratas desde el bioterio principal al laboratorio satélite.",
    date: "2023-10-19",
    solicitanteID: 9,
    adignadoID: 10,
    status: statusEnum.NUEVO,
  },
  {
    id: 6,
    titulo: "Compra de equipos de bioseguridad",
    descripcion:
      "Solicitud para adquirir nuevos equipos de bioseguridad, incluyendo batas, guantes y mascarillas.",
    date: "2023-10-20",
    solicitanteID: 1,
    adignadoID: 2,
    status: statusEnum.HECHO,
  },
  {
    id: 7,
    titulo: "Instalación de cámaras de monitoreo",
    descripcion:
      "Solicitud para instalar cámaras de monitoreo en las áreas de cuarentena y procedimientos.",
    date: "2023-10-21",
    solicitanteID: 3,
    adignadoID: 4,
    status: statusEnum.HECHO,
  },
  {
    id: 8,
    titulo: "Capacitación de personal",
    descripcion:
      "Solicitud para organizar una capacitación sobre manejo ético de animales de laboratorio.",
    date: "2023-10-22",
    solicitanteID: 5,
    adignadoID: 6,
    status: statusEnum.PENDIENTE,
  },
  {
    id: 9,
    titulo: "Renovación de licencias",
    descripcion:
      "Solicitud para renovar las licencias de operación del bioterio ante las autoridades correspondientes.",
    date: "2023-10-23",
    solicitanteID: 7,
    adignadoID: 8,
    status: statusEnum.NUEVO,
  },
  {
    id: 10,
    titulo: "Adquisición de software de gestión",
    descripcion:
      "Solicitud para comprar un software especializado en la gestión de bioterios.",
    date: "2023-10-24",
    solicitanteID: 9,
    adignadoID: 10,
    status: statusEnum.HECHO,
  },
];

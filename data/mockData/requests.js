import { statusEnum } from "../../utils/StatusEnum";

export const requests = [
  {
    id: 1,
    title: "Adquisición de nuevos especímenes",
    description:
      "Solicitud para adquirir 10 ratones de la cepa C57BL/6 para un nuevo estudio genético.",
    date: "2023-10-15",
    solicitanteID: 1,
    asignadoID: 2,
    status: statusEnum.PENDIENTE,
  },
  {
    id: 2,
    title: "Compra de alimentos especiales",
    description:
      "Solicitud para comprar alimentos especiales para cobayas con necesidades dietéticas específicas.",
    date: "2023-10-16",
    solicitanteID: 3,
    asignadoID: 4,
    status: statusEnum.NUEVO,
  },
  {
    id: 3,
    title: "Reparación de jaulas",
    description:
      "Solicitud para reparar jaulas dañadas en el área de roedores. Se necesitan 5 jaulas nuevas.",
    date: "2023-10-17",
    solicitanteID: 5,
    asignadoID: 6,
    status: statusEnum.HECHO,
  },
  {
    id: 4,
    title: "Adquisición de material de enriquecimiento",
    description:
      "Solicitud para comprar juguetes y estructuras de enriquecimiento ambiental para los primates.",
    date: "2023-10-18",
    solicitanteID: 7,
    asignadoID: 8,
    status: statusEnum.PENDIENTE,
  },
  {
    id: 5,
    title: "Transporte de especímenes",
    description:
      "Solicitud para organizar el transporte de 20 ratas desde el bioterio principal al laboratorio satélite.",
    date: "2023-10-19",
    solicitanteID: 9,
    asignadoID: 10,
    status: statusEnum.NUEVO,
  },
  {
    id: 6,
    title: "Compra de equipos de bioseguridad",
    description:
      "Solicitud para adquirir nuevos equipos de bioseguridad, incluyendo batas, guantes y mascarillas.",
    date: "2023-10-20",
    solicitanteID: 1,
    asignadoID: 2,
    status: statusEnum.HECHO,
  },
  {
    id: 7,
    title: "Instalación de cámaras de monitoreo",
    description:
      "Solicitud para instalar cámaras de monitoreo en las áreas de cuarentena y procedimientos.",
    date: "2023-10-21",
    solicitanteID: 3,
    asignadoID: 4,
    status: statusEnum.HECHO,
  },
  {
    id: 8,
    title: "Capacitación de personal",
    description:
      "Solicitud para organizar una capacitación sobre manejo ético de animales de laboratorio.",
    date: "2023-10-22",
    solicitanteID: 5,
    asignadoID: 6,
    status: statusEnum.PENDIENTE,
  },
  {
    id: 9,
    title: "Renovación de licencias",
    description:
      "Solicitud para renovar las licencias de operación del bioterio ante las autoridades correspondientes.",
    date: "2023-10-23",
    solicitanteID: 7,
    asignadoID: 8,
    status: statusEnum.NUEVO,
  },
  {
    id: 10,
    title: "Adquisición de software de gestión",
    description:
      "Solicitud para comprar un software especializado en la gestión de bioterios.",
    date: "2023-10-24",
    solicitanteID: 9,
    asignadoID: 10,
    status: statusEnum.HECHO,
  },
];


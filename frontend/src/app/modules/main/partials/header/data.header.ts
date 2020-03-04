import { LinkListModel, MenuItemModel } from '../../../../shared/models';

export const headerLinks: LinkListModel[] = [
  { title: '(+51) 064 830 006', icon: 'phone', path: '/main' },
  { title: 'Carhuacayan, Yauli, Junín, PERU', icon: 'room', path: '/main' },
];


// menudata

export const infoMenu: MenuItemModel[] = [
  { title: 'Visión y Misión', path: '/main/page/vission-mission', routeActiveExact: false },
  { title: 'Símbolos Oficiales', path: '/main/page/official-symbol', routeActiveExact: false },
  { title: 'Estructura Orgánica', path: '/main/group/documents/organic-structure', routeActiveExact: false },
  { title: 'Gobernador Municipal', path: '/main/page', routeActiveExact: true },
  { title: 'Registro Municipal', children: [
    { title: 'Directorio de Regidores', path: '/main/page/directory-council', routeActiveExact: false },
    { title: 'Reglamento Interno de Regidores', path: '/main/group/documents/regulations', routeActiveExact: false },
    { title: 'Ordenanzas Muncipales', path: '/main/group/documents/ordinances', routeActiveExact: false },
    { title: 'Acuerdos Municipales', path: '/main/group/documents/agreements', routeActiveExact: false },
    { title: 'Actas de Sesiones Ordinarias', path: '/main/group/documents/ordinary-minutes', routeActiveExact: false },
    { title: 'Actas de Sesiones Extraordinarias', path: '/main/group/documents/extraordinary-minutes', routeActiveExact: false },
    { title: 'Agenda de Sesiones Ordinarias', path: '/main/group/documents/ordinary-agenda', routeActiveExact: false },
    { title: 'Agenda de Sesiones Extraordinarias', path: '/main/group/documents/extraordinary-agenda', routeActiveExact: false },
  ]},
  { title: 'Coordinacion de Regidore', path: '/main/page/coordination-council', routeActiveExact: false },
  { title: 'Agendas Muncipales', path: '/main/schedule', routeActiveExact: false }
];

export const managementMenu: MenuItemModel[] = [
  { title: 'Gerencia General Muncipal', path: '/main/page/management', routeActiveExact: false },
  { title: 'Gerencias Municipales', path: '/main/page/management', routeActiveExact: false },  // changelink
  { title: 'Procuraduría Pública Muncipal', path: '/main/page/prosecutor', routeActiveExact: false },
  { title: 'Direcciones Muncipales', path: '/main/page/management', routeActiveExact: false }, // changelink
  { title: 'Directorio Muncipal', path: '/main/page/directory', routeActiveExact: false },
];

export const servicesMenu: MenuItemModel[] = [
  { title: 'Oportunidades Laborales', path: '/main/page/labor', routeActiveExact: false },
  { title: 'Servidor de Documentos', path: '/main/page/labor', routeActiveExact: false }, // changelink
  { title: 'Consulta Expediente SIAF', path: '/main/page/consultation', routeActiveExact: false },
  { title: 'Sistemas Internos', children: [
    { title: 'InfoSIAF', path: '/main/page/labor', routeActiveExact: false }, // changelink
    { title: 'Control de Asistencia', path: '/main/page/labor', routeActiveExact: false }, // changelink
  ]},
];

export const imageMenu: MenuItemModel[] = [
  { title: 'Manual de Identidad Corporativa', path: '/main/group/documents/identity-manual', routeActiveExact: false },
  { title: 'Archivo de Noticia', path: '/main/page/labor', routeActiveExact: false },  // changelink
  { title: 'Videos', path: '/main/page/labor', routeActiveExact: false },  // changelink
  { title: 'Galerías Fotográficas', path: '/main/page/labor', routeActiveExact: false },  // changelink
];

export class DirectoryCouncilModel {
  constructor(
    public roleTitle: string,
    public name: string,
    public role: string,
    public email: string,
    public roleStart: string
  ) { }
}

export const directoryCouncilList: DirectoryCouncilModel[] = [
  new DirectoryCouncilModel(
    'Alcalde',
    'Juan Carlos Llacza Alcántara',
    'Alcalde del Distrito',
    'jcllacza@munisbc.com',
    '01/01/2019'
  ),
  new DirectoryCouncilModel(
    'Regidor 1',
    'William Caparachin Guerrero',
    'Regidor 1',
    'williamc@munisbc.com',
    '01/01/2019'
  ),
  new DirectoryCouncilModel(
    'Regidor 2',
    'Isaías Luis Caparachin Ricapa',
    'Regidor 2',
    'isaias.l@munisbc.com',
    '01/01/2019'
  ),
  new DirectoryCouncilModel(
    'Regidor 3',
    'Sandy Lisset Osorio Gerónimo',
    'Regidor 3',
    'sandy.l@munisbc.com',
    '01/01/2019'
  ),
  new DirectoryCouncilModel(
    'Regidor 4',
    'Gian Marco Gerónimo Fraga',
    'Regidor 4',
    'gian.marco@munisbc.com',
    '01/01/2019'
  ),
  new DirectoryCouncilModel(
    'Regidor 5',
    'Edith Felicia Rojas Alcántara',
    'Regidor 5',
    'edith.f@munisbc.com',
    '01/01/2019'
  ),
];

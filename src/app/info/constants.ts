import TPLogo from './assets/t&p_logo.jpg';
import IThubLogo from './assets/Ithub-logo.png';
import type { CompanyRoadType, StudingRoadType } from '../../types';

export const workingRoadData: CompanyRoadType[] = [
  {
    id: 1,
    logo: TPLogo,
    name: 'Теории от практиков',
    position: 'Frontend разработчик',
    doing: 'Занимался я тем-то, эти, другим и вообще я делал все. В соло проект написал =) Занимался я тем-то, эти, другим и вообще я делал все. В соло проект написал =) Занимался я тем-то, эти, другим и вообще я делал все. В соло проект написал =) Занимался я тем-то, эти, другим и вообще я делал все. В соло проект написал =)',
    stack: [
      {
        id: 1,
        name: 'React'
      },
      {
        id: 2,
        name: 'Redux'
      },
      {
        id: 3,
        name: 'Ant Design'
      },
      {
        id: 4,
        name: 'Vite'
      },
      {
        id: 5,
        name: 'Nest.js'
      },
      {
        id: 6,
        name: 'PostgreSQL'
      },
      {
        id: 7,
        name: 'Docker'
      }
    ],
    startDate: '18.02.2022',
    endDate: null,
  },
  {
    id: 2,
    logo: IThubLogo,
    name: 'IThub college',
    position: 'Frontend разработчик',
    doing: 'Занимался я тем-то, эти, другим и вообще я делал все. В соло проект написал =) Занимался я тем-то, эти, другим и вообще я делал все. В соло проект написал =) Занимался я тем-то, эти, другим и вообще я делал все. В соло проект написал =) Занимался я тем-то, эти, другим и вообще я делал все. В соло проект написал =)',
    stack: [
      {
        id: 1,
        name: 'React'
      },
      {
        id: 2,
        name: 'Redux'
      },
      {
        id: 3,
        name: 'Ant Design'
      },
      {
        id: 4,
        name: 'Vite'
      },
      {
        id: 5,
        name: 'Nest.js'
      },
      {
        id: 6,
        name: 'PostgreSQL'
      },
      {
        id: 7,
        name: 'Docker'
      }
    ],
    startDate: '20.01.2021',
    endDate: '17.02.2022',
  }
];

export const studingRoadData: StudingRoadType[] = [
  {
    id: 1,
    name: 'IThub college',
    logo: IThubLogo,
    direction: 'Веб-мультимедийная разработка',
    startDate: '01.09.2020',
    endDate: '30.06.2024'
  }
];
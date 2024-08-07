import TPLogo from './assets/t&p_logo.jpg';
import type { CompanyRoadType, StudingRoadType } from './types';

export const workingRoadData: [CompanyRoadType] = [
  {
    id: 1,
    logo: TPLogo,
    name: 'Теории от практиков',
    position: 'Frontend разработчик',
    doing: '',
    stack: [],
    startDate: '18.02.2022',
    endDate: null,
  },
];

export const studingRoadData: [StudingRoadType] = [
  {
    id: 1,
    name: 'IThub college',
    logo: '',
    direction: '',
    startDate: '',
    endDate: ''
  }
];
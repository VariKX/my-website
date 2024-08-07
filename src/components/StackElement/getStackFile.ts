import { StaticImageData } from "next/image";

export function getStackFile(name: string): StaticImageData | string { // ! удалить any

  switch (name) {
    case 'React':
    case 'Redux':
    case 'Docker':
    case 'Ant Design':
    case 'JS':
    case 'TS':
    case 'Nest.js':
    case 'PostgreSQL':                
    
    default: 
      return '';
  }
}
import { StaticImageData } from "next/image";

interface RoadStandartType {
  id: number;
  name: string;
  logo: StaticImageData | string; // ! убрать тип string
  startDate: string;
  endDate: string | null;
};

export type StackType = {
  id: number;
  logo: StaticImageData;
  name: string;
};

export interface StudingRoadType extends RoadStandartType {
  direction: string;
};

export interface CompanyRoadType extends RoadStandartType {
  position: string;
  doing: string;
  stack: [] | [StackType], // ! убрать тип []
};
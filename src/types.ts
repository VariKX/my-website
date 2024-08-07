import { StaticImageData } from "next/image";

export type RoadStandartType = {
  id: number;
  name: string;
  logo: StaticImageData | string; // ! убрать тип string
  startDate: string;
  endDate: string | null;
};

export type StackType = {
  id: number;
  name: string;
};

export interface StudingRoadType extends RoadStandartType {
  direction: string;
};

export interface CompanyRoadType extends RoadStandartType {
  position: string;
  doing: string;
  stack: StackType[];
};
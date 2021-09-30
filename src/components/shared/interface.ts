import { ReactNode } from "react";

export interface IProps {
  children: ReactNode;
  min: number;
  max: number;
}
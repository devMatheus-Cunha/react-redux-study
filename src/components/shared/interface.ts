import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IProps {
  children?: ReactNode;
  min: number;
  max: number;
}

export interface IIntervalProps {
  onChangeMin: Dispatch<SetStateAction<number>>;
  onChangeMax: Dispatch<SetStateAction<number>>;
  min: number;
  max: number;
}

import { ReactNode } from "react";

export interface ILayout {
  children: ReactNode;
  hideHeader?: boolean;
}

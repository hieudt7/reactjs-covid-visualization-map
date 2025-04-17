import type { ReactElement } from 'react';

type NavsChild = {
  key: string;
  label?: string | ReactElement;
  element?: ReactElement;
};

export type TypeNavs = NavsChild & {
  children?: Array<TypeNavs>;
};

type RouteChild = {
  path: string;
  element: ReactElement;
};

export type TypeRoutes = RouteChild & {
  children?: Array<RouteChild>;
};

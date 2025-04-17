import { lazy, type FC } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import { routeList } from '@/constant/navs';
import LayoutComponent from '@/layout';

const NotFound = lazy(() => import('@/pages/not-found'));

const routes = [
  {
    path: '/',
    element: <LayoutComponent />,
    children: [
      {
        path: '',
        element: <Navigate to="home" />,
      },
      ...routeList, // can define on this component or move to constant
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];

const RenderRouter: FC = () => {
  const element = useRoutes(routes);

  return element;
};

export default RenderRouter;

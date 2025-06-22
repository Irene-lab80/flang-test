import { createBrowserRouter } from 'react-router-dom';

import { CharacterListPage } from '../pages';
import { BaseLayout } from './layouts/base-layout';

export const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: <CharacterListPage />,
      },
      {
        path: '*',
        element: <div>404 Not Found</div>,
      },
    ],
  },
]);

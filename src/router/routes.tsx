import type { RouteObject } from 'react-router-dom';
import Landing from '../pages/Landing';
import MentionsLegales from '../pages/MentionsLegales';
import PolitiqueConfidentialite from "../pages/PolitiqueConfidentialite";

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/mentions-legales',
    element: <MentionsLegales />,
  },
  {
    path: '/politique-confidentialite',
    element: <PolitiqueConfidentialite />,
  },
];


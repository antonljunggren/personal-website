import React from 'react';
import HomePage from '../pages/home-page';
import CvPage from '../pages/cv-page';
import ProjectsPage from '../pages/projects-page';

export const Routes = {
  '/': () => <HomePage />,
  '/cv': () => <CvPage />,
  '/projects': () => <ProjectsPage />,
};

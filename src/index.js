import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Hstack from './Hstack';
import Range from './Range';
import VriWidthContainer from './VriWidthContainer';
import FLayout from './FLayout';
import GridForm from './GridForm';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Hstack />
    <VriWidthContainer />
    <Range />
    <FLayout />
    <GridForm />
  </StrictMode>
);

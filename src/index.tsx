import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import RegistrationPage from './pages/Registration';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RegistrationPage />
  </StrictMode>,
);

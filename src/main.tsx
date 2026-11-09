import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Toaster } from 'sonner';

import { RouterProvider } from 'react-router';
import router from './router.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster position='top-right' richColors closeButton theme='dark' />
  </StrictMode>
);

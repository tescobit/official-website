import { createBrowserRouter } from 'react-router';
import App from './App';
import PrivacyPolicy from './components/privacy-policy';
import RefundPolicy from './components/refund-policy';
import TermsAndConditions from './components/terms-and-conditions';

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
  },
  {
    path: '/privacy',
    Component: PrivacyPolicy,
  },
  {
    path: '/refund',
    Component: RefundPolicy,
  },
  {
    path: '/terms',
    Component: TermsAndConditions,
  },
]);

export default router;

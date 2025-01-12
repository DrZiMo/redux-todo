import { createBrowserRouter } from 'react-router-dom';
import Homepage from './pages/Homepage';
import MainRouter from './pages/MainPage';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainRouter />,
    children: [
      {
        index: true,
        element: <Homepage />
      },
      {
        path: '/about',
        element: <AboutUs />
      },
      {
        path: '/contact',
        element: <ContactUs />
      }
    ]
  }
]);

export default router;

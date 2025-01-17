import { createBrowserRouter } from 'react-router-dom';
import Homepage from './pages/Homepage';
import MainRouter from './pages/MainPage';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import NotFound from './pages/NotFound';
import Posts from './pages/Posts';

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
      },
      {
        path: '/posts',
        element: <Posts />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
]);

export default router;

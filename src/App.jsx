import { RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import router from './routes';

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;

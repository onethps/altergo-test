import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { News } from './pages/News';
import { Profile } from './pages/Profile';
import { ProtectedRoute } from './routes/ProtectedRoute';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/news',
        element: <News />,
      },
      {
        element: <ProtectedRoute />,
        children: [{ path: '/profile', element: <Profile /> }],
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

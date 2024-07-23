import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home';
import About from './pages/About';
import AppLayout from './layouts/AppLayout';
import HelpLayout from './layouts/HelpLayout';
import Faq from './pages/help/faq';
import Contact, { contactAction } from './pages/help/contact';
import NotFound from './pages/NotFound';
import Careers from './pages/careers/Careers';
import CareersLayout from './layouts/CareersLayout';
import { careersLoader } from './pages/careers/Careers.loader';
import CareerDetail from './pages/careers/CareerDetail';
import { CareerDetailsLoader } from './pages/careers/CareerDetailsLoader';
import CareerError from './pages/careers/CareerErrors';


const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {index: true, element: <Home /> },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'help',
        element: <HelpLayout />,
        children: [
          {
            path: "faq",
            element: <Faq />
          },
          {
            path: "contact",
            element: <Contact />,
            action: contactAction
          }
        ]
      },
      {
        path: 'careers',
        element: <CareersLayout />,
        errorElement: <CareerError />,
        children: [
          {
            index: true,
            element: <Careers />,
            loader: careersLoader,
          },
          {
            path: ':id',
            element: <CareerDetail />,
            loader: CareerDetailsLoader,
          }
        ]
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

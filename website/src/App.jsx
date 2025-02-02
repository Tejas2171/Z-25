import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./Components/Layout/AppLayout";
import ErrorPage from './Components/Layout/ErrorPage'
import Home from './Components/Pages/Home';
import Events from './Components/Pages/Events';
import Marathon from './Components/Pages/Marathon';
import CertificateGenerator from './Components/Pages/CertificateGenerator';
import CoreTeam from './Components/Pages/CoreTeam';
import SupportingTeam from './Components/Pages/SupportingTeam';
import Accomodation from './Components/Pages/Accomodation';
import Gallery from './Components/Pages/Gallery';
import Sponser from './Components/Pages/Sponser';
import Contact from './Components/Pages/Contact';
import Loader from './Components/Layout/Loader';


const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <AppLayout />
      ),
      children: [
        
        
        {
          path: "/supportingTeam",
          element: <SupportingTeam />,
        },
        
      ],
    },
    {
      path: "/home",
      element: <Home />
    },
    {
      path: "/coreTeam",
      element: <CoreTeam />,
    },
    {
      path: "/accomodation",
      element: <Accomodation />,
    },
    {
      path: "/gallery",
      element: <Gallery />,
    },
    
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/sponsors",
      element: <Sponser />,
    },
    {
      path: "/marathon",
      element: <Marathon />,
      loader: Loader,
    },
    {
      path: "/certificate-generator",
      element: <CertificateGenerator />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
    {
      path: "/events",
      element: <Events />,
      loader:Loader,
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
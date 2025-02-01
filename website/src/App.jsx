import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./Components/Layout/AppLayout";
import ErrorPage from './Components/Layout/ErrorPage'
import Home from './Components/Pages/Home';
import Events from './Components/Pages/Events';
import Marathon from './Components/Pages/Marathon';
import CoreTeam from './Components/Pages/CoreTeam';
import SupportingTeam from './Components/Pages/SupportingTeam';
import Accomodation from './Components/Pages/Accomodation';
import Gallery from './Components/Pages/Gallery';
import Sponser from './Components/Pages/Sponser';
import Contact from './Components/Pages/Contact';
import Loader from './Components/Layout/Loader';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show loader for 3.7 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3700);

    return () => clearTimeout(timer);  // Cleanup timer
  }, []);

  // If still loading, show Loader component
  if (isLoading) {
    return <Loader />;
  }

  // Define routes after loader finishes
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/events", element: <Events /> },
        { path: "/coreTeam", element: <CoreTeam /> },
        { path: "/supportingTeam", element: <SupportingTeam /> },
        { path: "/accomodation", element: <Accomodation /> },
        { path: "/gallery", element: <Gallery /> },
        { path: "/sponsers", element: <Sponser /> },
        { path: "/contact", element: <Contact /> },
      ],
    },
    { path: "/marathon", element: <Marathon /> },
    { path: "*", element: <ErrorPage /> }, // Catch-all for undefined routes
  ]);

  return <RouterProvider router={router} />;
};

export default App;
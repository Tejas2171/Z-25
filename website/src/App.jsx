import { createBrowserRouter, RouterProvider, useLocation } from "react-router-dom";
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
import { useEffect, useState } from "react";


const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <AppWithLoader />
      ),
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/events",
          element: <Events />,
        },
        {
          path: "/coreTeam",
          element: <CoreTeam />,
        },
        {
          path: "/supportingTeam",
          element: <SupportingTeam />,
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
          path: "/sponsers",
          element: <Sponser />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/marathon",
          element: <Marathon />,
          loader: Loader,
        },
      ],
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

const AppWithLoader = () => {
    const [isLoading, setIsLoading] = useState(true);
    const location = useLocation(); // Get the current route
  
    useEffect(() => {
      localStorage.removeItem("visitedBefore");
      const isFirstVisit = localStorage.getItem("visitedBefore");
  
      if (!isFirstVisit && location.pathname === "/") {
        // Only show the loader on the first visit and only on the main page "/"
        localStorage.setItem("visitedBefore", "true"); // Mark the user as visited
        const timer = setTimeout(() => {
          setIsLoading(false);
        }, 2100);
  
        return () => clearTimeout(timer);
      } else {
        setIsLoading(false);
      }
    }, [location.pathname]); // Run when the path changes
  
    if (isLoading && location.pathname === "/") {
      return <Loader />;
    }
  
    return <AppLayout />;
  };
  
  export default App;
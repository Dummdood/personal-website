import { createBrowserRouter, Outlet, useLocation } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Projects from "./pages/Projects";
import "./styles/router.css";
import { useEffect } from "react";

export const router = createBrowserRouter(
  [
    {
      element: <NavLayout />,
      children: [
        { path: "/", element: <Homepage /> },
        { path: "/projects", element: <Projects /> },
      ],
    },
  ],
);

function NavLayout() {
  return (
    <div>
      <ScrollRestoration />
      <div className="page-content">
        <Outlet />
      </div>
    </div>
  );
}

const ScrollRestoration = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top of the page when navigating to a new route
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

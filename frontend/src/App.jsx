import react from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home.jsx";
import Admin from "./Pages/Admin.jsx";
import Login from "./Pages/Login.jsx";
import Donors from "./Pages/Donors.jsx";
import Prospects from "./Pages/Prospects.jsx";
import Menu from "./Components/Menu.jsx";
import Prospect from "./Pages/Prospect.jsx";
import NewDonor from "./Pages/NewDonor.jsx";
import Donor from "./Pages/Donor.jsx";

function App() {
  const Layout = () => {
    return (
      <div className="flex">
        <div>
          <Menu />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/admin",
      element: <Layout />,
      children: [
        {
          path: "/admin",
          element: <Admin />,
        },
        {
          path: "/admin/donors",
          element: <Donors />,
        },
        {
          path: "/admin/prospects",
          element: <Prospects />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/admin/prospect/:id",
      element: <Prospect />,
    },
    {
      path: "/admin/newdonor",
      element: <NewDonor />,
    },
    {
      path: "/admin/donor/:id",
      element: <Donor />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

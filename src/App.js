import "react-day-picker/dist/style.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Main from "./Layout/Main";
import Appointment from "./Pages/Appointment/Appointment";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/appointment", element: <Appointment /> },
        { path: "/login", element: <Login /> },
        { path: "/signup", element: <SignUp /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Appointment from "../Pages/Appointment/Appointment";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyAppointments from "../Pages/MyAppointments/MyAppointments";
import SignUp from "../Pages/SignUp/SignUp";

export const router = createBrowserRouter([
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
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [{ path: "/dashboard", element: <MyAppointments /> }],
  },
]);

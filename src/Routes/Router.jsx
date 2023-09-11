import { createBrowserRouter } from "react-router-dom";
import App from "./../App";
import Appoinment from "../Appoinment/Appoinment";
import Error from "../Error/Error";
import AppoinmentLayout from "../Layout/AppoinmentLayout/AppoinmentLayout";
import LoginLayout from "../Layout/LoginLayout/LoginLayout";
import Register from "../Layout/LoginLayout/Register/Register";
import Login from './../Layout/LoginLayout/Login/Login';
import AppointmentManage from "../Appoinment/AppoinmentMange/AppointmentManage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import About from "../About/About";
import Admin from "../AdminPanel/Admin/Admin";
import ManageDr from "../AdminPanel/ManageDr/ManageDr";
import UpdateDr from "../AdminPanel/UpdateDr/UpdateDr";

const router = createBrowserRouter([
  { errorElement: <Error></Error>,
   path: "/", 
   element: <App></App>
   },
  {
    path: "/",
    element: <AppoinmentLayout></AppoinmentLayout>,
    children: [
      {
        path: "/appointment/:id",
        element: <PrivateRoute><Appoinment></Appoinment></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/services/${params.id}`),
      },
    ],
  },
  {
    path: '/',
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      }
    ]
  },
  {
    path: '/appointmentmanage',
    element: <AppointmentManage></AppointmentManage>
  },
  {
    path: '/about',
    element: <About></About>
  },
  {
    path: '/admin',
    element: <Admin></Admin>
  },
  {
    path: '/managedr',
    element: <ManageDr></ManageDr>
  },
  {
    path: '/updatedr/:id',
    element: <UpdateDr></UpdateDr>,
    loader: ({params}) => fetch(`http://localhost:3000/services/${params.id}`)
  },
]);

export default router;

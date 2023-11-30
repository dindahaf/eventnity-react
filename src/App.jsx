import ErrorPage from "./pages/error";
import Home from "./pages/home"
import Login from "./pages/login"
import Register from "./pages/register"
import DashboardEvent from "./pages/dashboard-event"
import DashboardPartner from "./pages/dashboard-partner";
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./pages/root";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <RootLayout/>,
    children: [
      {
        path: "event",
        element: <DashboardEvent />
      },
      {
        path: "partner",
        element: <DashboardPartner />
      }
    ]
  }
]);

function App() {

  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
} 

export default App;
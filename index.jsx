import { createRoot } from "react-dom/client";
import App  from "./App.jsx";
import {createBrowserRouter,RouterProvider,} from "react-router";
import Contact from "./components/Contact.jsx";
import Home from "./components/Home.jsx";
import Error from "./components/Error.jsx";
import Countrydetail from "./components/Countrydetail.jsx";






const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<Error/>,
    children: [
      {
         path:"/",
         element:<Home/>
      }
  ,
  {
    path: "/contact",
    element: <div>Contact</div>
  },
    {
    path: "/:countrydetail",
    element:<Countrydetail/>,
   
  }
  ]}]);

const root=createRoot(document.getElementById("root"));
root.render( <RouterProvider router={router} />);


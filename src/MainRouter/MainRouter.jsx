import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import CategoryNews from "../Pages/News/CategoryNews";
import NewsLayout from "../Layout/NewsLayout";
import NewsDetails from "../Pages/News/NewsDetails";
import LoginLayout from "../Layout/LoginLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import Terms from "../Pages/Login/Terms";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: '/',
    element :<LoginLayout></LoginLayout>,
    children :[
      {
        path :'/',
        element:<Navigate to='category/0'></Navigate>,
        
      },
      {
        path:'login',
        element : <Login></Login>
      },
      {
        path:'register',
        element : <Register></Register>,
      },
      {
        path:'terms',
        element : <Terms></Terms>,
      }

    ],

  },

    {
      path: "category",
      element: <Main></Main>,
      children: [
        {
          path: ":id",
          element: <CategoryNews></CategoryNews>,
          loader : ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
        },
      ],
    },
    {
      path: 'news',
      element :<NewsLayout></NewsLayout>,
      children :[
        {
          path :':id',
          element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute> ,
          loader : ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
        }

      ],

    },
  ]);
export default router;
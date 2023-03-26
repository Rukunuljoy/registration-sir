
import Main from "../Layout/Main";
import Registration from "../Registration/Registration";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Registration></Registration>,
        },
        
      ]
    }
  ])

  export default router;
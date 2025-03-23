import { createBrowserRouter, RouterProvider } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import LoginPage from "./pages/LoginPage";
import PageNotfound from "./pages/PageNotFound";
import ViewFullRecipeList from "./pages/ViewFullRecipe";
import SignUpPage from "./pages/SignUpPage";
const router = createBrowserRouter([
  {
    path: "/", element: <LandingPage/>
  },
  {
    path: "/login", element: <LoginPage/>
  },
  {
    path: "/signup", element: <SignUpPage/>
  },
  {
    path: "/recipes", element: <ViewFullRecipeList/>
  },
  {
    path: "*", element: <PageNotfound/>
  }
])
function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App;

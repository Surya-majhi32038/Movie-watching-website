import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Movie from "./pages/Movie.jsx";
import Contacts from "./pages/Contacts.jsx";
import Applayout from "./components/layout/Applayout.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import { getMoviesData } from "./API calls/GetApiData.jsx";
import MovieDetails from "./components/layout/ui/MovieDetails.jsx";
import { getMovieDetails } from "./API calls/GetMovieData.jsx";
import { contactData } from "./pages/Contacts.jsx";
import movieLoader from "./API calls/mergeApiCalls.jsx";
function App() {
  // set of pages routing paths
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Applayout/>,
      errorElement:<ErrorPage/>,
       // children 
       children:[
          {
            path:"/",
            element:<Home/>,
          },
          {
            path:"/about",
            element:<About/>,
          },
          {
            path:"/contacts",
            element:<Contacts/>,
            action:contactData
          },
          
          {
            path:"/movie",
            element:<Movie/>,
            loader:getMoviesData
          },
          {
            path:"/movie/:movieId",
            element:<MovieDetails/>,
            loader:getMovieDetails
          }
       ]
    }

  ]);
  return <RouterProvider router={router} />;
}

export default App;

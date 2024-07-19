import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Movies } from "./pages/movie/movies-normal";
import { MoviesLarge } from "./pages/movie/movies-large";
import { Top100Movies } from "./pages/top100movies/top100movies";
import { Index } from "./pages";

export function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index />,
    },
    {
      path: "/movies",
      element: <Movies />,
    },
    {
      path: "/movies/page/",
      element: <Movies />,
    },
    {
      path: "/movies/page/:page",
      element: <Movies />,
    },
    {
      path: "/movies/large",
      element: <MoviesLarge />,
    },

    {
      path: "/movies/large/page/",
      element: <MoviesLarge />,
    },
    {
      path: "/movies/large/page/:page",
      element: <MoviesLarge />,
    },
    {
      path: "/top100movies",
      element: <Top100Movies />
    },
    {
      path: "/top100movies/page/:page",
      element: <Top100Movies />
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

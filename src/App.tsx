import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import NotFound from "./pages/404";
import Home from "./pages/Home";
import Redirect from "./pages/Redirect";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} />
        <Route path="redirect" element={<Redirect />} />
        <Route path="*" element={<NotFound />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;

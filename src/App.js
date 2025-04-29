import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./Root";
import Home from "./Home/Home";
import Create from "./Create/Create";
import Notfound from "./Notfound";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="/create" element={<Create />} />
      <Route path="*" element={<Notfound />} />



      {/* ... etc. */}
    </Route>
  )
);
function App() {

  return(   <div>
    <RouterProvider router={router} />  </div>

  );
}

export default App;

import useRouteElement from "./hooks/useRouteElement";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const routeElements = useRouteElement();

  return (
    <div>
      {routeElements}
      <ToastContainer autoClose={2000} />
    </div>
  );
}

export default App;

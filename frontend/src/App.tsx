import AuthLayout from "./layouts/AuthLayout/AuthLayout";
import Register from "./pages/Register/Register";
import useRouteElement from "./hooks/useRouteElement";

function App() {
  const routeElements = useRouteElement();

  return <div>{routeElements}</div>;
}

export default App;

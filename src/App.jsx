import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <UserProvider>
      <RouterProvider router={routes} />
    </UserProvider>
  );
}

export default App;

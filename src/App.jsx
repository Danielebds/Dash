import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./routes";
import "./App.css";
import { AuthProvider } from "./pages/Contexts/Auth";
function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <RoutesApp />
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./routes";

import "./App.css";

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
    <BrowserRouter>

    
      <RoutesApp />
    </BrowserRouter>
    </div>
  );
}

export default App;

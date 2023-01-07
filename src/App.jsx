import { BrowserRouter } from "react-router-dom";

import AppRoute from "./Components/AppRoute";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppRoute />
      </div>
    </BrowserRouter>
  );
}

export default App;

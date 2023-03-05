import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import NewHome from "./NewHome";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<NewHome />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

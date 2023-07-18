import { BrowserRouter, Routes, Route } from "react-router-dom";
import Read from "./Components/Read";
import Create from "./Components/Create";
import Update from "./Components/Update";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Read />}></Route>
          <Route exact path="/create" element={<Create />}></Route>
          <Route exact path="/update" element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

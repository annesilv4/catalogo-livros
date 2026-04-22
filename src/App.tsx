import { Route, Routes } from "react-router-dom";
import Home from "./pages/page";
import AddBookPage from "./pages/books/page";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<AddBookPage />} />
    </Routes>
  )
}

export default App;

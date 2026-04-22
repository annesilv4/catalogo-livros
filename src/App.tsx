import { Route, Routes } from "react-router-dom";
import Home from "./pages/page";
import AddBookPage from "./pages/books/page";
import EditBookPage from "./pages/books/[id]/page";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<AddBookPage />} />
      <Route path="/books/:id" element={<EditBookPage />} />
    </Routes>
  )
}

export default App;

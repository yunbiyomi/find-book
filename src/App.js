import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import BookDetailPages from "./pages/BookDetailPages";

const Layout = () => {
  return (
    <>
      <Outlet />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<SearchPage />} />
          <Route path="/book/:bookId" element={<BookDetailPages />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;

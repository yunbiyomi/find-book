import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import BookDetailPages from "./pages/BookDetailPages";
import { Global, css } from "@emotion/react";

const Layout = () => {
  return (
    <>
      <Global 
        styles={css`
          body {
            background-color: #F2F4F3;
            color: #0A0908;
            transition-duration: .2s;
            transition-property: background-color, color;
          }
          a {
            color: #0A0908;
            text-decoration: none;
          }
          ul {
            list-style: none;
            padding: 0;
          }
        `}
      />
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

/** @jsxImportSource @emotion/react */
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import BookDetailPages from "./pages/BookDetailPages";
import { Global, ThemeProvider, css, useTheme } from "@emotion/react";
import Footer from "./components/Footer";
import { themDark, themLight } from "./components/theme";
import { useState } from "react";

const Layout = ({ isDark, setIsDark }) => {
  const theme = useTheme();
  return (
    <>
      <Global 
        styles={css`
          body {
            background-color: ${theme.background};
            color: ${theme.text};
            transition-duration: .2s;
            transition-property: background-color, color;
          }
          a {
            color: ${theme.text};
            text-decoration: none;
          }
          ul {
            list-style: none;
            padding: 0;
          }
        `}
      />
      <div
        css={css`
          min-height: 90vh;
        `}>
        <Outlet />
      </div>
      <Footer isDark={isDark} setIsDark={setIsDark} />
    </>
  )
}

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <BrowserRouter>
      <ThemeProvider theme={isDark ? themDark : themLight}>
        <Routes>
          <Route path="/" element={<Layout isDark={isDark} setIsDark={setIsDark} />}>
            <Route index element={<SearchPage />} />
            <Route path="/book/:bookId" element={<BookDetailPages />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}
export default App;

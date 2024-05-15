import { BrowserRouter, Route, Routes } from "react-router-dom";
// Importing page components
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";

// Importing the NavigationBar component
import NavigationBar from "./components/NavigationBar";

// Importing route paths from a local file
import { ROUTES } from "./routes";

function App() {
  return (
    <>
      {/* BrowserRouter component wraps the application to enable routing */}
      <BrowserRouter>
        {/* NavigationBar component to display the navigation menu */}
        <NavigationBar />
        <Routes>
          {/* Route for the home page */}
          <Route index element={<Home />} />
          {/* Route for the home page (fallback) */}
          <Route path={ROUTES.HOME} element={<Home />} />
          {/* Route for the blogs page */}
          <Route path={ROUTES.BLOGS} element={<Blogs />} />
          {/* Route for the contact page */}
          <Route path={ROUTES.CONTACT} element={<Contact />} />
          {/* Route for the 404 error page */}
          <Route path={ROUTES.PAGE_NOT_FOUND} element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

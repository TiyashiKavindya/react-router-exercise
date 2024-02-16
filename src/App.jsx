import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Blogs from "./pages/Blogs"
import Contact from "./pages/Contact"
import PageNotFound from "./pages/PageNotFound"
import NavigationBar from "./components/NavigationBar"
import { ROUTES } from "./routes"

function App() {

  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.BLOGS} element={<Blogs />} />
          <Route path={ROUTES.CONTACT} element={<Contact />} />
          <Route path={ROUTES.PAGE_NOT_FOUND} element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

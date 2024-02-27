import { Route, Routes } from "react-router-dom";
import Nav from "./modules/public/components/nav";
import LandingPage from "./modules/public/pages/landingPage";
import ROUTES from "./modules/public/public.routes";
import About from "../src/modules/public/pages/About";
import Gallery from "./modules/public/pages/Gallery";
import Donations from "./modules/public/pages/Donations";
import Contact from "./modules/public/pages/Contact";
import SignUp from "./modules/public/pages/SignUp";
import Page404 from "./modules/public/pages/404_Page";
const Router = () => {
  return (
    <>
      <Nav />

      <Routes>
        <Route path={ROUTES.HOME} element={<LandingPage />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.GALLERY} element={<Gallery />} />
        <Route path={ROUTES.DONATION} element={<Donations />} />
        <Route path={ROUTES.CONTACT} element={<Contact />} />
        <Route path={ROUTES.SIGNUP} element={<SignUp />} />

        <Route path={"*"} element={<Page404 />} />
      </Routes>
    </>
  );
};

export default Router;

import Navbar from "../components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import Hobby from "../Pages/Hobby";
import Project from "../Pages/Project";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { LayoutContainer } from "./styled";
import Box from "../components/Box";

const Layout = () => {
  const [title, setTitle] = useState("Home");
  const { pathname } = useLocation();

  useEffect(() => {
    switch (pathname) {
      case "/react-self-introduction":
        setTitle("Home");
        break;
      case "/profile":
        setTitle("Profile");
        break;
      case "/hobby":
        setTitle("Hobby");
        break;
      case "/project":
        setTitle("Project");
        break;
      default:
        setTitle("Home");
    }
  }, [pathname]);

  useEffect(() => {}, []);
  return (
    <LayoutContainer>
      <Box />
      <Navbar />
      <h1>{title}</h1>
      <Routes>
        <Route path="/react-self-introduction/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/hobby" element={<Hobby />} />
        <Route path="/project" element={<Project />} />
      </Routes>
      <Footer />
    </LayoutContainer>
  );
};
export default Layout;

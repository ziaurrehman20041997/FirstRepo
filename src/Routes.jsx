import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Contact = React.lazy(() => import("pages/Contact"));
const ProjectsDetail = React.lazy(() => import("pages/ProjectsDetail"));
const ProjectsGrid = React.lazy(() => import("pages/ProjectsGrid"));
const ServicesDetail = React.lazy(() => import("pages/ServicesDetail"));
const ServicesGrid = React.lazy(() => import("pages/ServicesGrid"));
const About = React.lazy(() => import("pages/About"));
const Home1 = React.lazy(() => import("pages/Home1"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/home1" element={<Home1 />} />
          <Route path="/about" element={<About />} />
          <Route path="/servicesgrid" element={<ServicesGrid />} />
          <Route path="/servicesdetail" element={<ServicesDetail />} />
          <Route path="/projectsgrid" element={<ProjectsGrid />} />
          <Route path="/projectsdetail" element={<ProjectsDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;

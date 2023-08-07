import React from "react";
import App from "./App";
import NavBar from "./NavBar";
import Contact from "./pages/Contact";
import About from "./pages/about";
import Blog from "./pages/Blog";
import Empty from "./pages/Empty";
import BlogPost from "./pages/BlogPost";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function Root() {
  // const routes = [
  //   { path: "/", name: "Home", Component: App, exact: true },
  //   { path: "/about", name: "About", Component: App, exact: false },
  //   { path: "/contact", name: "Contact", Component: App, exact: false },
  //   { path: "/blog", name: "Blog", Component: App, exact: true },
  //   { path: "/blog/id", name: "Blog Post", Component: App, exact: false },
  //   { path: "*", name: "Empty", Component: App, exact: false },
  // ];
  return (
    <Router>
      <div className="todo-app-container">
        <NavBar />
        <div className="content">
          <Routes>
            {/* {routes.map(({ path, Component, exact }) => (
            <Route key={path} path={path} exact={exact}>
              <Component />
            </Route>
          ))} */}
            <Route exact path="/" element={<App />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="*" element={<Empty />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

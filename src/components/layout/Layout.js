import { Fragment } from "react";
import Navbar from "./Navbar";
import "./layout.css";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      <div className="uk-flex">
        <main className="uk-section">{children}</main>
      </div>
    </Fragment>
  );
};

export default Layout;

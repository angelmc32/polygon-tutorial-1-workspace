import { Fragment, useContext } from "react";
// import { AuthContext } from "../../context/AuthContext";
import Navbar from "./Navbar";
import "./layout.css";

const Layout = ({ children }) => {
  // const { isLoggedIn } = useContext(AuthContext);

  return (
    <Fragment>
      <Navbar />
      <div className="uk-flex">
        {/* {isLoggedIn && <Sidebar />} */}
        {/* { isLoggedIn && <BottomNavbar />} */}
        {/* <main className={isLoggedIn ? "main-logged-in" : ""}>{children}</main> */}
        <main>{children}</main>
      </div>
    </Fragment>
  );
};

export default Layout;

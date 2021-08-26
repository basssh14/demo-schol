import React, { Fragment, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
//import PropTypes from "prop-types";

function Header(props) {
  let history = useHistory();
  const [drop, setDrop] = useState("hidden");
  const [mobMenu, setMobMenu] = useState("hidden");
  const [htmlWidth, setHtmlWidth] = useState(window.innerWidth);
  function checkClicked() {
    //e.preventDefault();
    drop === "hidden" ? setDrop("block") : setDrop("hidden");
    console.log("you clicked button");
  }
  function controlMobMenu() {
    mobMenu === "hidden" ? setMobMenu("block") : setMobMenu("hidden");
  }
  const redirectToMain = () => {
    history.push("/");
    console.log("ejecuta");
  };

  return (
    <Fragment>
      <header
        id="site-header"
        className="w-full h-20/2 relative px-5 lg1:px-2  bg-white text-gray-900 "
      >
        <section className="navigation relative bg-white ">
          <div className="nav-container cursor-pointer">
            {/* <Link to="/" className="w-full h-full"> */}
            <div className="brand centerVertical text-gray-900 usm:text-lg cursor-pointer">
              <Link to="/">Scholarship App</Link>
            </div>
            {/* </Link> */}
            <nav className="mt-4 lg1:mt-1 z-50">
              <div className="nav-mobile bg-transparent z-50">
                <a id="nav-toggle" href="#!" onClick={() => controlMobMenu()}>
                  <span></span>
                </a>
              </div>
              <ul className={`nav-list ${mobMenu} z-50`}>
                <li>
                  <Link to="/adminSide">Dashboard</Link>
                </li>
                <li className="text-gray-900">
                  <Link to="/Students">Students</Link>
                </li>
                <li className="text-gray-900">
                  <Link to="/applications">Applications</Link>
                </li>
                <li className="text-gray-900">
                  <Link to="/payments">Payments</Link>
                </li>
                <li className="text-gray-900">
                  <Link to="/pay">Pay</Link>
                </li>
                <li className="text-gray-900">
                  <Link to="/options">Options</Link>
                </li>
                <li className="text-gray-900">
                  <a id="navDrop" href="#!" onClick={() => checkClicked()}>
                    User
                  </a>
                  <ul class={`nav-dropdown ${drop}`}>
                    <li className="text-gray-900">
                      <Link to="/adminPass">Settings</Link>
                    </li>
                    <li className="text-gray-900">
                      <Link to="/newAdminUser">New Admin User</Link>
                    </li>
                    <li className="text-gray-900">
                      <Link to="/">Sign Out</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </section>
      </header>
    </Fragment>
  );
}

Header.propTypes = {};

export default Header;

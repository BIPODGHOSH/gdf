import React from "react";
import style from "./Nav.module.css";
import { Outlet, Link, NavLink } from "react-router-dom";
import logo from "../../logos/c.png";
// import Courses from "../../pages/app/courses/Courses";

function Nav() {
  return (
    <>
      <nav>
        <div className={style.nav_container}>
          <div className={style.nav_title_wrapper}>
            <Link to="/">
              <img className={style.logo} src={logo} alt="logo" />
            </Link>
            <h4>Coder Zones</h4>
          </div>
          <div className={style.nav_details}>
            <button>
              <NavLink to="/courses">
                {({ isActive }) => (isActive ? "On Courses" : "Courses")}
              </NavLink>
            </button>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Nav;

//  <img
//    alt='cart-icon'
//    src='https://cdn-icons-png.flaticon.com/512/4903/4903482.png'
//    className={`${style.cart_icon} ${style.icon} `}
//  />;

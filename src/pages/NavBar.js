import { NavLink } from "react-router-dom";
import classes from "./NavbarCss.module.css";
function Navbar() {
  return (
    <div className={classes.main}>
      <div className={classes.logo}>
        <p>NavBar</p>
      </div>
      <div className={classes.navLinks}>
        <div>
          <NavLink
            to="/"
            style={({ isActive }) => {
              return {
                color: isActive ? "white" : "black",
              };
            }}
          >
            <p>All Meetup</p>
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/newmeetup"
            style={({ isActive }) => {
              return {
                color: isActive ? "white" : "black",
              };
            }}
          >
            <p>New Meetup</p>
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/favorite"
            style={({ isActive }) => {
              return {
                color: isActive ? "white" : "black",
              };
            }}
          >
            <p>Add Favorite</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

// react
import React from "react";
// navigation
import { NavLink } from "react-router-dom";
// assets
import { logo } from "../../assets";
// styles
import styles from "./styles.module.scss";

const MenuPanel = () => {
  return (
    <div className={styles.panel}>
      <div className={styles.panel__image}>
        <img src={logo} />
      </div>
      <nav className={styles.panel__menu}>
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          Characters
        </NavLink>
        <NavLink
          to={"/watch-list"}
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          My watch list
        </NavLink>
      </nav>
    </div>
  );
};

export default MenuPanel;

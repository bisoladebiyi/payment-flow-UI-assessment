import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Layout.module.scss";
import { tabItems } from "../utils/constants";

const Layout = ({ activeTab, children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p className={styles.heading}>Complete your Purchase</p>
        <ul className={styles.tab}>
          {tabItems.map((item, i) => (
            <Link to={item.path} key={i}>
              <li className={activeTab === i ? styles["tab-active"] : ""}>
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
        {children}
      </div>
    </div>
  );
};

export default Layout;

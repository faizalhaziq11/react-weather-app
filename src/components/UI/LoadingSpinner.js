import React from "react";
import styles from "./LoadingSpinner.module.css";
import logo from "../../logo.svg";

const LoadingSpinner = () => {
  return (
    <div>
      <img src={logo} className={styles["App-logo"]} alt="logo" />
    </div>
  );
};

export default LoadingSpinner;

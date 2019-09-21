import React from "react";
import PropTypes from "prop-types";
import styles from "./Counter.module.css";

const Counter = ({ index, length }) => {
  return (
    <p className={styles.counter}>
      {index + 1}/{length}
    </p>
  );
};

Counter.propTypes = {
  index: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
};

export default Counter;

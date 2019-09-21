import React from "react";
import PropTypes from "prop-types";
import styles from "./Controls.module.css";

const Controls = ({
  index,
  length,
  handleNextPublication,
  handlePrevPublication,
}) => {
  return (
    <section className={styles.controls}>
      <button
        type="button"
        className={styles.button}
        onClick={handlePrevPublication}
        disabled={index === 0}>
        Назад
      </button>
      <button
        type="button"
        className={styles.button}
        onClick={handleNextPublication}
        disabled={index === length - 1}>
        Вперед
      </button>
    </section>
  );
};

Controls.propTypes = {
  index: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
  handleNextPublication: PropTypes.func.isRequired,
  handlePrevPublication: PropTypes.func.isRequired,
};

export default Controls;

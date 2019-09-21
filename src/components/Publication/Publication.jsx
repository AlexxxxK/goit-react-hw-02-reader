import React from "react";
import PropTypes from "prop-types";
import styles from "./Publication.module.css";

const Publication = ({ items }) => {
  const { title, text } = items;

  return (
    <article className={styles.publication}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>{text}</p>
    </article>
  );
};

Publication.propTypes = {
  items: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default Publication;

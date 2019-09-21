import React, { Component } from "react";
import PropTypes from "prop-types";
import Publication from "../Publication/Publication";
import Counter from "../Counter/Counter";
import Controls from "../Controls/Controls";
import styles from "./Reader.module.css";

export default class Reader extends Component {
  constructor() {
    super();
    this.state = { index: 0 };
  }

  handleNextPublication = () => {
    this.setState(prevState => ({
      index: prevState.index + 1,
    }));
  };

  handlePrevPublication = () => {
    this.setState(prevState => ({
      index: prevState.index - 1,
    }));
  };

  render() {
    const { index } = this.state;
    const { items } = this.props;

    return (
      <div className={styles.reader}>
        <Publication items={items[index]} />
        <Counter index={index} length={items.length} />
        <Controls
          index={index}
          length={items.length}
          handleNextPublication={this.handleNextPublication}
          handlePrevPublication={this.handlePrevPublication}
        />
      </div>
    );
  }
}

Reader.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

import React, { Component } from "react";
import PropTypes from "prop-types";
import Publication from "../Publication/Publication";
import Counter from "../Counter/Counter";
import Controls from "../Controls/Controls";
import styles from "./Reader.module.css";

export default class Reader extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
  };

  state = { currentPage: 0 };

  handlePublicationChange = ({ target }) => {
    const { name } = target;

    this.setState(prevState => ({
      currentPage:
        name === "prev" ? prevState.currentPage - 1 : prevState.currentPage + 1,
    }));
  };

  render() {
    const { currentPage } = this.state;
    const { items } = this.props;

    return (
      <div className={styles.reader}>
        <Publication item={items[currentPage]} />
        <Counter currentPage={currentPage} length={items.length} />
        <Controls
          currentPage={currentPage}
          length={items.length}
          handlePublicationChange={this.handlePublicationChange}
        />
      </div>
    );
  }
}

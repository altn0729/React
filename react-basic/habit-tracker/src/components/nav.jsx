import React, { Component } from "react";

class Nav extends Component {
  totalCount = (count) => {};

  render() {
    return (
      <header>
        <i className="habit-logo fas fa-leaf"></i>
        <span>Habit Tracker</span>
        <span className="habit-total">{this.props.totalCount}</span>
      </header>
    );
  }
}

export default Nav;

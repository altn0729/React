import React, { PureComponent } from "react";

class Nav extends PureComponent {
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

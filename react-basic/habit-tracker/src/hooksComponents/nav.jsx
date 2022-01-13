import React from 'react';

const Nav = ({ totalCount }) => {
  console.log(typeof totalCount);
  return (
    <header>
      <i className="habit-logo fas fa-leaf"></i>
      <span>Habit Tracker</span>
      <span className="habit-total">{totalCount}</span>
    </header>
  );
};

export default Nav;

import React, { memo } from 'react';

const Nav = memo(({ totalCount }) => {
  return (
    <header>
      <i className="habit-logo fas fa-leaf"></i>
      <span>Habit Tracker</span>
      <span className="habit-total">{totalCount}</span>
    </header>
  );
});

export default Nav;

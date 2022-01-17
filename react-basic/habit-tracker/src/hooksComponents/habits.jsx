// import React, { Component } from "react";
import React, { memo } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

const Habits = memo(({ habits, onIncrement, onDecrement, onDelete, onAdd, onReset }) => {
  return (
    <>
      <HabitAddForm onAdd={onAdd} />
      <ul>
        {habits.map((habit) => (
          <Habit key={habit.id} habit={habit} onIncrement={onIncrement} onDecrement={onDecrement} onDelete={onDelete} />
        ))}
      </ul>
      <button className="reset" onClick={onReset}>
        Reset All
      </button>
    </>
  );
});

export default Habits;

import React, { useCallback, useState } from 'react';
import Nav from './hooksComponents/nav';
import Habits from './hooksComponents/habits';
import './app.css';

const AppHooks = () => {
  const [habits, setHabits] = useState([
    { id: 1, name: 'Reading', count: 1 },
    { id: 2, name: 'Running', count: 0 },
    { id: 3, name: 'Coding', count: 0 },
  ]);

  const handleIncrement = (habit) => {
    setHabits((habits) => {
      habits.map((item) => {
        if (item.id === habit.id) {
          return { ...habit, count: habit.count + 1 };
        }

        return item;
      });
    });
  };

  const handleDecrement = (habit) => {
    setHabits((habits) => {
      habits.map((item) => {
        if (item.id === habit.id) {
          const count = habit.count - 1;

          return { ...habit, count: count < 0 ? 0 : count };
        }

        return item;
      });
    });
  };

  const handleDelete = (habit) => {
    setHabits((habits) => habits.filter((item) => item.id !== habit.id));
  };

  const handleAdd = (name) => {
    setHabits((habits) => [...habits, { id: Date.now(), name, count: 0 }]);
  };

  const handleReset = () => {
    setHabits((habits) => {
      habits.map((habit) => {
        if (habit.count !== 0) {
          return { ...habit, count: 0 };
        }

        return habit;
      });
    });
  };

  return (
    <>
      <Nav totalCount={habits.filter((item) => item.count > 0).length} />
      <Habits
        habits={habits}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onDelete={handleDelete}
        onAdd={handleAdd}
        onReset={handleReset}
      />
    </>
  );
};

export default AppHooks;

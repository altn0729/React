import React, { Component } from "react";
import Habits from "./components/habits";
import Nav from "./components/nav";
import "./app.css";

class App extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading ", count: 0 },
      { id: 2, name: "Running ", count: 0 },
      { id: 3, name: "Coding ", count: 0 },
    ],
    total: { count: 0 },
  };

  // habit.jsx에서 받은 habit 오브젝트를 다시 반환
  // handleIncrement = () => {
  //   // key={habit.id}: {id: 1, name: 'Reading ', count: 0}
  //   console.log(this.props.habit);
  //   this.props.onIncrement(this.props.habit);
  // };

  // 즉, handleIncrement = (habit) => {} 이렇게 받을수 있는 이유

  handleIncrement = (habit) => {
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);

    // habits[index].count++;
    // ure Compopnent에서 cont를 증가시키기 위한 두번째 방법:
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        // 새로운 habit object를 생성하고 count를 1 증가
        return { ...habit, count: habit.count + 1 };
      }

      return item;
    });
    this.setState({ habits });
  };

  handleDecrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        const count = habit.count - 1;

        return { ...habit, count: count < 0 ? 0 : count };
      }

      return item;
    });

    this.setState({ habits });
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id);

    this.setState({ habits });
  };

  handleAdd = (name) => {
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];

    this.setState({ habits });
  };

  handleReset = () => {
    const habits = this.state.habits.map((habit) => {
      if (habit.count !== 0) {
        return { ...habit, count: 0 };
      }

      return habit;
    });

    this.setState({ habits });
  };

  render() {
    return (
      <>
        <Nav
          totalCount={this.state.habits.filter((item) => item.count > 0).length}
        />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;

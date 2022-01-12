// import React, { PureComponent } from "react";
import React, { memo } from "react";

// PureComponent와 비슷한 동작을 하는 Function Memo
const HabitAddForm = memo((props) => {
  // 함수 안이므로 지역변수 설정
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;

    name && props.onAdd(name);
    // this.inputRef.current.value = "";
    this.formRef.current.reset();
  };

  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="add-input"
        placeholder="Habit"
      />
      <button className="add-button">Add</button>
    </form>
  );
});

export default HabitAddForm;
/*
// const HabitAddForm = (props) => ();
// function HabitAddForm (props) => ();
// function HabitAddForm (props) => {};

// 이것은 React.Component와 같은 동작
const HabitAddForm = (props) => { 
  // 함수 안이므로 지역변수 설정
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;

    name && props.onAdd(name);
    // this.inputRef.current.value = "";
    this.formRef.current.reset();
  };

  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="add-input"
        placeholder="Habit"
      />
      <button className="add-button">Add</button>
    </form>
  );
};

export default HabitAddForm;
*/

/* 
  클래스 컴포넌트

  class HabitAddForm extends PureComponent {
  // Ref와 DOM: https://ko.reactjs.org/docs/refs-and-the-dom.html
  formRef = React.createRef();
  inputRef = React.createRef();

  onSubmit = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;

    name && this.props.onAdd(name);
    // this.inputRef.current.value = "";
    this.formRef.current.reset();
  };

  render() {
    return (
      <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          type="text"
          className="add-input"
          placeholder="Habit"
        />
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;
*/

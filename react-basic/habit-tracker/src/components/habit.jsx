import React, { PureComponent } from "react";

class Habit extends PureComponent {
  // 컴포넌트가 UI상에 등록이 되었을 때 실행
  // 컴포넌트가 마운트가 되고 나서 데이터를 받아 오거나 컴포넌트가 보여질 때
  // 또는 로딩 스피너를 보여줘야 할 때 사용된다.
  componentDidMount() {}
  // 컴포넌트가 UI상에서 삭제 되기전에 실행
  // 타이머라면 타이머를 시작하고 중지하고 실시간 채팅 대화가 이루어진다면
  // 소켓이나 이런 요소들을 초기화 하는 부분 또는 리소스를 지우고 하는 것을 여기서 한다.
  componentWillUnmount() {}

  handleIncrement = () => {
    // key={habit.id}: {id: 1, name: 'Reading ', count: 0}
    console.log(this.props.habit);
    this.props.onIncrement(this.props.habit);
  };

  handleDecrement = () => {
    this.props.onDecrement(this.props.habit);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };

  render() {
    // Pure Compopnent에서 cont를 증가시키기 위한 첫번째 방법: 따로 오브젝트를 넘겨서 바로 받기
    // const { name } = this.props.habit;
    // const { count } = this.props;
    const { name, count } = this.props.habit;

    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecrement}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button
          className="habit-button habit-delete"
          onClick={this.handleDelete}
        >
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;

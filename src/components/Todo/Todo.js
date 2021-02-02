import React from "react";
import PropTypes from "prop-types";

class Todo extends React.Component {
  render() {
    return (
      <div>
        ID: {this.props.id}, {this.props.title}
      </div>
    );
  }
}

Todo.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
};


export default Todo;
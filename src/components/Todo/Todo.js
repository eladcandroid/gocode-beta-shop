import PropTypes from "prop-types";
import React from "react";

const Todo = ({id, title}) => {
  return <div>
    ID: {id}, {title}
  </div>
};

Todo.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
};

export default Todo;

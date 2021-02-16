import React, { useEffect } from "react";
import PropTypes from "prop-types";

const Todo = ({id, title}) => {
  useEffect(() => {
    console.log('TODO: ', id);
    
    return () => console.log('DIE: ', id);
  }, [id]);

  return <div>
    ID: {id}, {title}
  </div>
};

Todo.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
};

export default Todo;

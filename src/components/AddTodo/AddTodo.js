import React, { useState } from "react";

const AddTodo = (props) => {
  const [input, setInput] = useState("");

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button
        onClick={() => {
          props.onAdd(input);
          setInput("");
        }}
      >
        Add Todo
      </button>
    </div>
  );
};

export default AddTodo;

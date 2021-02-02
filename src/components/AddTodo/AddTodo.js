import React from 'react';

class AddTodo extends React.Component {
    state = { input: "" };
    render() {
      return (
        <div>
          <input
            type="text"
            onChange={(e) => this.setState({ input: e.target.value })}
            value={this.state.input}
          />
          <button
            onClick={() => {
              this.props.onAdd(this.state.input);
              this.setState({ input: "" });
            }}
          >
            Add Todo
          </button>
        </div>
      );
    }
  }


  export default AddTodo;
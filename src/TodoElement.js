import React from 'react';

class TodoElement extends React.Component {  
    
    onDelete() {
        this.props.onDelete(this.props.element.id)
    }

    render() {
      const {
        element: { id },
        onDelete
      } = this.props;

      return (
        <li>
          <span>{this.props.element.content}</span>
          <button onClick={() => onDelete(id)}>削除</button>
        </li>
      );
    }
  }

export default TodoElement;
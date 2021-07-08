import React from 'react';
import AddTodo from './add-todo';

import EnhancedTable from './table';

class TodoApp extends React.Component {
    render() {
        return (
            <div className="main-card">
                <div className="add-card"><AddTodo /></div>
                <div className="show-card"><EnhancedTable rows={this.props.todos} /></div>
            </div>
        );
    }
}

export default TodoApp;

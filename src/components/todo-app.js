import React from 'react';
import AddTodo from './add-todo';

import Table1 from './table1';

class TodoApp extends React.Component {
    render() {
        return (
            <div className="main-card">
                <div className="add-card"><AddTodo /></div>
                <div className="show-card"><Table1 rows={this.props.todos} /></div>
            </div>
        );
    }
}

export default TodoApp;

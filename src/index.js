// import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
// import TodoApp from './components/todo-app';

// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';

// import EnhancedTable from './table';

// class Header extends React.Component {
//   render() {
//     const header = this.props.header;
//     return (
//       <h1>{header}</h1>
//     );
//   }
// }

// class AddTodo extends React.Component {
//   render() {
//     return (
//       <div>
//         <Header header="Add a TODO" />
//         <form>
//           <TextField style={{ marginTop: "5px" }} size="small" id="outlined-basic" label="Title" variant="outlined" fullWidth /><br />
//           <TextField style={{ marginTop: "5px" }} size="small" id="outlined-basic" label="End Date" variant="outlined" fullWidth /><br />
//           <Button style={{ marginTop: "10px" }} variant="outlined" color="primary" fullWidth>Add</Button><br />
//         </form>
//       </div>
//     );
//   }
// }

// class TodoApp extends React.Component {
//   render() {
//     return (
//       <div className="main-card">
//         <div className="add-card"><AddTodo /></div>
//         <div className="show-card"><EnhancedTable rows={this.props.todos} /></div>
//       </div>
//     );
//   }
// }

// const TODOS = [
//   { title: 'Wake up', active_state: 'In Progress', date: '7/7/17'},
//   { title: 'sleep', active_state: 'Done', date: '7/7/17'}
// ]

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

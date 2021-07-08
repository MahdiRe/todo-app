import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// import { makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';

import EnhancedTable from './table';

class Header extends React.Component {
  render() {
    const header = this.props.header;
    return (
      <h1>{header}</h1>
    );
  }
}

// class TodoRow extends React.Component {
//   render() {
//     const todo = this.props.todo;
//     const title = todo.done ?
//       todo.title :
//       <span style={{ color: 'green' }}>
//         {todo.title}
//       </span>

//     return (
//       // <tr>
//       //   <td>{title}</td>
//       //   <td>Done</td>
//       //   <td>{todo.date}</td>
//       //   <td><button>Delete</button></td>
//       // </tr>
//       <TableRow key={title}>
//         <TableCell>{title}</TableCell>
//         <TableCell>{todo.done}</TableCell>
//         <TableCell>{todo.date}</TableCell>
//         <TableCell>Delete</TableCell>
//       </TableRow>
//     );
//   }
// }

// class TodoTable extends React.Component {
//   render() {
//     const rows = [];
    

//     this.props.todos.forEach((todo) => {
//       rows.push(
//         <TodoRow
//           todo={todo}
//           key={todo.title} />
//       );
//     });

//     return (
//       <div>
//         <Header header="My TODO's" />

//         <TableContainer component={Paper}>
//           <Table aria-label="simple table">
//             <TableHead>
//               <TableRow>
//                 <TableCell>Task</TableCell>
//                 <TableCell>Progress</TableCell>
//                 <TableCell>Deadline</TableCell>
//                 <TableCell></TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>{rows}</TableBody>
//           </Table>
//         </TableContainer>

//         {/* <table>
//           <thead>
//             <tr>
//               <th>Title</th>
//               <th>Active State</th>
//               <th>End Date</th>
//               <th></th>
//             </tr>
//           </thead>
//           <tbody>{rows}</tbody>
//         </table> */}
//       </div>

//     );
//   }
// }

class AddTodo extends React.Component {
  render() {
    return (
      <div>
        <Header header="Add a TODO" />
        <form>
          <TextField style={{ marginTop: "5px" }} size="small" id="outlined-basic" label="Title" variant="outlined" fullWidth /><br />
          <TextField style={{ marginTop: "5px" }} size="small" id="outlined-basic" label="End Date" variant="outlined" fullWidth /><br />
          <Button style={{ marginTop: "10px" }} variant="outlined" color="primary" fullWidth>Add</Button><br />
        </form>
      </div>
    );
  }
}

class TodoApp extends React.Component {
  render() {
    return (
      <div className="main-card">
        <div className="add-card"><AddTodo /></div>
        <div className="show-card"><EnhancedTable rows={this.props.todos} /></div>
        {/* <div className="show-card"><TodoTable todos={this.props.todos} /></div> */}
      </div>
    );
  }
}

const TODOS = [
  { title: 'Wake up', active_state: 'In Progress', date: '7/7/17'},
  { title: 'sleep', active_state: 'Done', date: '7/7/17'}
]

ReactDOM.render(
  <TodoApp todos={TODOS} />,
  document.getElementById('root')
);

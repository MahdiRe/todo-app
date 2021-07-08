import './App.css';
import TodoApp from './components/todo-app';

function App() {
  const TODOS = [
    { title: 'Wake up', active_state: 'In Progress', date: '7/7/17' },
    { title: 'sleep', active_state: 'Done', date: '7/7/17' }
  ];

  return (
    <TodoApp todos={TODOS} />
  );
}

export default App;

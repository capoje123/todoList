import './App.css';
import { TaskList } from './components/TaskList/TaskList';
import { Add } from './components/Add/Add';

function App() {
  return (
    <div className="App">
      
      <Add/>
      <TaskList/>
    </div>
  );
}

export default App;

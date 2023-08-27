import './App.css'
import { Typography } from '@alfalab/core-components/typography/esm';
import { Todo } from './components/todo/todo';

function App() {
  return (
    <div className='app'>
      <Typography.Title>Zustand practice</Typography.Title>
      <Todo />
    </div>
  )
}

export default App

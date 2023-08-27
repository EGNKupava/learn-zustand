import './App.css'
import { Typography } from '@alfalab/core-components/typography/esm';
import { Gap } from '@alfalab/core-components/gap/esm';
import { Todo } from './components/todo/todo';

function App() {
  return (
    <div className='app'>
      <Typography.Title color="primary">TODO</Typography.Title>
      <Gap size='m'/>
      <Todo />
    </div>
  )
}

export default App

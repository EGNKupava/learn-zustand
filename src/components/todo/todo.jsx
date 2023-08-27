import { AddTask } from '../add-task/add-task';
import { Task } from '../task/task';

import './todo.css';

const initialTodos = {
  "1": { "id": 1, "title": "Купить mac", "description": "Купить macbook super max pro", "isDone": false }
};

const initialOrder = ["1"];

export const Todo = () => {
  return (
    <div className='todo'>
      <AddTask />
      <div className='task-list'>
      {
        initialOrder.map((taskId) => {
          const { title, description, isDone} = initialTodos[taskId];
          return <Task key={taskId} title={title} description={description} isDone={isDone}/>
        })
      }
      </div>
      </div>
  );
}
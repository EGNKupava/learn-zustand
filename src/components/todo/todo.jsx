import { Divider } from '@alfalab/core-components/divider/esm';
import { Gap } from '@alfalab/core-components/gap/esm';

import { AddTask } from '../add-task/add-task';
import { Task } from '../task/task';
import { useTodoStore } from '../../store/todo';

import './todo.css';

export const Todo = () => {
  const order = useTodoStore((state) => state.order);
  const todos = useTodoStore((state) => state.todos);

  return (
    <div className='todo'>
      <AddTask />
      <Divider />
      <Gap size="m"/>
      <div className='task-list'>
      {
        order.map((taskId) => {
          const { title, description, isDone} = todos[taskId];
          return <Task key={taskId} id={taskId} title={title} description={description} isDone={isDone}/>
        })
      }
      </div>
      </div>
  );
}
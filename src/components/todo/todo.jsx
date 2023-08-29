import { Divider } from '@alfalab/core-components/divider/esm';
import { Gap } from '@alfalab/core-components/gap/esm';
import { Spinner } from '@alfalab/core-components/spinner/esm';

import { AddTask } from '../add-task/add-task';
import { Task } from '../task/task';
import { useTodoStore } from '../../store/todo';

import './todo.css';
import { useEffect } from 'react';

export const Todo = () => {
  const {order, todos, fetch, isLoading} = useTodoStore((state) => ({
    order: state.order, 
    todos: state.todos,
    fetch: state.fetch,
    isLoading: state.isLoading,
  }));

  useEffect(() => {
    fetch();
  }, [])

  return (
    <div className='todo'>
      
      <AddTask />
      <Divider />
      <Gap size="m"/>
      <Spinner visible={isLoading} />
      <div className='task-list'>
      { !isLoading &&
        order.map((taskId) => {
          const { title, description, isDone} = todos[taskId];
          return <Task key={taskId} id={taskId} title={title} description={description} isDone={isDone}/>
        })
      }
      </div>
      </div>
  );
}
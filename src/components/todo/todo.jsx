import {Divider} from "@alfalab/core-components/divider/esm";
import {Gap} from "@alfalab/core-components/gap/esm";
import {Spinner} from "@alfalab/core-components/spinner/esm";
import {DndContext} from "@dnd-kit/core";
import {SortableContext} from "@dnd-kit/sortable";
import {arrayMove} from "@dnd-kit/sortable";

import {AddTask} from "../add-task/add-task";
import {Task} from "../task/task";
import {useTodoStore} from "../../store/todo";

import "./todo.css";
import {useEffect} from "react";

export const Todo = () => {
  const {order, todos, fetch, isLoading, move} = useTodoStore((state) => ({
    order: state.order,
    todos: state.todos,
    fetch: state.fetch,
    isLoading: state.isLoading,
    move: state.move,
  }));

  const handleDragEnd = ({active, over}) => {
    if (active.id && over.id) {
      const activeIndex = order.findIndex((id) => id === String(active.id));
      const overIndex = order.findIndex((id) => id === String(over.id));
      const newOrder = arrayMove(order, activeIndex, overIndex);
      move(newOrder);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="todo">
      <AddTask />
      <Divider />
      <Gap size="m" />
      <Spinner visible={isLoading} />
      <DndContext onDragEnd={handleDragEnd}>
        <SortableContext items={order}>
          <div className="task-list">
            {!isLoading &&
              order.map((taskId) => {
                const {title, description, isDone} = todos[taskId];
                return (
                  <Task
                    key={taskId}
                    id={taskId}
                    title={title}
                    description={description}
                    isDone={isDone}
                  />
                );
              })}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
};

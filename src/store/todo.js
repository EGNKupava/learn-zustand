import { create } from 'zustand'

const initialTodos = {
  "1": { "id": 1, "title": "json-server", "description": "todo smt", "isDone": false }
};

const initialOrder = ["1"];

export const useTodoStore = create((set) => ({
  todos: initialTodos,
  order: initialOrder,
  addTask: (task) => set((state) => ({ 
    todos: {
      ...state.todos,
      [task.id]: task,
    },
    order: [task.id,...state.order]
  })),
  removeTask: (currentId) => set((state) => {
    const itemPosition = state.order.findIndex((id) => id === currentId);
    const todosCopy = {...state.todos};
    const copyOrder = [...state.order];
    copyOrder.splice(itemPosition, 1),
    delete todosCopy[currentId]; 
    return {
      order: copyOrder,
      todos: todosCopy,
    };
  }),
  changeStatus: (currentId, isDone) => set((state) => ({
    todos: {
      ...state.todos,
      [currentId]: {
        ...state.todos[currentId], 
        isDone,
      },
    },
  })),
}));
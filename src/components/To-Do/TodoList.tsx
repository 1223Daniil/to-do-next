import React from 'react';
import SvgIcon from '@/components/UI/Icon';
import SortableTodoItem from './SortableTodoItem';
import { TodoItem } from '@/app/page';
import { useDroppable } from '@dnd-kit/core';

interface TodoListProps {
  icon: string;
  title: string;
  listType: string;
  items: TodoItem[];
  onAddTask: (listType: string) => void;
  onUpdateTask: (taskId: string, changes: Partial<TodoItem>) => void;
  onClearTasks?: () => void;
}

const TodoList: React.FC<TodoListProps> = ({
  icon,
  title,
  listType,
  items,
  onAddTask,
  onUpdateTask,
  onClearTasks,
}) => {
  const { setNodeRef } = useDroppable({ id: listType });

  return (
    <div className="bg-black/50 p-4">
      <div className="flex mb-2 justify-between items-center">
        <div className="flex items-center gap-2">
          <SvgIcon name={icon} className="w-6 h-6 text-blue-500" />
          <h2 className="font-semibold text-2xl capitalize">{title}</h2>
        </div>
        <div className="flex gap-2 items-center">
          {listType === 'done' && onClearTasks && (
            <button
              onPointerDown={(e) => e.stopPropagation()}
              onClick={onClearTasks}
            >
              <SvgIcon name='trash' />
            </button>
          )}
          <p
            className="text-gray-400 cursor-pointer select-none"
            onClick={() => onAddTask(listType)}
          >
           {listType == 'to-do' ? '+ Add' : null}
          </p>
        </div>
      </div>
      <ul ref={setNodeRef} className="flex flex-col gap-4 min-h-[50px]">
        {items.map((item) => (
          <SortableTodoItem key={item.id} item={item} onUpdateTask={onUpdateTask} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

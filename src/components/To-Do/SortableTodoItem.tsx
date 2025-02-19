import React, { useState, useEffect } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import SvgIcon from '@/components/UI/Icon';
import { TodoItem } from '@/app/page';

interface SortableTodoItemProps {
  item: TodoItem;
  onUpdateTask: (taskId: string, changes: Partial<TodoItem>) => void;
}

const SortableTodoItem: React.FC<SortableTodoItemProps> = ({ item, onUpdateTask }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: item.id,
    disabled: item.isEditing,
  });

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const formatDate = (date: string) => {
    return date.replace(/-/g, '.');
  };

  const [finishedInput, setFinishedInput] = useState(item.finished);
  const [descriptionInput, setDescriptionInput] = useState(item.description);

  useEffect(() => {
    setFinishedInput(item.finished);
    setDescriptionInput(item.description);
  }, [item.finished, item.description]);

  const handleSave = (e: React.PointerEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onUpdateTask(item.id, {
      finished: finishedInput,
      description: descriptionInput,
      isEditing: false,
    });
  };

  const handleCancel = (e: React.PointerEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onUpdateTask(item.id, { isEditing: false });
    setFinishedInput(item.finished);
    setDescriptionInput(item.description);
  };

  const handleEdit = (e: React.PointerEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onUpdateTask(item.id, { isEditing: true });
  };

  return (
    <li
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="bg-gray-500/25 p-2 flex flex-col rounded-sm gap-2"
    >
      <p>
        <span className="text-gray-400">Start: </span>
        {item.start}
      </p>
      {item.isEditing ? (
        <>
          <div className='flex gap-2'>
            <span className="text-gray-400">Finished: </span>
            <input
              type="date"
              value={finishedInput}
              onChange={(e) => setFinishedInput(e.target.value)}
              onPointerDown={(e) => e.stopPropagation()}
              className="border border-gray-500 p-1 bg-transparent rounded-md"
            />
          </div>
          <div className='flex gap-2'>
            <span className="text-gray-400">Description: </span>
            <input
              type="text"
              value={descriptionInput}
              onChange={(e) => setDescriptionInput(e.target.value)}
              onPointerDown={(e) => e.stopPropagation()}
              className="border border-gray-500 p-1 bg-transparent rounded-md"
            />
          </div>
          <div className="flex gap-2 justify-end">
            <button
              onPointerDown={(e) => e.stopPropagation()}
              onClick={handleSave}
              className='bg-gray-500/50 hover:bg-gray-400/50 p-2 rounded-full'
            >
              <SvgIcon name='check' />
            </button>
            <button
              onPointerDown={(e) => e.stopPropagation()}
              onClick={handleCancel}
              className='bg-gray-500/50 hover:bg-gray-400/50 p-2 rounded-full'
            >
              <SvgIcon name='cross' />
            </button>
          </div>
        </>
      ) : (
        <>
          <p>
            <span className="text-gray-400">Finished: </span>
            {formatDate(item.finished)}
          </p>
          <p>
            <span className="text-gray-400">Description: </span>
            {item.description}
          </p>
          <button
            onPointerDown={(e) => e.stopPropagation()}
            onClick={handleEdit}
            className="bg-gray-500/50 hover:bg-gray-400/50 p-2 rounded-full self-end"
          >
            <SvgIcon name="edit" className="w-6 h-6" />
          </button>
        </>
      )}
    </li>
  );
};

export default SortableTodoItem;

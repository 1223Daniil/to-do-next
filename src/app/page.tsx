'use client';

import { useState } from 'react';
import {
  DndContext,
  closestCenter,
  DragEndEvent,
  DragStartEvent,
  DragOverlay,
} from '@dnd-kit/core';
import { SortableContext, arrayMove } from '@dnd-kit/sortable';
import Input from '@/components/UI/Input';
import TodoList from '@/components/To-Do/TodoList';
import SvgIcon from '@/components/UI/Icon';

export interface TodoItem {
  id: string;
  start: string;
  finished: string;
  description: string;
  completed: boolean;
  isEditing?: boolean;
}

interface Columns {
  [key: string]: TodoItem[];
}

const initialColumns: Columns = {
  'to-do': [
    {
      id: '1',
      start: '19.12.2024',
      finished: '30.12.2024',
      description: 'Task 2',
      completed: false,
    },
    {
      id: '2',
      start: '19.12.2024',
      finished: '30.12.2024',
      description: 'Task 3',
      completed: false,
    },
  ],
  'in-progress': [],
  review: [],
  done: [],
};

const iconMapping: Record<string, string> = {
  'to-do': 'bxs_happy-alt',
  'in-progress': 'bxs_smile',
  review: 'bxs_upside-down',
  done: 'bxs_ghost',
};

export default function ToDo() {
  const [columns, setColumns] = useState<Columns>(initialColumns);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const findContainer = (id: string): string | null => {
    for (const column in columns) {
      if (columns[column].some((item) => item.id === id)) {
        return column;
      }
    }
    return id in columns ? id : null;
  };

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    setActiveId(active.id as string);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) {
      setActiveId(null);
      return;
    }

    const activeIdStr = active.id as string;
    const overId = over.id as string;

    const sourceColumn = findContainer(activeIdStr);
    const destinationColumn = findContainer(overId);

    if (sourceColumn && destinationColumn) {
      if (sourceColumn === destinationColumn) {
        if (activeIdStr !== overId) {
          const columnItems = columns[sourceColumn];
          const oldIndex = columnItems.findIndex((item) => item.id === activeIdStr);
          const newIndex = columnItems.findIndex((item) => item.id === overId);
          const newItems = arrayMove(columnItems, oldIndex, newIndex);
          setColumns((prev) => ({
            ...prev,
            [sourceColumn]: newItems,
          }));
        }
      } else {
        if (columns[destinationColumn].length >= 3) {
          setActiveId(null);
          return;
        }
        const sourceItems = [...columns[sourceColumn]];
        const destinationItems = [...columns[destinationColumn]];
        const activeIndex = sourceItems.findIndex((item) => item.id === activeIdStr);
        const [movedItem] = sourceItems.splice(activeIndex, 1);
        destinationItems.push(movedItem);
        setColumns((prev) => ({
          ...prev,
          [sourceColumn]: sourceItems,
          [destinationColumn]: destinationItems,
        }));
      }
    }
    setActiveId(null);
  };

  const handleAddTask = (listType: string) => {
    setColumns((prev) => {
      if (prev[listType].length >= 3) {
        return prev;
      }
      const newTask: TodoItem = {
        id: new Date().getTime().toString(),
        start: new Date().toLocaleDateString(),
        finished: '',
        description: 'New task',
        completed: false,
        isEditing: true,
      };
      return {
        ...prev,
        [listType]: [...prev[listType], newTask],
      };
    });
  };

  const handleUpdateTask = (taskId: string, changes: Partial<TodoItem>) => {
    setColumns((prev) => {
      const updated = { ...prev };
      for (const key in updated) {
        const index = updated[key].findIndex((task) => task.id === taskId);
        if (index !== -1) {
          updated[key][index] = { ...updated[key][index], ...changes };
          break;
        }
      }
      return updated;
    });
  };

  const handleClearDone = () => {
    setColumns((prev) => ({
      ...prev,
      done: [],
    }));
  };

  return (
    <main>
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">Your tasks</h1>
        <Input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <DndContext
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <div className="grid grid-cols-4 mt-6 gap-4">
          {Object.entries(columns).map(([columnId, items]) => {
            const filteredItems = items.filter((item) =>
              item.description.toLowerCase().includes(searchQuery.toLowerCase())
            );
            return (
              <SortableContext key={columnId} items={filteredItems.map((item) => item.id)}>
                <TodoList
                  icon={iconMapping[columnId] || 'bxs-default'}
                  title={columnId}
                  listType={columnId}
                  items={filteredItems}
                  onAddTask={handleAddTask}
                  onUpdateTask={handleUpdateTask}
                  onClearTasks={columnId === 'done' ? handleClearDone : undefined}
                />
              </SortableContext>
            );
          })}
        </div>

        <DragOverlay>
          {activeId
            ? (() => {
                const container = findContainer(activeId);
                const item = container ? columns[container].find((i) => i.id === activeId) : null;
                return item ? (
                  <div className="bg-gray-500/25 p-2 rounded-sm flex flex-col gap-2">
                    <p>
                      <span className="text-gray-400">Start: </span>
                      {item.start}
                    </p>
                    <p>
                      <span className="text-gray-400">Finished: </span>
                      {item.finished}
                    </p>
                    <p>
                      <span className="text-gray-400">Description: </span>
                      {item.description}
                    </p>
                    <div className="bg-gray-500/50 hover:bg-gray-400/50 p-2 rounded-full self-end">
                      <SvgIcon name="edit" className="w-6 h-6" />
                    </div>
                  </div>
                ) : null;
              })()
            : null}
        </DragOverlay>
      </DndContext>
    </main>
  );
}

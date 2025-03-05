
export interface TodoItem {
  id: string;
  start: string;
  finished: string;
  description: string;
  completed: boolean;
  isEditing?: boolean;
}

export interface SortableTodoItemProps {
  item: TodoItem;
  onUpdateTask: (taskId: string, changes: Partial<TodoItem>) => void;
}

export interface TodoListProps {
  icon: string;
  title: string;
  listType: string;
  items: TodoItem[];
  onAddTask: (listType: string) => void;
  onUpdateTask: (taskId: string, changes: Partial<TodoItem>) => void;
  onClearTasks?: () => void;
}

export interface Columns {
  [key: string]: TodoItem[];
}

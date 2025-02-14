'use client'
import Input from "@/components/UI/Input";
import TodoList from "@/components/To-Do/TodoList";

const items = [
  { id: 1, title: "Task 1", completed: false },
  { id: 2, title: "Task 2", completed: false },
  { id: 3, title: "Task 3", completed: false },
];

export default function ToDo() {
  return (
      <main>
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold">Your tasks</h1>
          <Input type="text" placeholder="Search..." value="" onChange={(t) => {console.log(t);
          }} />
        </div>
        
        <div className="grid grid-cols-4 mt-6 gap-4">
          <TodoList icon="trash" title="To-Do" listType="to-do" items={items} />
          <TodoList icon="trash" title="To-Do" listType="to-do" items={items} />
          <TodoList icon="trash" title="To-Do" listType="to-do" items={items} />
          <TodoList icon="trash" title="To-Do" listType="to-do" items={items} />
        </div>
      </main>
  );
}

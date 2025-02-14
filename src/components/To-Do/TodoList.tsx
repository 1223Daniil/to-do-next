import React from 'react';
import SvgIcon from "@/components/UI/Icon";

interface TodoItem {
    id: number;
    title: string;
    completed: boolean;
}

interface TodoListProps {
    icon: string;
    title: string;
    listType: string;
    items: TodoItem[];
}

const TodoList: React.FC<TodoListProps> = ({ icon, title, listType, items }) => {
    return (
        <div className="bg-black/50 p-4">
            <div className="">
                <SvgIcon name={icon} className="w-6 h-6 text-blue-500" />
                <h2>{title}</h2>
            </div>
            <ul className='flex flex-col p-2 gap-4'>
                {items.map(item => (
                    <li key={item.id} className="bg-gray-500/25 p-2 flex flex-col rounded-sm">
                        <span>Задача: {item.title}</span>
                        <span>ID: {item.id}</span>
                        
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
import React from 'react';

interface InputProps {
    type: string;
    placeholder: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ placeholder, value, onChange }) => {
    return (
        <div className="w-1/4">
            <input
                type='text'
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="border border-gray-300/50 px-4 py-2 w-full rounded-3xl bg-gray-500/50" 
            />
        </div>
    );
};

export default Input;
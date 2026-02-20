
import React, { TextareaHTMLAttributes } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
}

export const Textarea: React.FC<TextareaProps> = ({
    label,
    error,
    id,
    className = '',
    ...props
}) => {
    return (
        <div className={`space-y-1 ${className}`}>
            {label && (
                <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-300 pointer-events-none">
                    {label}
                </label>
            )}
            <textarea
                id={id}
                className={`
                    block w-full rounded-lg border-gray-300 bg-white shadow-sm
                    text-gray-900 placeholder:text-gray-400
                    focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
                    disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500
                    transition-colors duration-200 ease-in-out
                    ${error ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''}
                    py-2 px-3 sm:text-sm
                `}
                {...props}
            />
            {error && (
                <p className="mt-1 text-sm text-red-600 animate-in slide-in-from-top-1">
                    {error}
                </p>
            )}
        </div>
    );
};

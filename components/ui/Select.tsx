
import React, { SelectHTMLAttributes, ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    error?: string;
    options?: { value: string; label: string }[];
    placeholder?: string;
}

export const Select: React.FC<SelectProps> = ({
    label,
    error,
    options = [],
    placeholder,
    id,
    className = '',
    children,
    ...props
}) => {
    return (
        <div className={`space-y-1 ${className}`}>
            {label && (
                <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-300 pointer-events-none">
                    {label}
                </label>
            )}
            <div className="relative">
                <select
                    id={id}
                    className={`
                        block w-full appearance-none rounded-lg border-gray-300 bg-white dark:bg-gray-800 border dark:border-gray-700 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm shadow-sm
                        transition-colors duration-200 ease-in-out
                        ${error ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''}
                    `}
                    {...props}
                >
                    {placeholder && (
                        <option value="" disabled selected hidden>
                            {placeholder}
                        </option>
                    )}
                    {options.length > 0 ? (
                        options.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))
                    ) : (
                        children
                    )}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500 dark:text-gray-400">
                    <ChevronDown className="h-4 w-4" aria-hidden="true" />
                </div>
            </div>
            {error && (
                <p className="mt-2 text-sm text-red-600 animate-in slide-in-from-top-1">
                    {error}
                </p>
            )}
        </div>
    );
};


import React, { InputHTMLAttributes, useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    leftIcon?: React.ReactNode;
    type?: string; // override
}

export const Input: React.FC<InputProps> = ({
    label,
    error,
    leftIcon,
    type = 'text',
    id,
    className = '',
    ...props
}) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === 'password';

    const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

    return (
        <div className={`space-y-1 ${className}`}>
            {label && (
                <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-300 pointer-events-none">
                    {label}
                </label>
            )}
            <div className="relative group">
                {/* Left Icon */}
                {leftIcon && (
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-500 transition-colors">
                        {leftIcon}
                    </div>
                )}

                <input
                    id={id}
                    type={inputType}
                    className={`
                        block w-full rounded-lg border-gray-300 bg-white shadow-sm
                        text-gray-900 placeholder:text-gray-400
                        focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
                        disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500
                        transition-colors duration-200 ease-in-out
                        ${leftIcon ? 'pl-10' : 'pl-3'}
                        ${isPassword ? 'pr-10' : 'pr-3'}
                        ${error ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''}
                        py-2.5 sm:text-sm
                    `}
                    {...props}
                />

                {/* Password Toggle */}
                {isPassword && (
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none"
                    >
                        {showPassword ? (
                            <EyeOff className="h-5 w-5" aria-hidden="true" />
                        ) : (
                            <Eye className="h-5 w-5" aria-hidden="true" />
                        )}
                    </button>
                )}
            </div>

            {/* Error Message */}
            {error && (
                <p className="mt-1 text-sm text-red-600 animate-in slide-in-from-top-1">
                    {error}
                </p>
            )}
        </div>
    );
};

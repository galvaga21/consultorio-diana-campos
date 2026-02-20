
import React, { ReactNode } from 'react';
import { Loader2 } from 'lucide-react';

interface TableProps {
    columns: { header: string; cell: (item: any) => ReactNode; width?: string; align?: 'left' | 'center' | 'right' }[];
    data: any[];
    isLoading?: boolean;
    emptyText?: string;
    actionColumn?: { header: string; cell: (item: any) => ReactNode; width?: string; align?: 'left' | 'center' | 'right' };
}

export const Table: React.FC<TableProps> = ({ columns, data, isLoading, emptyText = "No hay datos disponibles.", actionColumn }) => {

    // Combine columns if action column present
    const allColumns = actionColumn ? [...columns, actionColumn] : columns;

    return (
        <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
            <table className="min-w-full divide-y divide-gray-100 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-900/50">
                    <tr>
                        {allColumns.map((col, idx) => (
                            <th
                                key={idx}
                                scope="col"
                                className={`px-6 py-3 text-${col.align === 'center' ? 'center' : col.align === 'right' ? 'right' : 'left'} text-xs font-medium text-gray-500 uppercase tracking-wider ${col.width ? `w-[${col.width}]` : ''}`}
                            >
                                {col.header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-100 dark:divide-gray-700">
                    {isLoading ? (
                        <tr>
                            <td colSpan={allColumns.length} className="px-6 py-12 text-center">
                                <Loader2 className="w-8 h-8 text-blue-500 animate-spin mx-auto mb-2" />
                                <span className="text-gray-500 text-sm">Cargando datos...</span>
                            </td>
                        </tr>
                    ) : data && data.length > 0 ? (
                        data.map((item, rowIndex) => (
                            <tr key={item.id || rowIndex} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-150">
                                {allColumns.map((col, colIndex) => (
                                    <td
                                        key={colIndex}
                                        className={`px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300 text-${col.align === 'center' ? 'center' : col.align === 'right' ? 'right' : 'left'}`}
                                    >
                                        {col.cell(item)}
                                    </td>
                                ))}
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={allColumns.length} className="px-6 py-12 text-center text-gray-500">
                                {emptyText}
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

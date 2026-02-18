
import React from 'react';
import { Payment } from '../../lib/types';
import { CheckCircle, Clock } from 'lucide-react';

interface FinanceTableProps {
    payments: Payment[];
}

export const FinanceTable: React.FC<FinanceTableProps> = ({ payments }) => {
    return (
        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm bg-white">
            <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b border-gray-100">
                    <tr>
                        <th scope="col" className="px-6 py-3 font-semibold">Fecha</th>
                        <th scope="col" className="px-6 py-3 font-semibold">Paciente</th>
                        <th scope="col" className="px-6 py-3 font-semibold">Concepto</th>
                        <th scope="col" className="px-6 py-3 font-semibold text-right">Monto</th>
                        <th scope="col" className="px-6 py-3 font-semibold text-center">Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {payments.map((payment) => (
                        <tr key={payment.id} className="bg-white border-b border-gray-50 hover:bg-blue-50/50 transition-colors">
                            <td className="px-6 py-4 whitespace-nowrap">{payment.date}</td>
                            <td className="px-6 py-4 font-medium text-gray-900">{payment.patientName}</td>
                            <td className="px-6 py-4">{payment.concept}</td>
                            <td className="px-6 py-4 text-right font-medium text-gray-900">
                                ${payment.amount.toLocaleString('es-MX', { minimumFractionDigits: 2 })}
                            </td>
                            <td className="px-6 py-4 text-center">
                                {payment.status === 'Pagado' ? (
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">
                                        <CheckCircle className="w-3.5 h-3.5" /> Pagado
                                    </span>
                                ) : (
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 border border-yellow-200">
                                        <Clock className="w-3.5 h-3.5" /> Pendiente
                                    </span>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};


import React from 'react';
import { Appointment } from '../../lib/types';

interface AppointmentCardProps {
    appointment: Appointment;
}

const statusStyles = {
    Confirmada: 'bg-green-100 text-green-800 border-green-200',
    Pendiente: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    Cancelada: 'bg-red-100 text-red-800 border-red-200',
    Completada: 'bg-gray-100 text-gray-800 border-gray-200',
};

export const AppointmentCard: React.FC<AppointmentCardProps> = ({ appointment }) => {
    return (
        <div className="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow p-3 flex flex-col gap-2">
            <div className="flex justify-between items-start">
                <h4 className="font-semibold text-gray-900 text-sm truncate">{appointment.patientName}</h4>
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${statusStyles[appointment.status]}`}>
                    {appointment.status}
                </span>
            </div>
            <div className="flex items-center justify-between text-xs text-gray-500">
                <span className="flex items-center gap-1">
                    {appointment.modality === 'Virtual' ? (
                        <span className="text-blue-600">📹 Virtual</span>
                    ) : (
                        <span className="text-emerald-600">🏥 Presencial</span>
                    )}
                </span>
                <span>{new Date(appointment.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
            </div>
        </div>
    );
};

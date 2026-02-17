
import Image from 'next/image';
import React from 'react';
import { Patient } from '../lib/types';
import { Mail, Phone, Calendar, Briefcase, FileText } from 'lucide-react';

interface PatientProfileProps {
    patient: Patient;
}

export const PatientProfileCard: React.FC<PatientProfileProps> = ({ patient }) => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden sticky top-24">
            <div className="h-32 bg-gradient-to-r from-blue-500 to-emerald-400"></div>
            <div className="px-6 pb-6">
                <div className="relative flex justify-center -mt-16 mb-4">
                    <Image
                        src={patient.photoUrl || 'https://via.placeholder.com/150'}
                        alt={patient.fullName}
                        width={128}
                        height={128}
                        className="w-32 h-32 rounded-full border-4 border-white shadow-md object-cover"
                    />
                </div>
                <div className="text-center mb-6">
                    <h2 className="text-xl font-bold text-gray-900">{patient.fullName}</h2>
                    <p className="text-sm text-gray-500">{patient.occupation}</p>
                </div>

                <div className="space-y-4">
                    <div className="flex items-center text-sm text-gray-600">
                        <Mail className="w-4 h-4 mr-3 text-gray-400" />
                        {patient.email}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                        <Phone className="w-4 h-4 mr-3 text-gray-400" />
                        {patient.phone}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="w-4 h-4 mr-3 text-gray-400" />
                        {patient.dateOfBirth}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                        <Briefcase className="w-4 h-4 mr-3 text-gray-400" />
                        {patient.occupation}
                    </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                    <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                        <FileText className="w-4 h-4 mr-2" />
                        Antecedentes
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        {patient.background || 'Sin antecedentes registrados.'}
                    </p>
                </div>
            </div>
        </div>
    );
};

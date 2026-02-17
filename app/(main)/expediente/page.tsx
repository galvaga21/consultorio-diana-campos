
import { mockPatients, mockNotes } from '../../../lib/mockData';
import { PatientProfileCard } from '../../../components/PatientProfileCard';
import { ClinicalNotes } from '../../../components/ClinicalNotes';

export default function ExpedientePage() {
    const patient = mockPatients[0]; // Demo patient
    const patientNotes = mockNotes.filter(n => n.patientId === patient.id);

    return (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Columna Izquierda (30%) */}
            <div className="md:col-span-4 lg:col-span-3">
                <PatientProfileCard patient={patient} />
            </div>

            {/* Columna Derecha (70%) */}
            <div className="md:col-span-8 lg:col-span-9 space-y-6">
                <div className="flex bg-white rounded-lg p-4 shadow-sm items-center justify-between border-b border-gray-100 sticky top-0 z-10">
                    <h1 className="text-2xl font-bold text-gray-900">Expediente Clínico</h1>
                    <div className="text-sm text-gray-500">Última visita: {new Date().toLocaleDateString()}</div>
                </div>
                <ClinicalNotes notes={patientNotes} />
            </div>
        </div>
    );
}

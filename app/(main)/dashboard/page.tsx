
import { mockAppointments } from '../../../lib/mockData';
import { AppointmentCard } from '../../../components/AppointmentCard';

const DAYS = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Agenda Semanal</h1>
        <div className="text-sm text-gray-500">Octubre 23 - Octubre 29, 2023</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-7 gap-4 min-h-[600px]">
        {DAYS.map((day, index) => (
          <div key={day} className="flex flex-col gap-3 min-w-[200px] md:min-w-0">
            <div className="text-center font-medium text-gray-500 py-2 bg-gray-100 rounded-lg">
              {day}
            </div>
            <div className="flex-1 bg-gray-50/50 rounded-lg p-2 space-y-3 border border-dashed border-gray-200">
              {/* Only show appointments for specific mock days to demonstrate */}
              {index === 1 && ( // Martes
                mockAppointments.filter(a => a.date.includes('2023-10-24')).map(appt => (
                  <AppointmentCard key={appt.id} appointment={appt} />
                ))
              )}
              {index === 2 && ( // Miércoles
                mockAppointments.filter(a => a.date.includes('2023-10-25')).map(appt => (
                  <AppointmentCard key={appt.id} appointment={appt} />
                ))
              )}
              {/* Fallback for empty days */}
              {![1, 2].includes(index) && (
                <div className="h-full flex items-center justify-center text-xs text-gray-400 italic">
                  No hay citas
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

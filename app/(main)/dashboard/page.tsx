
"use client";

import { useAuth } from '../../../context/AuthContext';
import { mockAppointments } from '../../../lib/mockData';
import { AppointmentCard } from '../../../components/AppointmentCard';

const DAYS = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

export default function Dashboard() {
  const { user } = useAuth();

  if (!user) return null; // Or skeleton

  // --- VISTA PSICÓLOGA ---
  if (user.role === 'psychologist') {
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
                {/* Simplified mock logic for demo */}
                {index === 1 && ( // Martes
                  mockAppointments.filter(a => a.date.includes('2023-10-24')).map(appt => (
                    <AppointmentCard key={appt.id} appointment={appt} />
                  ))
                )}
                {index === 2 && ( // Miércoles
                  mockAppointments.filter(a => a.date.includes('2023-10-25')).map((appt, i) => (
                    <AppointmentCard key={`${appt.id}-${i}`} appointment={appt} />
                  ))
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // --- VISTA PACIENTE ---
  if (user.role === 'patient') {
    // Filter appointments for this fake patient
    const myAppointments = mockAppointments.filter(a => a.patientId === '1' || a.modality === 'Virtual'); // Mock logical filter

    return (
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Hola, {user.name} 👋</h1>
          <p className="text-gray-500">Aquí tienes el resumen de tu tratamiento.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Próxima Cita */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">Próxima Sesión</h3>
              <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full font-medium">Confirmada</span>
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-1">24</div>
            <div className="text-lg text-gray-500 mb-4">Octubre, 10:00 AM</div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              Modalidad Virtual
            </div>
            <button className="mt-6 w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors">
              Unirse a Videollamada
            </button>
          </div>

          {/* Tarea Pendiente */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <h3 className="font-semibold text-gray-900 mb-4">Tareas de la Semana</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 rounded text-blue-600 focus:ring-blue-500" />
                <span className="text-sm text-gray-600 line-through">Registro de sueño (Lunes)</span>
              </li>
              <li className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 rounded text-blue-600 focus:ring-blue-500" />
                <span className="text-sm text-gray-600">Ejercicio de respiración 5 min</span>
              </li>
              <li className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 rounded text-blue-600 focus:ring-blue-500" />
                <span className="text-sm text-gray-600">Leer material de lectura</span>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Historial de Citas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {myAppointments.map(appt => (
              <AppointmentCard key={appt.id} appointment={appt} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // --- VISTA ADMIN ---
  if (user.role === 'admin') {
    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-900">Panel de Administración</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-gray-500 text-sm font-medium uppercase">Usuarios Totales</h3>
            <p className="text-3xl font-bold text-gray-900 mt-2">1,234</p>
            <span className="text-green-600 text-sm font-medium flex items-center mt-2">
              ↑ 12% vs mes pasado
            </span>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-gray-500 text-sm font-medium uppercase">Ingresos Mensuales</h3>
            <p className="text-3xl font-bold text-gray-900 mt-2">$45,600</p>
            <span className="text-green-600 text-sm font-medium flex items-center mt-2">
              ↑ 8% vs mes pasado
            </span>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-gray-500 text-sm font-medium uppercase">Citas Completadas</h3>
            <p className="text-3xl font-bold text-gray-900 mt-2">89</p>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <h3 className="text-yellow-800 font-semibold mb-2">Sistema</h3>
          <p className="text-yellow-700 text-sm">Versión 1.0.0 - Todos los servicios operativos.</p>
        </div>
      </div>
    )
  }

  return <div>Rol no reconocido</div>;
}

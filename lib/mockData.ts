
import { Appointment, Patient, ClinicalNote, Payment } from './types';
import { Calendar, FileText, Home, PieChart, Settings, Users } from 'lucide-react';

export const mockPatients: Patient[] = [
    {
        id: '1',
        fullName: 'Ana García',
        email: 'ana.garcia@example.com',
        phone: '55-1234-5678',
        dateOfBirth: '1990-05-15',
        modality: 'Virtual',
        photoUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        background: 'Paciente refiere ansiedad generalizada.',
        occupation: 'Diseñadora Gráfica',
    },
    {
        id: '2',
        fullName: 'Carlos Rodriguez',
        email: 'carlos.r@example.com',
        phone: '55-8765-4321',
        dateOfBirth: '1985-11-20',
        modality: 'Presencial',
        photoUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        background: 'Trastorno depresivo leve.',
        occupation: 'Ingeniero Civil',
    },
    {
        id: '3',
        fullName: 'Lucía Fernández',
        email: 'lucia.f@example.com',
        phone: '55-9876-1234',
        dateOfBirth: '1995-02-10',
        modality: 'Virtual',
        photoUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
];

export const mockAppointments: Appointment[] = [
    {
        id: 'appt-1',
        patientId: '1',
        patientName: 'Ana García',
        date: '2023-10-24T10:00:00', // Today + 1 day
        durationMinutes: 50,
        modality: 'Virtual',
        status: 'Confirmada',
    },
    {
        id: 'appt-2',
        patientId: '2',
        patientName: 'Carlos Rodriguez',
        date: '2023-10-24T12:00:00',
        durationMinutes: 50,
        modality: 'Presencial',
        status: 'Pendiente',
    },
    {
        id: 'appt-3',
        patientId: '3',
        patientName: 'Lucía Fernández',
        date: '2023-10-25T16:00:00',
        durationMinutes: 50,
        modality: 'Virtual',
        status: 'Confirmada',
    },
];

export const mockNotes: ClinicalNote[] = [
    {
        id: 'note-1',
        patientId: '1',
        date: '2023-10-10T10:00:00',
        content: '<p>Paciente refiere mejoría en el sueño. Continuamos con técnicas de respiración.</p>',
        type: 'Evolution',
    },
    {
        id: 'note-2',
        patientId: '1',
        date: '2023-10-17T10:00:00',
        content: '<p>Episodio de ansiedad leve relacionado con el trabajo. Se exploran desencadenantes.</p>',
        type: 'Evolution',
    },
];

export const mockPayments: Payment[] = [
    {
        id: 'pay-1',
        patientId: '1',
        patientName: 'Ana García',
        date: '2023-10-10',
        concept: 'Consulta Psicológica',
        amount: 800,
        status: 'Pagado',
        paymentMethod: 'Transferencia',
    },
    {
        id: 'pay-2',
        patientId: '2',
        patientName: 'Carlos Rodriguez',
        date: '2023-10-17',
        concept: 'Consulta Psicológica',
        amount: 800,
        status: 'Pendiente',
    },
];

export const NAV_ITEMS = [
    { label: 'Inicio', href: '/dashboard', icon: Home },
    { label: 'Mis Pacientes', href: '/expediente', icon: Users }, // Redirects to folder/file view in reality
    { label: 'Calendario', href: '/dashboard', icon: Calendar },
    { label: 'Archivos', href: '/archivos', icon: FileText },
    { label: 'Finanzas', href: '/finanzas', icon: PieChart },
    { label: 'Configuración', href: '/configuracion', icon: Settings },
];


// Basic types for the application

export interface Patient {
    id: string;
    fullName: string;
    email: string;
    phone: string;
    dateOfBirth: string;
    photoUrl?: string;
    modality: 'Virtual' | 'Presencial';
    // Additional info for file view
    background?: string;
    address?: string;
    occupation?: string;
    medicalHistory?: string;
}

export interface ClinicalNote {
    id: string;
    patientId: string;
    date: string; // ISO string 
    content: string; // HTML if rich text
    type: 'Evolution' | 'Initial';
}

export interface Appointment {
    id: string;
    patientId: string;
    patientName: string; // Denormalized for simpler display
    date: string; // ISO string
    durationMinutes: number;
    modality: 'Virtual' | 'Presencial';
    status: 'Confirmada' | 'Pendiente' | 'Cancelada' | 'Completada';
    notes?: string;
}

export interface Payment {
    id: string;
    patientId: string;
    patientName: string; // Denormalized
    date: string;
    concept: string;
    amount: number;
    status: 'Pagado' | 'Pendiente';
    paymentMethod?: 'Efectivo' | 'Transferencia' | 'Tarjeta';
}

export type NavItem = {
    label: string;
    href: string;
    icon: React.ComponentType;
};

// Basic types for the application

export type UserRole = 'admin' | 'psychologist' | 'patient';

export interface Role {
    id: UserRole;
    nombre_rol: string;
    descripcion: string;
    area_id?: string;
}

export interface Area {
    id: string;
    nombre_area: string;
    descripcion: string;
}

export interface UserProfile {
    uid: string;
    nombres: string;
    apellidos: string;
    email: string;
    username?: string;
    celular?: string;
    sexo?: 'Masculino' | 'Femenino' | 'Otro';
    pais?: string;
    direccion?: string;
    tipo_documento?: string;
    numero_documento?: string;
    foto_perfil?: string;
    rol_id: UserRole;
    createdAt?: any; // Firebase Timestamp
    updatedAt?: any; // Firebase Timestamp

    // Compatibility with existing components (computed in context)
    name?: string;
    role?: UserRole; // Alias for rol_id
    id?: string; // Alias for uid
    photoUrl?: string; // Alias for foto_perfil
}

// Re-export User as UserProfile for backward compatibility, 
// but components should eventually migrate to use UserProfile fields.
export type User = UserProfile;

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
    icon: React.ComponentType<any>;
    roles?: UserRole[]; // Optional, if not present assumes all roles
};

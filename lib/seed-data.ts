
import { createArea, createRole } from "./admin-utils";

export async function seedDatabase() {
    console.log("🌱 Iniciando siembra de datos...");

    // 1. Crear Áreas para un Consultorio Psicológico
    const areas = [
        {
            id: 'area_general', // ID fijo para referencia fácil (o dejar auto)
            nombre_area: "Gerencia General",
            descripcion: "Dirección estratégica y toma de decisiones del consultorio."
        },
        {
            id: 'area_clinica',
            nombre_area: "Consultorio Clínico",
            descripcion: "Espacio de atención terapéutica a pacientes."
        },
        {
            id: 'area_ti',
            nombre_area: "Departamento TI",
            descripcion: "Soporte técnico, desarrollo web y mantenimiento de plataforma."
        }
    ];

    const createdAreaIds: Record<string, string> = {};

    for (const area of areas) {
        try {
            // Usamos createArea que ahora soporta ID opcional
            const id = await createArea(area);
            createdAreaIds[area.id] = id;
            console.log(`✅ Área creada: ${area.nombre_area} (${id})`);
        } catch (error) {
            console.error(`❌ Error creando área ${area.nombre_area}:`, error);
        }
    }

    // 2. Crear Roles vinculados a las Áreas
    const roles = [
        {
            id: 'admin', // System Role (Obligatorio mantener este ID para compatibilidad)
            nombre_rol: "Administrador del Sistema",
            descripcion: "Acceso total a todas las funciones del sistema.",
            area_id: createdAreaIds['area_general']
        },
        {
            id: 'psychologist', // System Role
            nombre_rol: "Psicóloga Clínica",
            descripcion: "Atención a pacientes, gestión de agenda y expedientes.",
            area_id: createdAreaIds['area_clinica']
        },
        {
            id: 'patient', // System Role
            nombre_rol: "Paciente",
            descripcion: "Usuario estándar que recibe servicios terapéuticos.",
            area_id: createdAreaIds['area_clinica'] // Podría ser recepción o null
        },
        {
            // Rol personalizado: Desarrollador
            // No pasamos ID fijo para que genere uno auto (o pasamos uno si queremos)
            id: 'developer',
            nombre_rol: "Desarrollador de Software",
            descripcion: "Encargado de actualizaciones, código y base de datos.",
            area_id: createdAreaIds['area_ti']
        }
    ];

    for (const role of roles) {
        try {
            await createRole(role);
            console.log(`✅ Rol creado: ${role.nombre_rol}`);
        } catch (error) {
            console.error(`❌ Error creando rol ${role.nombre_rol}:`, error);
        }
    }

    return "Siembra de datos completada exitosamente.";
}


import { db, auth } from "./firebase";
import { doc, setDoc, getDoc, updateDoc, Timestamp, collection, getDocs } from "firebase/firestore";
import { UserProfile, UserRole } from "./types";

// --- Collection References ---
const USERS_COLLECTION = "usuarios";
const ROLES_COLLECTION = "roles";
const AREAS_COLLECTION = "areas";

// --- User Management ---

export async function createUserProfile(uid: string, data: Partial<UserProfile>) {
    const userRef = doc(db, USERS_COLLECTION, uid);

    // Ensure all required fields for Profile (some might be empty initially if not provided)
    const profileData: Partial<UserProfile> = {
        uid: uid,
        nombres: data.nombres || "",
        apellidos: data.apellidos || "",
        email: data.email || "",
        rol_id: data.rol_id || "patient",
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now(),
        ...data // Override with specific data
    };

    // Remove undefined values to avoid Firestore errors
    Object.keys(profileData).forEach(key => profileData[key as keyof UserProfile] === undefined && delete profileData[key as keyof UserProfile]);

    await setDoc(userRef, profileData, { merge: true });
    return profileData as UserProfile;
}

export async function getUserProfile(uid: string): Promise<UserProfile | null> {
    const userRef = doc(db, USERS_COLLECTION, uid);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
        const data = userSnap.data() as UserProfile;
        // Map Firestore data to User interface (add compatibility fields)
        return {
            ...data,
            id: data.uid,
            name: `${data.nombres} ${data.apellidos}`,
            role: data.rol_id,
            photoUrl: data.foto_perfil
        };
    }
    return null;
}

// --- Seeding / Admin Initialization ---

export async function initializeSystem() {
    // 1. Initialize Roles
    const roles: { id: UserRole; nombre_rol: string; descripcion: string }[] = [
        { id: "admin", nombre_rol: "Administrador", descripcion: "Acceso total al sistema" },
        { id: "psychologist", nombre_rol: "Psicóloga", descripcion: "Profesional de salud mental" },
        { id: "patient", nombre_rol: "Paciente", descripcion: "Usuario que recibe atención" }
    ];

    for (const role of roles) {
        const roleRef = doc(db, ROLES_COLLECTION, role.id);
        const roleSnap = await getDoc(roleRef);
        if (!roleSnap.exists()) {
            await setDoc(roleRef, role);
            console.log(`Rol creado: ${role.nombre_rol}`);
        }
    }

    // 2. Initialize Areas (Optional example)
    const areas = [
        { id: "consultorio", nombre_area: "Consultorio General", descripcion: "Atención clínica" },
        { id: "administracion", nombre_area: "Administración", descripcion: "Gestión del negocio" }
    ];

    for (const area of areas) {
        const areaRef = doc(db, AREAS_COLLECTION, area.id);
        const areaSnap = await getDoc(areaRef);
        if (!areaSnap.exists()) {
            await setDoc(areaRef, area);
            console.log(`Area creada: ${area.nombre_area}`);
        }
    }

    // ... (previous code)

    // ... (previous code)

    console.log("Sistema inicializado (Roles y Áreas verificados).");
}

/*
 * Función para crear un administrador por defecto.
 * Úsala manualmente o desde una consola de desarrollo si es necesario.
 * Nota: Esto cerrará la sesión actual si tiene éxito.
 */
import { createUserWithEmailAndPassword } from "firebase/auth";

export async function createDefaultAdmin() {
    const adminEmail = "admin@creciendojuntos.com";
    const adminPassword = "AdminPassword123!"; // Cambiar en producción

    try {
        // Intentar crear el usuario en Auth
        const userCredential = await createUserWithEmailAndPassword(auth, adminEmail, adminPassword);
        const uid = userCredential.user.uid;

        // Crear perfil con rol de admin
        await createUserProfile(uid, {
            nombres: "Administrador",
            apellidos: "Sistema",
            email: adminEmail,
            rol_id: "admin",
            foto_perfil: ""
        });

        console.log("✅ Usuario Administrador creado exitosamente.");
        console.log(`Email: ${adminEmail}`);
        console.log(`Password: ${adminPassword}`);
    } catch (error: any) {
        if (error.code === 'auth/email-already-in-use') {
            console.log("⚠️ El usuario administrador ya existe.");
        } else {
            console.error("Error creando administrador:", error);
        }
    }
}

// --- Admin Management ---

export async function getAllUsers(): Promise<UserProfile[]> {
    const querySnapshot = await getDocs(collection(db, USERS_COLLECTION));
    return querySnapshot.docs.map(doc => {
        const data = doc.data() as UserProfile;
        return {
            ...data,
            id: data.uid,
            name: `${data.nombres} ${data.apellidos}`,
            role: data.rol_id,
            photoUrl: data.foto_perfil
        };
    });
}

export async function updateUserRole(uid: string, newRoleId: UserRole) {
    const userRef = doc(db, USERS_COLLECTION, uid);
    await updateDoc(userRef, {
        rol_id: newRoleId,
        updatedAt: Timestamp.now()
    });
}


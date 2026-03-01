import { db, firebaseConfig } from "./firebase";
import { collection, getDocs, doc, setDoc, deleteDoc, updateDoc, addDoc } from "firebase/firestore";
import { initializeApp, deleteApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { createUserProfile } from "./firebase-utils";
import { Role, Area } from "./types";

// --- Users Management (Admin) ---

export async function adminCreateAuthUser(data: any, password: string) {
    // Create a temporary app to prevent the admin from being signed out
    const tempApp = initializeApp(firebaseConfig, "TempApp_" + Date.now());
    const tempAuth = getAuth(tempApp);

    try {
        const userCred = await createUserWithEmailAndPassword(tempAuth, data.email, password);
        await tempAuth.signOut();
        await deleteApp(tempApp);

        // Create the profile in the main DB
        await createUserProfile(userCred.user.uid, data);
        return userCred.user.uid;
    } catch (error) {
        await deleteApp(tempApp);
        throw error;
    }
}

export async function getRoles(): Promise<Role[]> {
    const querySnapshot = await getDocs(collection(db, "roles"));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Role));
}

export async function createRole(role: { id?: string } & Omit<Role, 'id'>) {
    if (role.id) {
        // Create with specific ID (for system roles)
        const { id, ...data } = role;
        await setDoc(doc(db, "roles", id), data);
        return id;
    } else {
        // Auto-ID
        const docRef = await addDoc(collection(db, "roles"), role);
        return docRef.id;
    }
}

export async function updateRole(id: string, role: Partial<Role>) {
    await updateDoc(doc(db, "roles", id), role);
}

export async function deleteRole(roleId: string) {
    await deleteDoc(doc(db, "roles", roleId));
}

// --- Areas Management ---

export async function getAreas(): Promise<Area[]> {
    const querySnapshot = await getDocs(collection(db, "areas"));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Area));
}

export async function createArea(area: { id?: string } & Omit<Area, 'id'>) {
    if (area.id) {
        // Create with specific ID
        const { id, ...data } = area;
        await setDoc(doc(db, "areas", id), data);
        return id;
    } else {
        const docRef = await addDoc(collection(db, "areas"), area);
        return docRef.id;
    }
}

export async function updateArea(id: string, area: Partial<Area>) {
    await updateDoc(doc(db, "areas", id), area);
}

export async function deleteArea(areaId: string) {
    await deleteDoc(doc(db, "areas", areaId));
}

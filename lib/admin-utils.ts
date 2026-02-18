
import { db } from "./firebase";
import { collection, getDocs, doc, setDoc, deleteDoc, updateDoc } from "firebase/firestore";
import { Role, Area } from "./types";

// --- Roles Management ---

export async function getRoles(): Promise<Role[]> {
    const querySnapshot = await getDocs(collection(db, "roles"));
    return querySnapshot.docs.map(doc => doc.data() as Role);
}

export async function createRole(role: Role) {
    await setDoc(doc(db, "roles", role.id), role);
}

export async function deleteRole(roleId: string) {
    await deleteDoc(doc(db, "roles", roleId));
}

// --- Areas Management ---

export async function getAreas(): Promise<Area[]> {
    const querySnapshot = await getDocs(collection(db, "areas"));
    return querySnapshot.docs.map(doc => doc.data() as Area);
}

export async function createArea(area: Area) {
    await setDoc(doc(db, "areas", area.id), area);
}

export async function deleteArea(areaId: string) {
    await deleteDoc(doc(db, "areas", areaId));
}

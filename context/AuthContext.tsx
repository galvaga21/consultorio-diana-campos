"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { User, UserProfile } from "../lib/types";
import { useRouter } from "next/navigation";
import { auth } from "../lib/firebase"; // Import auth
import { onAuthStateChanged, signOut } from "firebase/auth";
import { getUserProfile, initializeSystem } from "../lib/firebase-utils";

interface AuthContextType {
    user: UserProfile | null;
    loading: boolean;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<UserProfile | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        // Initialize system roles/areas on mount (optional, can be moved to a script)
        // initializeSystem(); // Comentado para evitar errores de permisos en landing. Ejecutar manualmente o con usuario admin.

        const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
            if (firebaseUser) {
                // Fetch user profile from Firestore
                try {
                    const profile = await getUserProfile(firebaseUser.uid);
                    if (profile) {
                        setUser(profile);
                    } else {
                        console.warn("User authenticated but no profile found in Firestore (or permissions error).");
                        setUser(null);
                    }
                } catch (error) {
                    console.error("Error fetching user profile (check Firestore permissions):", error);
                    setUser(null);
                }
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const logout = async () => {
        try {
            await signOut(auth);
            setUser(null);
            router.push("/");
        } catch (error) {
            console.error("Error logging out:", error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, loading, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

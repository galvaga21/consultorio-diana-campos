
"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { User, UserRole } from "../lib/types";
import { useRouter } from "next/navigation";

interface AuthContextType {
    user: User | null;
    loading: boolean;
    login: (role: UserRole) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    // Load from local storage on mount (simple persistence simulation)
    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedUser = localStorage.getItem("mock_user");
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            }
        }
    }, []);

    const login = async (role: UserRole) => {
        setLoading(true);
        let mockUser: User = {
            id: "admin-1",
            name: "Admin User",
            email: "admin@example.com",
            role: "admin",
        };

        if (role === "psychologist") {
            mockUser = {
                id: "doctor-1",
                name: "Dr. Diana Campos",
                email: "diana@consultorio.com",
                role: "psychologist",
                photoUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=200&auto=format&fit=crop",
            };
        } else if (role === "patient") {
            mockUser = {
                id: "patient-1",
                name: "Ana García",
                email: "ana.garcia@example.com",
                role: "patient",
                photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            };
        }

        // Simulate network delay
        setTimeout(() => {
            setUser(mockUser);
            if (typeof window !== "undefined") {
                localStorage.setItem("mock_user", JSON.stringify(mockUser));
            }
            setLoading(false);
            router.push("/dashboard");
        }, 800);
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("mock_user");
        router.push("/");
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, logout }}>
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

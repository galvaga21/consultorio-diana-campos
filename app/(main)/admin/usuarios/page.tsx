"use client";

import { UsersList } from "../../../../components/admin/UsersList";

export default function UsersPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-900">Gestión de Usuarios</h1>
            <UsersList />
        </div>
    );
}

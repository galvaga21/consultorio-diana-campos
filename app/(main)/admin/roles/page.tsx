"use client";

import { RolesList } from "../../../../components/admin/RolesList";

export default function RolesPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-900">Gestión de Roles</h1>
            <RolesList />
        </div>
    );
}

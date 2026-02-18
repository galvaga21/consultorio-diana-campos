"use client";

import { AreasList } from "../../../../components/admin/AreasList";

export default function AreasPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-900">Gestión de Áreas</h1>
            <AreasList />
        </div>
    );
}

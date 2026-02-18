
import { mockPayments } from '../../../lib/mockData';
import { FinanceTable } from '../../../components/dashboard/FinanceTable';

export default function FinanzasPage() {
    const totalPagado = mockPayments.reduce((acc, curr) => curr.status === 'Pagado' ? acc + curr.amount : acc, 0);
    const totalPendiente = mockPayments.reduce((acc, curr) => curr.status === 'Pendiente' ? acc + curr.amount : acc, 0);

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-900">Módulo de Finanzas</h1>
                <div className="space-x-4 flex">
                    <div className="bg-green-100 rounded-lg p-3 text-center min-w-[140px]">
                        <p className="text-xs text-green-700 font-medium uppercase">Ingresos Totales</p>
                        <p className="text-xl font-bold text-green-800">${totalPagado.toLocaleString('es-MX')}</p>
                    </div>
                    <div className="bg-yellow-100 rounded-lg p-3 text-center min-w-[140px]">
                        <p className="text-xs text-yellow-700 font-medium uppercase">Por Cobrar</p>
                        <p className="text-xl font-bold text-yellow-800">${totalPendiente.toLocaleString('es-MX')}</p>
                    </div>
                </div>
            </div>

            <FinanceTable payments={mockPayments} />
        </div>
    );
}

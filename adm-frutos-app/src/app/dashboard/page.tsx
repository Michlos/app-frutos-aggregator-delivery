export default function DashboardPage() {
  return (

    <div>

      <h1 className="text-3xl font-bold mb-6">
        Dashboard
      </h1>

      <div className="grid grid-cols-4 gap-4">

        <div className="border p-4 rounded">
          Total de Lojas
        </div>

        <div className="border p-4 rounded">
          Deliveries
        </div>

        <div className="border p-4 rounded">
          Usuários
        </div>

        <div className="border p-4 rounded">
          Ativos
        </div>

      </div>

    </div>
  )
}
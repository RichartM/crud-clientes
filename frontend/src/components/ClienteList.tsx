import './ClienteList.css'

interface Cliente {
  _id: string
  nombre: string
  email: string
  telefono: string
  direccion: string
  estado: string
}

interface ClienteListProps {
  clientes: Cliente[]
  onEdit: (cliente: Cliente) => void
  onDelete: (id: string) => void
}

export default function ClienteList({ clientes, onEdit, onDelete }: ClienteListProps) {
  if (clientes.length === 0) {
    return (
      <div className="empty-state">
        <p>📭 No hay clientes registrados</p>
        <p className="subtitle">Crea tu primer cliente para comenzar</p>
      </div>
    )
  }

  return (
    <div className="cliente-list">
      <h2 className="list-title">📊 Lista de Clientes ({clientes.length})</h2>
      
      <div className="table-responsive">
        <table className="clients-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Teléfono</th>
              <th>Dirección</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente) => (
              <tr key={cliente._id}>
                <td><strong>{cliente.nombre}</strong></td>
                <td>{cliente.email}</td>
                <td>{cliente.telefono}</td>
                <td>{cliente.direccion}</td>
                <td>
                  <span className={`badge badge-${cliente.estado}`}>
                    {cliente.estado}
                  </span>
                </td>
                <td>
                  <div className="actions">
                    <button
                      className="btn-edit"
                      onClick={() => onEdit(cliente)}
                      title="Editar"
                    >
                      ✏️
                    </button>
                    <button
                      className="btn-delete"
                      onClick={() => onDelete(cliente._id)}
                      title="Eliminar"
                    >
                      🗑️
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

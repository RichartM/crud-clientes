import { useState, useEffect } from 'react'
import axios from 'axios'
import ClienteList from './components/ClienteList'
import ClienteForm from './components/ClienteForm'
import './App.css'

interface Cliente {
  _id: string
  nombre: string
  email: string
  telefono: string
  direccion: string
  estado: string
}

function App() {
  const [clientes, setClientes] = useState<Cliente[]>([])
  const [editingCliente, setEditingCliente] = useState<Cliente | null>(null)
  const [loading, setLoading] = useState(false)
  const [showForm, setShowForm] = useState(false)

  const API_URL = 'http://localhost:3001/api/clientes'

  // Cargar lista de clientes
  const loadClientes = async () => {
    setLoading(true)
    try {
      const response = await axios.get(API_URL)
      setClientes(response.data)
    } catch (error) {
      console.error('Error al cargar clientes:', error)
      alert('Error al cargar los clientes')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadClientes()
  }, [])

  // Crear nuevo cliente
  const handleCreate = async (formData: Omit<Cliente, '_id'>) => {
    try {
      const response = await axios.post(API_URL, formData)
      setClientes([...clientes, response.data])
      setShowForm(false)
      alert('✅ Cliente creado exitosamente')
    } catch (error) {
      console.error('Error al crear cliente:', error)
      alert('Error al crear el cliente')
    }
  }

  // Actualizar cliente
  const handleUpdate = async (id: string, formData: Omit<Cliente, '_id'>) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, formData)
      setClientes(clientes.map(c => c._id === id ? response.data : c))
      setEditingCliente(null)
      setShowForm(false)
      alert('✅ Cliente actualizado exitosamente')
    } catch (error) {
      console.error('Error al actualizar cliente:', error)
      alert('Error al actualizar el cliente')
    }
  }

  // Eliminar cliente
  const handleDelete = async (id: string) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este cliente?')) {
      try {
        await axios.delete(`${API_URL}/${id}`)
        setClientes(clientes.filter(c => c._id !== id))
        alert('✅ Cliente eliminado exitosamente')
      } catch (error) {
        console.error('Error al eliminar cliente:', error)
        alert('Error al eliminar el cliente')
      }
    }
  }

  // Editar cliente
  const handleEdit = (cliente: Cliente) => {
    setEditingCliente(cliente)
    setShowForm(true)
  }

  const handleCancel = () => {
    setEditingCliente(null)
    setShowForm(false)
  }

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <h1>📋 Gestión de Clientes</h1>
          <p>Sistema CRUD para administrar clientes</p>
        </div>
      </header>

      <main className="main-container">
        <div className="controls">
          <button 
            className="btn-create"
            onClick={() => {
              setEditingCliente(null)
              setShowForm(!showForm)
            }}
          >
            {showForm ? '❌ Cancelar' : '➕ Nuevo Cliente'}
          </button>
          <button 
            className="btn-refresh"
            onClick={loadClientes}
            disabled={loading}
          >
            {loading ? '⏳ Cargando...' : '🔄 Recargar'}
          </button>
        </div>

        {showForm && (
          <ClienteForm
            cliente={editingCliente}
            onSubmit={editingCliente ? 
              (data) => handleUpdate(editingCliente._id, data) : 
              handleCreate
            }
            onCancel={handleCancel}
          />
        )}

        {loading && <p className="loading">⏳ Cargando clientes...</p>}

        {!loading && (
          <ClienteList
            clientes={clientes}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}
      </main>
    </div>
  )
}

export default App

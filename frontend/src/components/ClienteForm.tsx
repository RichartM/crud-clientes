import { useState } from 'react'
import './ClienteForm.css'

interface Cliente {
  _id: string
  nombre: string
  email: string
  telefono: string
  direccion: string
  estado: string
}

interface ClienteFormProps {
  cliente: Cliente | null
  onSubmit: (formData: Omit<Cliente, '_id'>) => void
  onCancel: () => void
}

export default function ClienteForm({ cliente, onSubmit, onCancel }: ClienteFormProps) {
  const [formData, setFormData] = useState({
    nombre: cliente?.nombre || '',
    email: cliente?.email || '',
    telefono: cliente?.telefono || '',
    direccion: cliente?.direccion || '',
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido'
    }
    if (!formData.telefono.trim()) {
      newErrors.telefono = 'El teléfono es requerido'
    }
    if (!formData.direccion.trim()) {
      newErrors.direccion = 'La dirección es requerida'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      onSubmit(formData)
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        direccion: '',
      })
    }
  }

  return (
    <form className="cliente-form" onSubmit={handleSubmit}>
      <div className="form-header">
        <h2>{cliente ? '✏️ Editar Cliente' : '➕ Nuevo Cliente'}</h2>
      </div>

      <div className="form-group">
        <label htmlFor="nombre">Nombre *</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          placeholder="Ingrese el nombre del cliente"
        />
        {errors.nombre && <span className="error">{errors.nombre}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email *</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="correo@ejemplo.com"
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="telefono">Teléfono *</label>
        <input
          type="tel"
          id="telefono"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          placeholder="+57 3001234567"
        />
        {errors.telefono && <span className="error">{errors.telefono}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="direccion">Dirección *</label>
        <input
          type="text"
          id="direccion"
          name="direccion"
          value={formData.direccion}
          onChange={handleChange}
          placeholder="Calle 123 #45-67"
        />
        {errors.direccion && <span className="error">{errors.direccion}</span>}
      </div>

      <div className="form-actions">
        <button type="submit" className="btn-submit">
          {cliente ? '💾 Actualizar' : '💾 Guardar'}
        </button>
        <button type="button" className="btn-cancel" onClick={onCancel}>
          ❌ Cancelar
        </button>
      </div>
    </form>
  )
}

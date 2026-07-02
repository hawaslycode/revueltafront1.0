import React from 'react';

export default function ProductCard({ producto }) {
  return (
    <div style={{
      border: '1px solid var(--color-line)',
      borderRadius: '8px',
      padding: '16px',
      backgroundColor: 'var(--color-paper2)',
      maxWidth: '250px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
    }}>

      <h3 style={{ color: 'var(--color-pine)' }}>{producto.nombre}</h3>
      <p style={{ color: 'var(--color-ink)' }}>{producto.descripcion}</p>
      
      <span style={{
        backgroundColor: 'var(--color-marigold)',
        color: 'var(--color-ink)',
        padding: '4px 8px',
        borderRadius: '4px',
        fontWeight: 'bold'
      }}>
        
        ${producto.precio}
      </span>
    </div>
  );
}
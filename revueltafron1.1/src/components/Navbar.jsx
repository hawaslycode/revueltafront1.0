import React from 'react';

export default function Navbar() {

  return (
    <nav style={{
      backgroundColor: 'var(--color-pine)',
      color: 'var(--color-paper)',
      padding: '1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'

    }}>
      <h2>Revuelta GCO</h2>
      
      <ul>
        <li style={{ listStyle: 'none', display: 'inline', margin: '0 10px' }}>Inicio</li>
        <li style={{ listStyle: 'none', display: 'inline', margin: '0 10px' }}>Productos</li>
        <li style={{ listStyle: 'none', display: 'inline', margin: '0 10px' }}>Publicar</li>
        <li style={{ listStyle: 'none', display: 'inline', margin: '0 10px' }}>Envios</li>
        <li style={{ listStyle: 'none', display: 'inline', margin: '0 10px' }}>Intercambiar</li>
        <li style={{ listStyle: 'none', display: 'inline', margin: '0 10px' }}>Nosotros</li>


      </ul>
    </nav>
  );
}
import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: 'var(--color-pine)',
      color: 'var(--color-paper)',
      padding: '40px 20px',
      marginTop: 'auto',
      borderTop: '2px solid var(--color-clay)',
      fontFamily: 'var(--font-body)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'between',
        gap: '30px'
      }}>
        <div style={{ flex: '1 1 300px' }}>
          <h3 style={{ 
            color: 'var(--color-marigold)', 
            margin: '0 0 12px 0',
            fontFamily: 'var(--font-mono)' 
          }}>
            REVUELTA
          </h3>
          <p style={{ fontSize: '14px', lineHeight: '1.6', opacity: 0.85 }}>
            Tu y tu ropa cambiando cada dia con nosotros.
          </p>
        </div>

        <div style={{ flex: '1 1 200px' }}>
          <h4 style={{ color: 'var(--color-paper2)', margin: '0 0 12px 0', fontSize: '16px' }}>
            Enlaces
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '14px' }}>
            <li style={{ marginBottom: '8px' }}>
              <a href="#productos" style={linkStyle}>Productos</a>
            </li>
            <li style={{ marginBottom: '8px' }}>
              <a href="#nosotros" style={linkStyle}>Nosotros</a>
            </li>
            <li style={{ marginBottom: '8px' }}>
              <a href="#contacto" style={linkStyle}>Contacto</a>
            </li>
          </ul>
        </div>
      </div>

      <div style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        marginTop: '30px',
        paddingTop: '20px',
        textAlign: 'center',
        fontSize: '12px',
        opacity: 0.7,
        fontFamily: 'var(--font-mono)'
      }}>
        <p>&copy; {new Date().getFullYear()} Revuelta. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

// Estilo reutilizable para los enlaces interactivos
const linkStyle = {
  color: 'var(--color-paper2)',
  textDecoration: 'none',
  transition: 'color 0.2s ease',
  cursor: 'pointer'
};
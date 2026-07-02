import React from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
import './App.css';

function App() {
  const listadoProductos = [
    { id: 1, nombre: 'Gorra', precio: 1500, descripcion: 'Dias soleados' },
    { id: 2, nombre: 'buzo', precio: 3200, descripcion: 'Ideal para el uso diario' },
    { id: 3, nombre: 'Camisa', precio: 5000, descripcion: 'Ideal para el verano.' }
  ];

  return (
    
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />

      <main style={{ padding: '20px', flex: '1' }}>
        
        <h1 style={{ color: 'var(--color-pine)' }}>INICIO REVUELTA</h1>
        <h2 style={{ color: 'var(--color-pine)' }}>Catálogo Revuelta</h2>

        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginTop: '20px' }}>
          {
            listadoProductos.map((prod) => (
              <ProductCard key={prod.id} producto={prod} />
            ))
          }
        </div>

        <h2 style={{ color: 'var(--color-pine)' }}>Marketplace y Transacciones</h2>
        <h2 style={{ color: 'var(--color-pine)' }}>Logística y Distribución</h2>
        <h2 style={{ color: 'var(--color-pine)' }}>Mercadeo</h2>
        <h2 style={{ color: 'var(--color-pine)' }}>Comunidad</h2>
      </main>

      <Footer />
    </div>
  );
}

export default App;
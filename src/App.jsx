import React, { useState } from 'react';

function App() {
  // Crear un estado llamado miTexto
  const [miTexto, setMiTexto] = useState('');

  // Crear función handleText
  const handleText = (event) => {
    // Tome ese valor de la entrada y utilícelo para actualizar su estado
    setMiTexto(event.target.value);
  };

  return (
    <div>
      <div>
        Capture su texto
      </div>
      <input value={miTexto} onChange={handleText} />
      <h3>Su Texto</h3>
      <p>
        {/* Mostrar el texto de la caja de entrada aquí  */}
        {miTexto}
      </p>
    </div>
  );
}

export default App;
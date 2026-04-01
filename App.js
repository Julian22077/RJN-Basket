import React, { useState } from 'react';
import Lista from './lista';
import Original from './original';

function Menu() {
  const [pantalla, setPantalla] = useState('Lista');
  if (pantalla === 'Lista') {
        return <Lista irAOriginal={() => setPantalla('Original')} />;
  }
  if (pantalla === 'Original') {
    return <Original volverALista={() => setPantalla('Lista')} />;
  }
  return null;
}
export default Menu;
import React from 'react';
import { render, waitFor } from '@testing-library/react';
import Screen from '../componentes/Screen';

test('Renderización de productos', async () => {
  // Renderizar el componente Screen
  const { getByText } = render(<Screen />);

  // Verificar que se muestra el texto "Productos" en la pantalla
  await waitFor(() => {
    expect(getByText('Productos')).toBeInTheDocument();
  });

  // Verificar que se muestran al menos 3 productos
  await waitFor(() => {
    expect(getByText(/Price:/i)).toHaveLength(10);
  });
});
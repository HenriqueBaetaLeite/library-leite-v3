import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Books from '../pages/Books';

describe('Teste do Componente Books', () => {
  test('Verificar se carrega a página Books, com o texto "Login"', () => {
    const { getByText } = render(<Books />);
    const booksHeaderTitle = getByText(/coletânia de livros/i);
    expect(booksHeaderTitle).toBeInTheDocument();
  });
});

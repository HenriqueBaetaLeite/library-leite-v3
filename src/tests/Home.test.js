import { render } from '@testing-library/react';

import Home from '../pages/Home';
// import Login from '../pages/Login';

describe('Teste do Componente Home', () => {
  test('Verificar se carrega a página Home, com o texto "Coletânia de Livros"', () => {
    const { getByText } = render(<Home />);
    const textBook = getByText(/coletânia de livros/i);
    expect(textBook).toBeInTheDocument();
  });

  test('Verificar se carrega a página Home, com a imagem do livro aberto', () => {
    const { getByRole, getByAltText } = render(<Home />);
    // const imgBook = getByRole('img', { alt: 'logo BL' });
    const imgBook = getByAltText('logo BL');
    expect(imgBook).toBeInTheDocument();
  });
});

import { render, fireEvent } from '@testing-library/react';

import Login from '../pages/Login';

const EMAIL_USER = 'henriquebaeta@yahoo.com.br';
const PASSWORD_USER = '123456789';

describe('Teste do Componente Login', () => {
  test('Verificar se carrega a página Login, com o texto "Login"', () => {
    const { getByText } = render(<Login />);
    const loginText = getByText(/login/i);
    expect(loginText).toBeInTheDocument();
  });

  test('Verificar se carrega a página Login, com o input de Email e Senha', () => {
    const { getByLabelText } = render(<Login />);
    const email = getByLabelText('E-mail');
    expect(email).toBeInTheDocument();
    expect(email.type).toBe('email');

    const senha = getByLabelText('Senha');
    expect(senha).toBeInTheDocument();
    expect(senha.type).toBe('password');
  });

  test('Verficar se carrega a página Login, com o botão Entrar', () => {
    const { getByTestId } = render(<Login />);
    const enterButton = getByTestId('send-button');
    expect(enterButton).toBeInTheDocument();
    expect(enterButton).toHaveTextContent(/entrar/i);
  });

  test('Verifica funcionamento dos inputs de email e password, além do funcionamento do botão Entrar.', () => {
    const { getByTestId, getByLabelText } = render(<Login />);

    const mySubmit = jest.fn();

    const email = getByLabelText('E-mail');
    expect(email).toHaveValue('');
    
    const senha = getByLabelText('Senha');    
    expect(senha).toHaveValue('');
    
    
    fireEvent.change(email, { target: { value: EMAIL_USER } });
    
    expect(email).toHaveValue(EMAIL_USER)
    
    fireEvent.change(senha, { target: { value: PASSWORD_USER } });

    expect(senha).toHaveValue(PASSWORD_USER)

    const enterButton = getByTestId('send-button');

    fireEvent.click(enterButton);
    // expect(mySubmit).toBeCalled();

  });
});

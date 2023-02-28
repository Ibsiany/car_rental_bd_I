import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import 'react-dragswitch/dist/index.css';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import {
  Container,
  ContainerInfo,
  ScreenSelector,
  ButtonSelect,
  Title,
  Table,
  Button,
  ButtonContainer,
} from './styles';

export function ListData() {
  const [isChecked, setIsChecked] = useState(true);

  const handleChangeisChecked = useCallback(() => {
    setIsChecked(!isChecked);
  }, [isChecked]);

  return (
    <Container>
      <Header />
      {localStorage.getItem('status') === 'true' ? (
        <ContainerInfo>
          <Title>Tela do administrador</Title>

          <ScreenSelector>
            <ButtonSelect
              type="button"
              className={isChecked === true ? 'active' : ''}
              onClick={() => handleChangeisChecked()}
            >
              Usuários
            </ButtonSelect>
            <ButtonSelect
              type="button"
              className={isChecked === false ? 'active' : ''}
              onClick={() => handleChangeisChecked()}
            >
              Carros
            </ButtonSelect>
          </ScreenSelector>

          {isChecked ? (
            <Table>
              <caption>USUÁRIOS</caption>
              <thead>
                <tr>
                  <th>NOME</th>
                  <th>CPF</th>
                  <th>AÇÕES</th>
                </tr>
              </thead>
              <tbody>
                <tr key="1">
                  <td>Ibsiany</td>
                  <td>11122233345</td>
                  <td>
                    <Button type="button">Editar</Button>
                    <Button type="button">Excluir</Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          ) : (
            <Table>
              <caption>CARROS</caption>
              <thead>
                <tr>
                  <th>NOME</th>
                  <th>MODELO</th>
                  <th>PLACA</th>
                  <th>AÇÕES</th>
                </tr>
              </thead>
              <tbody>
                <tr key="1">
                  <td>Gol</td>
                  <td>1.0</td>
                  <td>UFOP022</td>
                  <td>
                    <Button type="button">Editar</Button>
                    <Button type="button">Excluir</Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          )}
          <ButtonContainer>
            <Link
              to={isChecked ? '/admin/create-user' : '/admin/create-car'}
              id="rent"
            >
              Cadastrar
            </Link>
          </ButtonContainer>
        </ContainerInfo>
      ) : (
        <ContainerInfo>ACESSO NEGADO!</ContainerInfo>
      )}

      <Footer />
    </Container>
  );
}

import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import 'react-dragswitch/dist/index.css';
import toast, { Toaster } from 'react-hot-toast';
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
import { api } from '../../services/api';

export function ListData() {
  const [isChecked, setIsChecked] = useState(true);

  const handleChangeisChecked = useCallback(() => {
    setIsChecked(!isChecked);
  }, [isChecked]);

  const deleteUser = useCallback(async (id: string) => {
    try {
      await api.delete(`/user/delete${id}`);

      toast.success('Usuário deletado com sucesso!');
    } catch (error) {
      toast.error('Ocorreu algum erro na deleção do usuário!');
    }
  }, []);

  const deleteCar = useCallback(async (id: string) => {
    try {
      await api.delete(`/car/delete/${id}`);

      toast.success('Carro deletado com sucesso!');
    } catch (error) {
      toast.error('Ocorreu algum erro na deleção do carro!');
    }
  }, []);

  return (
    <Container>
      <Toaster position="top-right" reverseOrder={false} />

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
                    <Link to="/admin/edit-user" state="1" id="rent">
                      Editar
                    </Link>
                    <Button type="button" onClick={() => deleteUser('rent')}>
                      Excluir
                    </Button>
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
                    <Link to="/admin/edit-car" state="1" id="rent">
                      Editar
                    </Link>
                    <Button type="button" onClick={() => deleteCar('rent')}>
                      Excluir
                    </Button>
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

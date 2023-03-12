import React, { useCallback, useEffect, useState } from 'react';
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
import { IUserDTO } from '../../interfaces/IUserDTO';
import { ICarDTO } from '../../interfaces/ICarDTO';

export function ListData() {
  const [users, setUser] = useState<IUserDTO[]>([]);
  const [cars, setCar] = useState<ICarDTO[]>([]);
  const [isChecked, setIsChecked] = useState(true);

  const handleChangeisChecked = useCallback(() => {
    setIsChecked(!isChecked);
  }, [isChecked]);

  useEffect(() => {
    api.get(`/cliente`).then(response => {
      setUser(response.data);
    });
  }, [users]);

  useEffect(() => {
    api.get(`/carro`).then(response => {
      setCar(response.data);
    });
  }, [cars]);

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

  const style = {
    height: '100%',
  };

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
                {users.map(user => {
                  return (
                    <tr key={user.id}>
                      <td>{user.nome}</td>
                      <td>{user.cpf}</td>
                      <td>
                        <Button type="button">
                          <Link to="/admin/edit-user" state={user.id} id="rent">
                            Editar
                          </Link>
                        </Button>
                        <Button
                          type="button"
                          onClick={() => deleteUser('rent')}
                        >
                          Excluir
                        </Button>
                      </td>
                    </tr>
                  );
                })}
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
                {cars.map(car => {
                  return (
                    <tr key={car.id}>
                      <td>{car.nome}</td>
                      <td>{car.modelo}</td>
                      <td>{car.placa}</td>
                      <td>
                        <Button type="button">
                          <Link to="/admin/edit-car" state={car.id} id="rent">
                            Editar
                          </Link>
                        </Button>
                        <Button type="button" onClick={() => deleteCar('rent')}>
                          Excluir
                        </Button>
                      </td>
                    </tr>
                  );
                })}
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
        <ContainerInfo style={style}>ACESSO NEGADO!</ContainerInfo>
      )}

      <Footer />
    </Container>
  );
}

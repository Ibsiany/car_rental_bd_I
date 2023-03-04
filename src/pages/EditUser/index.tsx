import React, { useCallback, useEffect, useState, ChangeEvent } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import { useLocation, useNavigate } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import {
  Container,
  ContainerInfo,
  Title,
  ContainerInput,
  Label,
  Input,
  ContainerButton,
  Button,
} from './styles';
import { IUserDTO } from '../../interfaces/IUserDTO';
import { api } from '../../services/api';

interface ILocationState {
  user_id: string;
}

export function EditUser() {
  const [user, setUser] = useState<IUserDTO>({} as IUserDTO);

  const location = useLocation();
  const data = location.state as ILocationState;

  useEffect(() => {
    api.get(`/user/${data.user_id}`).then(response => {
      setUser(response.data);
    });
  }, [user, data]);

  const navigate = useNavigate();

  const editUser = useCallback(async () => {
    try {
      await api.put('/user/edit', {
        user,
      });

      navigate('/admin/list');
    } catch (error) {
      toast.error('Ocorreu algum erro na edição do usuário!');
    }
  }, [user, navigate]);

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;

      setUser({ ...user, [name]: value });
    },
    [user, setUser],
  );

  return (
    <Container>
      <Toaster position="top-right" reverseOrder={false} />

      <Header />
      {localStorage.getItem('status') === 'true' ? (
        <ContainerInfo>
          <Title>Realizar cadastro de usuário</Title>
          <ContainerInput>
            <Label>
              NOME:
              <Input
                id="name"
                name="name"
                type="text"
                value={user.name}
                onChange={handleInputChange}
              />
            </Label>
            <Label>
              E-MAIL:
              <Input
                id="email"
                name="email"
                type="text"
                value={user.email}
                onChange={handleInputChange}
                placeholder="Ex: alguem@email.com"
              />
            </Label>
            <Label>
              CPF:
              <Input
                id="cpf"
                name="cpf"
                type="number"
                value={user.cpf}
                onChange={handleInputChange}
                placeholder="Ex: 13785091000160"
              />
            </Label>
          </ContainerInput>

          <ContainerButton>
            <Button onClick={editUser}>ATUALIZAR</Button>
          </ContainerButton>
        </ContainerInfo>
      ) : (
        <ContainerInfo>ACESSO NEGADO!</ContainerInfo>
      )}

      <Footer />
    </Container>
  );
}

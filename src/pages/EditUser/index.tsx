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

export function EditUser() {
  const [user, setUser] = useState<IUserDTO>({} as IUserDTO);

  const location = useLocation();
  const user_id = location.state;

  useEffect(() => {
    api.get(`/user/${user_id}`).then(response => {
      setUser(response.data);
    });
  }, [user, user_id]);

  const navigate = useNavigate();

  const editUser = useCallback(async () => {
    try {
      await api.put('/cliente', {
        id: user_id,
        user,
      });

      navigate('/admin/list');
    } catch (error) {
      console.log(error);
      toast.error('Ocorreu algum erro na edição do usuário!');
    }
  }, [user, navigate]);

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;

      setUser({ ...user, [name]: value });
    },
    [user],
  );

  const style = {
    height: '100%',
  };

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
                defaultValue={user.nome}
                onChange={handleInputChange}
              />
            </Label>
            <Label>
              E-MAIL:
              <Input
                id="email"
                name="email"
                type="text"
                defaultValue={user.email}
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
                defaultValue={user.cpf}
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
        <ContainerInfo style={style}>ACESSO NEGADO!</ContainerInfo>
      )}

      <Footer />
    </Container>
  );
}

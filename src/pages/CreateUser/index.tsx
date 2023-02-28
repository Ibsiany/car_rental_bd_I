import React from 'react';

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

export function CreateUser() {
  return (
    <Container>
      <Header />
      {localStorage.getItem('status') === 'true' ? (
        <ContainerInfo>
          <Title>Realizar cadastro de usuário</Title>
          <ContainerInput>
            <Label>
              NOME:
              <Input type="text" />
            </Label>
            <Label>
              E-MAIL:
              <Input type="text" placeholder="Ex: alguem@email.com" />
            </Label>
            <Label>
              CELULAR:
              <Input type="number" placeholder="Ex: 31987158055" />
            </Label>
          </ContainerInput>

          <ContainerButton>
            <Button>CADASTRAR</Button>
          </ContainerButton>
        </ContainerInfo>
      ) : (
        <ContainerInfo>ACESSO NEGADO!</ContainerInfo>
      )}

      <Footer />
    </Container>
  );
}

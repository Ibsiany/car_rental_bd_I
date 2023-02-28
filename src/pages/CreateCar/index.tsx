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

export function CreateCar() {
  return (
    <Container>
      <Header />
      {localStorage.getItem('status') === 'true' ? (
        <ContainerInfo>
          <Title>Realizar cadastro de carro</Title>
          <ContainerInput>
            <Label>
              MODELO:
              <Input type="text" placeholder="Ex: 1. 1 - Gol, da Volkswagen" />
            </Label>
            <Label>
              PLACA:
              <Input type="text" placeholder="Ex: UFOPA22" />
            </Label>
            <Label>
              INFORMAÇÕES:
              <Input type="text" placeholder="Ex: Possui 4 portas..." />
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

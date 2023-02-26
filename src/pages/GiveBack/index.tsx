import React from 'react';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import {
  Container,
  ContainerInfo,
  ContainerInput,
  Label,
  Input,
  ContainerButton,
  Button,
} from './styles';

export function GiveBack() {
  return (
    <Container>
      <Header />
      <ContainerInfo>
        <ContainerInput>
          <Label>
            CPF:
            <Input type="number" placeholder="Ex: 13785091000160" />
          </Label>
          <Label>
            PLACA:
            <Input type="text" placeholder="Ex: UFOPA22" />
          </Label>
        </ContainerInput>

        <ContainerButton>
          <Button>DEVOLVER</Button>
        </ContainerButton>
      </ContainerInfo>
      <Footer />
    </Container>
  );
}

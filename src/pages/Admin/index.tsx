import React, { useState } from 'react';

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

export function Admin() {
  const [status, setStatus] = useState<string>('true');

  const handleSave = () => {
    localStorage.setItem('status', status);
  };

  const handleLoad = () => {
    const statusLocalStorage = localStorage.getItem('status');

    console.log(statusLocalStorage);
  };

  return (
    <Container>
      <Header />
      <ContainerInfo>
        <Title>Tela do administrador</Title>
        <ContainerInput>
          <Label>
            CPF:
            <Input type="number" placeholder="Ex: 13785091000160" />
          </Label>
          <Label>
            PALAVRA-PASSE:
            <Input type="password" />
          </Label>
        </ContainerInput>

        <ContainerButton>
          <Button>Verificar credenciais</Button>
        </ContainerButton>
      </ContainerInfo>
      <Footer />
    </Container>
  );
}

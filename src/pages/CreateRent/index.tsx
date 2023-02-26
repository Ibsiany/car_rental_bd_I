import React from 'react';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import {
  Container,
  ContainerInfo,
  Title,
  ContainerCars,
  ContainerCar,
  ContainerImage,
  Image,
  ContainerText,
  ContainerCarInfo,
  Details,
  ContainerInput,
  Label,
  Input,
  ContainerButton,
  Button,
} from './styles';
import logo from '../../assets/logo.png';

export function CreateRent() {
  return (
    <Container>
      <Header />
      <ContainerInfo>
        <ContainerCars>
          <ContainerCar>
            <Title>Porsche 911 Carrera 4s</Title>
            <ContainerCarInfo>
              <ContainerImage>
                <Image src={logo} alt="logo" />
              </ContainerImage>
              <ContainerText>
                <Details>Coupe</Details>
                <Details>3.0l Twin Turbo</Details>
                <Details>3.0 L</Details>
                <Details className="last">Cinza</Details>
              </ContainerText>
            </ContainerCarInfo>
          </ContainerCar>
        </ContainerCars>

        <ContainerInput>
          <Label>
            CPF:
            <Input type="number" placeholder="Ex: 13785091000160" />
          </Label>
        </ContainerInput>

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
          <Button>ALUGAR</Button>
        </ContainerButton>
      </ContainerInfo>
      <Footer />
    </Container>
  );
}

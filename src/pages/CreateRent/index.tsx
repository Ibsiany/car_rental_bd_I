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
          <Label>
            Data de devolução:
            <Input type="date" />
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

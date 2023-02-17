import React from 'react';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import {
  Container,
  ContainerInfo,
  ContainerTitle,
  Title,
  Info,
  ContainerCars,
  ContainerCar,
  ContainerImage,
  Image,
  ContainerText,
  ContainerCarInfo,
  Details,
} from './styles';
import logo from '../../assets/logo.png';

export function Rent() {
  return (
    <Container>
      <Header />
      <ContainerInfo>
        <ContainerTitle>
          <Title>Aluguel de carros</Title>
          <Info>Conheça os carros disponíveis!</Info>
        </ContainerTitle>

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
                <Details>Cinza</Details>
              </ContainerText>
            </ContainerCarInfo>
          </ContainerCar>
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
                <Details>Cinza</Details>
              </ContainerText>
            </ContainerCarInfo>
          </ContainerCar>
        </ContainerCars>
      </ContainerInfo>
      <Footer />
    </Container>
  );
}

import React, { useCallback, ChangeEvent, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import { useLocation } from 'react-router-dom';
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
import { IRentDTO } from '../../interfaces/IRentDTO';
import logo from '../../assets/logo.png';
import { api } from '../../services/api';

interface ILocationState {
  id: string;
}

export function CreateRent() {
  const [data, setData] = useState<IRentDTO>({} as IRentDTO);

  const location = useLocation();
  const car = location.state as ILocationState;

  const rent = useCallback(async () => {
    try {
      await api.post('/car/rent', {
        data,
      });

      toast.success('Carro alugado com sucesso!');
    } catch (error) {
      toast.error('Ocorreu algum erro ao alugar o carro!');
    }
  }, [data]);

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;

      setData({ ...data, [name]: value });
    },
    [data, setData],
  );

  return (
    <Container>
      <Toaster position="top-right" reverseOrder={false} />

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
            <Input
              id="cpf"
              name="cpf"
              type="number"
              onChange={handleInputChange}
              placeholder="Ex: 13785091000160"
            />
          </Label>
          <Label>
            Data de devolução:
            <Input
              id="data"
              name="data"
              type="date"
              onChange={handleInputChange}
            />
          </Label>
        </ContainerInput>

        <ContainerButton>
          <Button onClick={rent}>ALUGAR</Button>
        </ContainerButton>
      </ContainerInfo>
      <Footer />
    </Container>
  );
}

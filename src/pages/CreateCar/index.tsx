import React, { useCallback, useState, ChangeEvent } from 'react';

import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { api } from '../../services/api';
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
import { ICarDTO } from '../../interfaces/ICarDTO';

export function CreateCar() {
  const [car, setCar] = useState<ICarDTO>({} as ICarDTO);

  const navigate = useNavigate();

  const createCar = useCallback(async () => {
    try {
      await api.post('/car/create', {
        car,
      });

      navigate('/admin/list');
    } catch (error) {
      toast.error('Ocorreu algum erro na criação do carro!');
    }
  }, [car, navigate]);

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;

      setCar({ ...car, [name]: value });
    },
    [car, setCar],
  );

  return (
    <Container>
      <Toaster position="top-right" reverseOrder={false} />
      <Header />
      {localStorage.getItem('status') === 'true' ? (
        <ContainerInfo>
          <Title>Realizar cadastro de carro</Title>
          <ContainerInput>
            <Label>
              NOME:
              <Input
                id="name"
                name="name"
                type="text"
                onChange={handleInputChange}
                placeholder="digite o nome"
              />
            </Label>
            <Label>
              MODELO:
              <Input
                id="model"
                name="model"
                type="text"
                onChange={handleInputChange}
                placeholder="Ex: 1. 1 - Gol, da Volkswagen"
              />
            </Label>
            <Label>
              PLACA:
              <Input
                id="plate"
                name="plate"
                type="text"
                onChange={handleInputChange}
                placeholder="Ex: UFOPA22"
              />
            </Label>
            <Label>
              DESCRIÇÃO:
              <Input
                id="description"
                name="description"
                type="text"
                onChange={handleInputChange}
                placeholder="Ex: Possui 4 portas..."
              />
            </Label>
            <Label>
              COMBUSTÍVEL:
              <Input
                id="fuel"
                name="fuel"
                type="text"
                onChange={handleInputChange}
                placeholder="Ex: diesel"
              />
            </Label>
            <Label>
              MOTOR:
              <Input
                id="motor"
                name="motor"
                type="text"
                onChange={handleInputChange}
                placeholder="Ex: Motor vertical"
              />
            </Label>
            <Label>
              POTÊNCIA:
              <Input
                id="power"
                name="power"
                type="text"
                onChange={handleInputChange}
                placeholder="Ex: 1.6"
              />
            </Label>
          </ContainerInput>

          <ContainerButton>
            <Button onClick={createCar}>CADASTRAR</Button>
          </ContainerButton>
        </ContainerInfo>
      ) : (
        <ContainerInfo>ACESSO NEGADO!</ContainerInfo>
      )}

      <Footer />
    </Container>
  );
}

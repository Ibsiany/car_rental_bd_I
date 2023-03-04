import React, { useCallback, useState, ChangeEvent, useEffect } from 'react';

import { useNavigate, useLocation } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { Header } from '../../components/Header';
import { ICarDTO } from '../../interfaces/ICarDTO';
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
import { api } from '../../services/api';

interface ILocationState {
  car_id: string;
}

export function EditCar() {
  const [car, setCar] = useState<ICarDTO>({} as ICarDTO);

  const location = useLocation();
  const data = location.state as ILocationState;

  useEffect(() => {
    api.get(`/car/${data.car_id}`).then(response => {
      setCar(response.data);
    });
  }, [car, data]);

  const navigate = useNavigate();

  const editCar = useCallback(async () => {
    try {
      await api.put('/car/edit', {
        car,
      });

      navigate('/admin/list');
    } catch (error) {
      toast.error('Ocorreu algum erro na criação do usuário!');
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
          <Title>Realizar cadastro</Title>
          <ContainerInput>
            <Label>
              NOME:
              <Input
                id="name"
                name="name"
                type="text"
                value={car.name}
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
                value={car.model}
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
                value={car.plate}
                onChange={handleInputChange}
                placeholder="Ex: UFOPA22"
              />
            </Label>
            <Label>
              DESCRIÇÃO:
              <Input
                id="description"
                name="description"
                value={car.description}
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
                value={car.fuel}
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
                value={car.motor}
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
                value={car.power}
                onChange={handleInputChange}
                placeholder="Ex: 1.6"
              />
            </Label>
          </ContainerInput>

          <ContainerButton>
            <Button onClick={editCar}>ATUALIZAR</Button>
          </ContainerButton>
        </ContainerInfo>
      ) : (
        <ContainerInfo>ACESSO NEGADO!</ContainerInfo>
      )}

      <Footer />
    </Container>
  );
}

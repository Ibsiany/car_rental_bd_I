import React, { useCallback, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { api } from '../../services/api';
import { Container, ContainerBanner, ContainerTitle, Title } from './styles';
import banner from '../../assets/banner.png';

export function Home() {
  return (
    <Container>
      <Header />
      <ContainerBanner>
        <ContainerTitle>
          <Title>Pra frente e avante!</Title>
        </ContainerTitle>
      </ContainerBanner>
    </Container>
  );
}

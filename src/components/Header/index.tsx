import { Link } from 'react-router-dom';
import {
  Container,
  ContainerInfo,
  TitleInfo,
  ContainerButtons,
  ContainerPage,
  ContainerImage,
  Image,
  Title,
} from './styles';
import logo from '../../assets/logo.png';

export function Header() {
  return (
    <Container>
      <ContainerInfo>
        <TitleInfo>Car Rental</TitleInfo>
        <Image src={logo} alt="logo" />
        <TitleInfo>Car Rental</TitleInfo>
      </ContainerInfo>
      <ContainerButtons>
        <ContainerImage>
          <Title>Car Rental</Title>
          <Image src={logo} alt="logo" />
        </ContainerImage>
        <ContainerPage>
          <Link to="/auth/dashboard" id="dashboard">
            ALUGAR
          </Link>
          <Link to="/auth/bets-play" id="play">
            DEVOLVER
          </Link>
        </ContainerPage>
      </ContainerButtons>
    </Container>
  );
}

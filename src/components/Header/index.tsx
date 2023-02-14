import { Link } from 'react-router-dom';
import {
  Container,
  ContainerInfo,
  TitleInfoContainer,
  Contact,
  ContactInfo,
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
        <TitleInfoContainer>
          <Contact>Telefone</Contact>
          <ContactInfo>Car Rental</ContactInfo>
        </TitleInfoContainer>
        <Image src={logo} alt="logo" />
        <TitleInfoContainer>
          <Contact>Contato</Contact>
          <ContactInfo>Car Rental</ContactInfo>
        </TitleInfoContainer>
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

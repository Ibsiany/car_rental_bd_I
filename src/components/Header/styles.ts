import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  height: 9rem;
  width: 100vw;
  left: 0;
  top: 0;
  right: 0;

  z-index: 1000;
`;

export const ContainerInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;

  height: 5rem;
  width: 100vw;
  left: 0;
  top: 0;
  right: 0;

  background-color: #1c1c1c;
`;

export const TitleInfo = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: #ffffff;

  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;

  height: 4rem;
  width: 100vw;
  left: 0;
  top: 0;
  right: 0;

  background-color: #f7f7f7;
`;

export const ContainerPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 70%;

  height: 4rem;

  gap: 2rem;

  a {
    font-size: 1rem;
    font-weight: bold;
    color: #6c6c6c;

    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }
`;

export const ContainerImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 30%;

  height: 4rem;
`;

export const Image = styled.img`
  max-width: 6rem;
  max-height: 6rem;
  width: auto;
  height: auto;
`;

export const Title = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: #000000;

  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;

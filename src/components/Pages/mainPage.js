import UserContext from "../../contexts/userContext";
import { useContext } from "react";
import useStreaming from "../../hooks/useStreaming";
import styled from "styled-components";

export default function MainPage() {
  const { userData, setUserData } = useContext(UserContext);
  const { streaming, streamingLoading } = useStreaming();
  console.log(streamingLoading);
  console.log(streaming);

  return (
    <>
      <Container>
        <Title>Olá, {userData.displayName}!</Title>
        <Info>Selecione os serviços que assina</Info>
        {streamingLoading ? (
          <p>Loading...</p>
        ) : (
          <StreamingContainer>
            {streaming.map((streaming) => (
              <StreamingCard>
                <ImgWraper>
                  <img src={streaming.logo} alt="logo" />
                </ImgWraper>
              </StreamingCard>
            ))}
          </StreamingContainer>
        )}
      </Container>
    </>
  );
}

const StreamingCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  background-color: #3d5a80;
  color: #e0fbfc;
  width: 8rem;
  height: 8rem;
  border-radius: 10px;
  padding: 15px;
  margin-right: 20px;
  margin-bottom: 20px;
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: #293241;

  @media (max-width: 600px) {
    border-radius: 0;
    min-height: 100vh;
    height: auto;
    max-height: initial;
    min-width: 100%;
    max-width: initial;
  }
`;

const StreamingContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

const Title = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  font-size: 20px;
  color: #ee6c4d;
  width: 100vw;
  margin: 25px 10px;
`;

const Info = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 20px;
  color: #98c1d9;
  width: 100vw;
  margin: 25px 10px;
`;

const ImgWraper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

import UserContext from "../../contexts/userContext";
import { useContext, useState } from "react";
import useStreaming from "../../hooks/useStreaming";
import styled from "styled-components";
import Header from "../Header";

function Streaming({ info, selected, setSelected }) {
  let bgColor = "#3D5A80";
  if (isSelected(selected, info)) {
    bgColor = "#EE6C4D";
    return (
      <StreamingCard
        onClick={() =>
          setSelected(selected.filter((streaming) => streaming.id !== info.id))
        }
        background={bgColor}
      >
        <ImgWraper>
          <img src={info.logo} alt="logo" />
        </ImgWraper>
      </StreamingCard>
    );
  } else {
    return (
      <StreamingCard
        onClick={() => setSelected([...selected, info])}
        background={bgColor}
      >
        <ImgWraper>
          <img src={info.logo} alt="logo" />
        </ImgWraper>
      </StreamingCard>
    );
  }
}

function isSelected(selected, info) {
  if (selected.find((streaming) => streaming.id === info.id)) {
    return true;
  }
}

export default function MainPage() {
  const { userData, setUserData } = useContext(UserContext);
  const { streaming, streamingLoading } = useStreaming();
  const [selected, setSelected] = useState([]);
  console.log(streaming);
  console.log(selected);

  return (
    <>
      <Container>
        <Title>Olá, {userData.displayName}!</Title>
        <Info>Selecione os serviços que assina:</Info>
        {streamingLoading ? (
          <p>Loading...</p>
        ) : (
          <StreamingContainer>
            {streaming.map((streaming) => (
              <Streaming
                key={streaming.id}
                selected={selected}
                setSelected={setSelected}
                info={streaming}
              />
            ))}
          </StreamingContainer>
        )}
        {selected.length !== 0 ? <NextButton>Confirmar</NextButton> : <></>}
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
  background-color: ${(props) => props.background};
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
  margin: 1rem 1rem;
  position: relative;
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

const NextButton = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 8rem;
  height: 4rem;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 20px;
  color: #e5e5e5;
  background-color: #ee6c4d;
  border-radius: 20px;
  position: absolute;
  right: 1rem;
  bottom: 12rem;
  margin-top: 3rem;
`;

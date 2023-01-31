import styled from "styled-components";
import Footer from "../Footer";

export default function userPage() {
  return (
    <Container>
      <Title>Meus streamings</Title>
      <Spacer />
      <StreamingsDiv>
        <StreamingCard />
        <StreamingCard />
        <StreamingCard />
      </StreamingsDiv>
      <Title>Meus gastos</Title>
      <Spacer />
      <StreamingsDiv>
        <StreamingSmall />
        <StreamingSmall />
        <StreamingSmall />
      </StreamingsDiv>
      <SumDiv>Total</SumDiv>
      <Title>Títulos populares</Title>
      <Spacer />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: #293241;
  padding: 1.3rem;

  @media (max-width: 600px) {
    border-radius: 0;
    min-height: 100vh;
    height: auto;
    max-height: initial;
    min-width: 100%;
    max-width: initial;
  }
`;

const StreamingsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: flex-start;
`;

const Title = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  font-size: 20px;
  color: #ee6c4d;
  width: 100vw;
`;

const Spacer = styled.div`
  width: 100vw;
  height: 1px;
  margin: 10px 0;
  background-color: #ee6c4d;
`;

const StreamingCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  background-color: #ee6c4d;
  color: #e0fbfc;
  width: 6rem;
  height: 6rem;
  border-radius: 10px;
  padding: 15px;
  margin-right: 20px;
  margin-bottom: 20px;
`;

const StreamingSmall = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 8px 12px;
  gap: 8px;
  width: 120px;
  height: 50px;
  background: #98c1d9;
  border-radius: 14px;
  margin-right: 10px;
  margin-bottom: 10px;
`;

const SumDiv = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  font-size: 20px;
  color: #ee6c4d;
  align-self: flex-end;
`;

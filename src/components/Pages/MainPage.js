import UserContext from "../../contexts/userContext";
import { useContext, useState, useEffect } from "react";
import useStreaming from "../../hooks/useStreaming";
import styled from "styled-components";
import Footer from "../Footer";
import { Link, useNavigate } from "react-router-dom";
import useUserStreaming from "../../hooks/useUserStreaming";
import { toast } from "react-toastify";
import { getExpenses, updateExpenses } from "../../services/userApi";
import { getStreamingsByUser } from "../../services/streamingApi";

function Streaming({
  streamingId,
  selected,
  setSelected,
  logo,
  userData,
  price,
  expenses,
  setExpenses,
  subscribed,
  setSubscribed,
}) {
  let bgColor = "#3D5A80";
  if (
    isSelected(selected, streamingId) ||
    isSubscribed(subscribed, streamingId)
  ) {
    bgColor = "#EE6C4D";
    return (
      <StreamingCard
        onClick={() => {
          setSelected(
            selected.filter((data) => data.streamingId !== streamingId)
          );
          setSubscribed(
            subscribed.filter((data) => data.streamingId !== streamingId)
          );
          setExpenses(expenses - price);
        }}
        background={bgColor}
      >
        <ImgWraper>
          <img src={logo} alt="logo" />
        </ImgWraper>
      </StreamingCard>
    );
  } else {
    return (
      <StreamingCard
        onClick={() => {
          setSelected([
            ...selected,
            { streamingId: streamingId, userId: userData.user.id },
          ]);
          setExpenses(expenses + price);
          setSubscribed([
            ...subscribed,
            { streamingId: streamingId, userId: userData.user.id },
          ]);
        }}
        background={bgColor}
      >
        <ImgWraper>
          <img src={logo} alt="logo" />
        </ImgWraper>
      </StreamingCard>
    );
  }
}

function isSelected(selected, streamingId) {
  if (selected.find((data) => data.streamingId === streamingId)) {
    return true;
  }
  return false;
}

function isSubscribed(subscribed, streamingId) {
  if (subscribed.find((data) => data.streamingId === streamingId)) {
    return true;
  }
  return false;
}

export default function MainPage() {
  const { userData } = useContext(UserContext);
  const { streaming, streamingLoading } = useStreaming();
  const { postUserStreaming } = useUserStreaming();
  const [selected, setSelected] = useState([]);
  const [subscribed, setSubscribed] = useState([]);
  const [expenses, setExpenses] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUserStreamings() {
      const result = await getStreamingsByUser({ userId: userData.user.id });
      setSubscribed(
        result.map((streaming) => {
          return { streamingId: streaming.id, userId: userData.user.id };
        })
      );
    }
    fetchUserStreamings();
  }, []);

  useEffect(() => {
    async function fetchUserExpenses() {
      const result = await getExpenses(userData.user.id);
      setExpenses(result.expenses);
    }
    fetchUserExpenses();
  }, []);

  console.log(expenses);

  console.log(subscribed);

  console.log(selected);

  async function sendSelectedStreamings() {
    try {
      const userId = userData.user.id;
      if (subscribed.length != 0) {
        await postUserStreaming(subscribed);
        await updateExpenses(expenses, userId);
        navigate("/user");
      } else {
        await postUserStreaming(selected);
        await updateExpenses(expenses, userId);
        navigate("/user");
      }
    } catch (err) {
      toast("N??o foi poss??vel escolher os streamings");
    }
  }

  return (
    <>
      <Container>
        <Title>Ol??, {userData.user.name}!</Title>
        <Info>Selecione os servi??os que assina:</Info>
        {streamingLoading ? (
          <p>Loading...</p>
        ) : (
          <StreamingContainer>
            {streaming.map((streaming) => (
              <Streaming
                key={streaming.id}
                selected={selected}
                setSelected={setSelected}
                streamingId={streaming.id}
                logo={streaming.logo}
                userData={userData}
                price={streaming.price}
                expenses={expenses}
                setExpenses={setExpenses}
                subscribed={subscribed}
                setSubscribed={setSubscribed}
              />
            ))}
          </StreamingContainer>
        )}
        {selected.length !== 0 || subscribed.length !== 0 ? (
          <NextButton onClick={() => sendSelectedStreamings()}>
            Confirmar
          </NextButton>
        ) : (
          <></>
        )}
        <Footer />
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
  cursor: pointer;
`;

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

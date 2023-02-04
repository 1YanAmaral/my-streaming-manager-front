import styled from "styled-components";

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #293241;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ion-icon {
    font-size: 35px;
    font-weight: 700;
  }
`;

const WrapperLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90vw;
  margin-top: 20px;

  ion-icon {
    font-size: 35px;
    font-weight: 700;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 50px;
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  font-size: 32px;
  color: #ee6c4d;
  margin-bottom: 25px;
`;

const Info = styled.input`
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 19.976px;
  line-height: 25px;
  color: #666666;
  width: 303px;
  height: 45px;
  background-color: #98c1d9;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  margin: 6px;

  ::placeholder {
    font-family: "Raleway", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: black;
    padding-left: 10px;
  }
`;

const Bigbutton = styled.button`
  width: 303px;
  height: 45px;
  background-color: #ee6c4d;
  border-radius: 4.63636px;
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20.976px;
  color: #e0fbfc;
  border: none;
  margin-top: 5px;
`;
const SpanLink = styled.span`
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  margin: 25px;
  color: #e0fbfc;
`;

const PageTitle = styled.div`
  display: flex;
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  color: #ffffff;
  margin: 25px auto;
  justify-content: space-between;
  align-items: center;
  width: 90vw;
`;

const Spacer = styled.div`
  width: 100vw;
  height: 1px;
  margin: 10px 0;
  background-color: #ee6c4d;
`;

export {
  Content,
  Wrapper,
  Logo,
  Info,
  Bigbutton,
  SpanLink,
  PageTitle,
  WrapperLine,
  Spacer,
};

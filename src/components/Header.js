import styled from "styled-components";

export default function Header() {
  return <HeaderStyle>My Streaming Manager</HeaderStyle>;
}

const HeaderStyle = styled.div`
  width: 100vw;
  height: 67px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ee6c4d;
  background-color: #3d5a80;
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
`;

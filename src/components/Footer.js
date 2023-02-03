import styled from "styled-components";
import { TbHome2 } from "react-icons/tb";
import { HiSearch } from "react-icons/hi";
import { IoIosOptions } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <FooterStyle>
      <FooterButtons>
        <Link to="/user">
          <TbHome2 />
        </Link>
      </FooterButtons>
      <FooterButtons>
        <Link to="/search">
          <HiSearch />
        </Link>
      </FooterButtons>
      <FooterButtons>
        <Link to="/main">
          <IoIosOptions />
        </Link>
      </FooterButtons>
    </FooterStyle>
  );
}

const FooterStyle = styled.div`
  width: 90vw;
  height: 67px;
  position: fixed;
  bottom: 24px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #e5e5e5;
  background-color: #3d5a80;
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
  border-radius: 16px;
`;

const FooterButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
  cursor: pointer;
  width: 100px;
  height: 55px;

  background: #3d5a80;
  border-radius: 16px;
`;

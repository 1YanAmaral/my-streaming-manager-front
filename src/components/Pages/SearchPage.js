import styled from "styled-components";
import { HiSearch } from "react-icons/hi";
import { useState, useEffect } from "react";
import { getSearchResults } from "../../services/streamingApi";

export default function SearchPage() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  async function fetchSearchResults() {
    const result = await getSearchResults(searchValue);
    setSearchResult(result.results);
  }

  console.log(searchValue);
  return (
    <Container>
      <Title>Busca de títulos</Title>
      <Title>
        <Input
          placeholder="Digite o nome do título que procura"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </Title>
      <Title>
        <SearchButton>
          <HiSearch onClick={fetchSearchResults} />
        </SearchButton>
      </Title>
      {searchResult.length != 0 ? (
        <ResultsDiv>
          {searchResult.map((result) => (
            <SearchResult>
              <img src={result.image_url} alt="poster"></img>
              <Title>{result.name}</Title>
            </SearchResult>
          ))}
        </ResultsDiv>
      ) : (
        <></>
      )}
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

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  font-size: 20px;
  color: #ee6c4d;
  width: 90vw;
`;

const Input = styled.input`
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 19.976px;
  line-height: 25px;
  color: #293241;
  width: 303px;
  height: 45px;
  background-color: #e0fbfc;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  margin: 15px;

  ::placeholder {
    font-family: "Raleway", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    color: #666666;
    padding-left: 5px;
  }
`;

const SearchButton = styled.button`
  width: 5rem;
  height: 3rem;
  background-color: #ee6c4d;
  border-radius: 5px;
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20.976px;
  color: #e0fbfc;
  border: none;
  margin: 5px auto;
`;

const ResultsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 15px;
  overflow-y: visible;
`;

const SearchResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  font-size: 20px;
  color: #ee6c4d;
  width: 90vw;
`;

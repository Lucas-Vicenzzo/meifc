import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 500px;

  input {
    background: rgba(255, 255, 255, 0.17);
    border-radius: 11px;
    border: none;
    color: white;
    padding: 18px 11px;
    width: 100%;

    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    font-weight: 30;

    &:focus{
      outline: none;
      border: solid 2px #004A57;
      margin: -2px;
    }
  }
  .dropdown {
    z-index: 10000;
    background-color: #2b3539;
    display: flex;
    flex-direction: column;
    border: 1px solid gray;
    color: white;
    padding: 11px;
    border: none;
    margin-top: 5px;
    border-radius: 11px;
  }

  .dropdown:empty {
    border: none;
    background-color: transparent;
  }

  .dropdown-row {
  cursor: pointer;
  text-align: start;
  margin: 2px 0;
  padding: 15px;
  }

  .search-inner {
  display: flex;
  flex-direction: row;
  }

`;

export const SearchInputs = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;

    button {
      background-color: transparent;
      border: none;
      width: 60px;
      height: 60px;
      &:hover {
        background-color: rgba(255, 255, 255, 0.17);
        border-radius: 5px;
      }
    }
`;

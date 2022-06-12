import styled from "styled-components";

export const Container = styled.div`
  flex-grow: 1;
  height: 100%;
  input {
    background: white;
    border-radius: 11px;
    border: none;
    color: white;
    padding: 18px 11px;
    width: 100%;
    height: 87px;

    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    font-weight: 30;

    &:focus{
      outline: none;
      border: solid 2px #004A57;
      margin: -2px;
    }
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

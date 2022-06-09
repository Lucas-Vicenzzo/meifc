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
    width: 500px;
    z-index: 10000;
    position: absolute;
    background-color: rgba(255, 255, 255, 0.45);
    display: grid;
    /* flex-direction: column; */
    grid-template-columns: 1fr 1fr 1fr;
    border: 1px solid gray;
    color: white;
    padding: 11px;
    border: solid 1px rgba(255, 255, 255, 0.17);
    margin-top: 12px;
    gap: 11px;
    border-radius: 5px;

    @media screen and (max-width: 1024px) {
      grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 767px) {
      grid-template-columns: 1fr;
    }
  }

  .dropdown:empty {
    border: none;
    background-color: transparent;
  }

  .dropdown-row {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #2b3539;
    border-radius: 20px;
    width: 100%;
    cursor: pointer;
    text-align: start;
    margin: 2px 0;
    padding: 20px;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: #f00;
    }
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

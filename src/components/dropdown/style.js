import styled from 'styled-components';

export const Container = styled.div`
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

  &:empty {
    border: none;
    background-color: transparent;
  }

  /* caixa de resultados */
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f00;
    border-radius: 20px;
    width: 100%;
    cursor: pointer;
    text-align: start;
    margin: 2px 0;
    padding: 10px;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: #fff;
    }
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

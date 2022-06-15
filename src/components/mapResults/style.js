import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-grow: 1;
  width: 100%;
  height: 100%;

  .leaflet-container {
    border-radius: 11px;
    flex-grow: 1;
  }

  .leaflet-control-zoom-in, .leaflet-control-zoom-out {
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(272.47deg, #6F00FF -59.23%, rgba(0, 0, 0, 0.76) 126.24%);
    border: 1px solid rgba(0, 0, 0, 0.28);
    box-shadow: 0px 13px 15px 3px rgba(0, 0, 0, 0.59);
    border-radius: 5px !important;
    margin-bottom: 5px;
    width: 40px !important;
    height: 40px !important;
    transition: all 0.5s ease-in-out;
    span {
      color: white;
    }

    &:hover {
      width: 60px !important;
    }
  }

  .leaflet-control-zoom {
    overflow: visible;
  }

  .leaflet-popup-content-wrapper, .leaflet-popup-tip {
    color: white;
    background: linear-gradient(264.52deg, #310071 0%, #000000 51.56%, rgba(0, 0, 0, 0.72) 100%) !important;
    div {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    b {
      font-family: 'Rubik', sans-serif;
      font-weight: 300;
      font-size: 14px;
      text-align: left;
    }
  }
  .leaflet-popup-close-button {
    span {
      width: 100px !important;
      height: 100px !important;
      color: white;
    }
  }
`;

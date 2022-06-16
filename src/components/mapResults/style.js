import styled from "styled-components";

const fullscreenIcon = require('../../assets/imgs/fullscreen.png').default1

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
    background: linear-gradient(7.31deg, rgba(0, 0, 0, 0.63) 0%, #14142B 100%);
    box-shadow: -4px 6px 8px -4px rgba(111, 0, 255, 0.29);
    border-radius: 9px;
    border-radius: 5px !important;
    margin-bottom: 5px;
    width: 40px !important;
    height: 40px !important;
    transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
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
  .leaflet-control-fullscreen {
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(7.31deg, rgba(0, 0, 0, 0.63) 0%, #14142B 100%);
    box-shadow: -4px 6px 8px -4px rgba(111, 0, 255, 0.29);
    border-radius: 9px;
    width: 40px !important;
    height: 40px !important;

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

  .leaflet-touch .leaflet-control-layers, .leaflet-touch .leaflet-bar {
    border: none;
  }

  .leaflet-popup-close-button {
    span {
      width: 100px !important;
      height: 100px !important;
      color: white;
    }
  }
`;

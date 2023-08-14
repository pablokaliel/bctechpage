import { styled } from "styled-components";
import backgroundfuturistic from "./../../assets/backgroundfuturistic.png";

export const DivQuintenary = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  gap: 132px;
  padding: 130px;
  margin-top: 144px;
  margin-right: 136px;

  border-radius: 0px 300px 300px 0px;

  background-image: url(${backgroundfuturistic});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const DivCommunity = styled.div`
  display: flex;
  align-items: center;

  border-radius: 319.5px;
  background: rgba(0, 221, 156, 0.1);

  gap: 90px;
  padding: 70px;

  position: relative;

  button {
    background-color: transparent;
    border: 0;

    transition: all 0.3s;

    &:hover {
      scale: 1.1;
    }
  }

  .left {
    left: -25px;
  }

  .right {
    right: -25px;
  }

  .absolute {
    position: absolute;
  }
`;

export const Comment = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  width: 463.978px;
  gap: 16px;

  color: #80ab9e;

  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;

  p {
    font-weight: 700;
  }

  .asp {
    z-index: -1;
    top: -40px;
    left: 0;
  }
`;

export const DivImageUser = styled.div`
  width: 183.265px;
  height: 178.815px;

  border: 7px solid #00e3a5;
  border-radius: 100%;

  img {
    width: 100%;
    height: 100%;
  }
`;

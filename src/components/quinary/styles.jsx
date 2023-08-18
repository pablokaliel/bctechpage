import { styled } from "styled-components";
import backgroundfuturistic from "./../../assets/backgroundfuturistic.png";

export const DivQuinary = styled.div`
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

  @media (max-width: 770px) {
    margin-right: 0;
    padding: 0;
  }
`;

export const DivCommunity = styled.div`
  display: flex;
  align-items: center;

  border-radius: 319px;
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

    @media (max-width: 770px) {
      left: 0;
    }
  }

  .right {
    right: -25px;

    @media (max-width: 770px) {
      right: 0;
    }
  }

  .absolute {
    position: absolute;
  }

  @media (max-width: 770px) {
    border-radius: 0px;

    padding: 30px 0px;

    flex-direction: column;

  }
`;

export const Comment = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;

  width: 463px;
  gap: 16px;

  color: #80ab9e;

  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;

  @media (max-width: 770px) {
    font-size: 12px;
  }

  p {
    font-weight: 700;
  }

  .asp {
    z-index: -1;
    top: 0px;
    left: 0px;

    @media (max-width: 770px) {
      top: -177px;
      left: 65px;
    }
  }

  @media (max-width: 770px) {
    width: 100%;

    img {
      width: 38px;
      height: 38px;
    }
  }
`;

export const DivImageUser = styled.div`
  width: 183px;
  height: 178px;

  @media (max-width: 770px) {
    width: 123px;
    height: 118px;

    border: 2px solid #00e3a5;
  }

  border: 7px solid #00e3a5;
  border-radius: 100%;

  img {
    width: 100%;
    height: 100%;
  }
`;

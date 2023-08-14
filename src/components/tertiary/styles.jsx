import { styled } from "styled-components";

import backgroundfuturistic from "./../../assets/backgroundfuturistic.png";

export const DivTertiary = styled.div`
  margin-top: 128px;
`;

export const Logos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 1447.085px;

  padding: 70px;
  margin: 0 auto;

  border-radius: 129.482px;
  background: #091d18;

  opacity: 0.5;
`;

export const DivAboutUs = styled.div`
  display: flex;

  gap: 132px;
  margin-top: 144px;
  padding: 80px 130px;
  margin-right: 136px;

  border-radius: 0px 300px 300px 0px;

  background: #09251e;
  background: rgba(9, 37, 30, 0.5);

  background-image: url(${backgroundfuturistic});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const TextAbout = styled.div`
  display: flex;
  flex-direction: column;

  width: 493.072px;

  gap: 8px;

  color: #80ab9e;

  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 160% */

  h1 {
    color: #f5fbf2;

    font-size: 36px;
    font-style: normal;
    font-weight: 700;
  }
`;

export const BtnLearnMore = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 318px;

  padding: 24px 48px;
  gap: 8px;
  margin-top: 82px;

  border-radius: 5px;
  border: 1px solid var(--01, #00e3a5);
  background-color: transparent;
  color: #fff;

  transition: all 0.3s;

  &:hover {
    background: #00e3a5;
    color: #080808;
  }
`;

export const DivImagesSecurity = styled.div`
  display: flex;
  position: relative;

  width: 100%;

  flex: 1;
  gap: 23px;
`;

export const MarketPlace = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 317px;
  height: 229px;

  position: relative;

  gap: 23px;

  border-radius: 15px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.03) 0%,
    rgba(255, 255, 255, 0) 100%
  );

  border: 1px solid #ffffff9b;
  backdrop-filter: blur(25px);

  position: absolute;
  top: 0;
  left: 0;

  span {
    color: #bdf3ff;

    font-size: 22px;
    font-weight: 500;
    line-height: 33px;
  }

  div {
    width: 97px;
    height: 97px;

    background: #ffb413;
    filter: blur(30px);

    position: absolute;
    top: 0;
    left: 50px;
  }
`;

export const DataProtection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 317px;
  height: 229px;

  gap: 23px;

  border-radius: 15px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.03) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  backdrop-filter: blur(25px);
  border: 1px solid #ffffff9b;

  position: relative;

  position: absolute;
  top: 250px;
  right: 210px;

  span {
    color: #bdf3ff;

    font-size: 22px;
    font-weight: 500;
    line-height: 33px;
  }

  div {
    width: 97px;
    height: 97px;

    background: #2fb8eb;
    filter: blur(30px);

    position: absolute;
    top: 0;
    left: 50px;
  }
`;

export const MoneyProtection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 317px;
  height: 229px;

  gap: 23px;

  border-radius: 15px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.03) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  border: 1px solid #ffffff9b;
  backdrop-filter: blur(25px);

  position: relative;

  position: absolute;
  top: 100px;
  right: -20px;
  span {
    color: #bdf3ff;

    font-size: 22px;
    font-weight: 500;
    line-height: 33px;
  }
  div {
    width: 97px;
    height: 97px;

    background: #ff5a13;
    filter: blur(30px);

    position: absolute;
    top: 0;
    right: 50px;
  }
`;

export const FastSecure = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 317px;
  height: 229px;

  gap: 23px;

  border: 1px solid #ffffff9b;
  backdrop-filter: blur(25px);

  position: relative;

  position: absolute;
  right: -130px;
  bottom: -160px;

  border-radius: 15px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.03) 0%,
    rgba(255, 255, 255, 0) 100%
  );

  span {
    font-size: 22px;
    font-weight: 500;
    line-height: 33px;
    color: #bdf3ff;
  }

  div {
    width: 97px;
    height: 97px;

    background: #00e3a5;
    filter: blur(30px);

    position: absolute;
    top: 0;
    right: 50px;
  }
`;

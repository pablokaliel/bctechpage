import styled from "styled-components";

import backgroundfooter from "./../../assets/backgroundfootertwo.png";
import backgroundfuturistic from "./../../assets/backgroundfuturistic.png";
import journey from "./../../assets/backgroundjourney.png";
import backgroundprimary from "./../../assets/backgroundprimary.png";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const DivPrimary = styled.div`
  padding: 30px 48px;
  background-image: url(${backgroundprimary});
  background-size: contain;
`;

export const Header = styled.header`
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 100px;
`;

export const Logo = styled.div`
  h1 {
    font-size: 45px;
    font-weight: 400;
    line-height: 36.4px;

    span {
      color: #00dd9c;
    }
  }
`;

export const Development = styled.div`
  display: flex;
  align-items: center;
  gap: 72px;

  a {
    color: #f5fbf2;
    text-decoration: none;
    position: relative;

    transition: all 0.3s;

    &:hover {
      color: var(--01, #00e3a5);
    }

    &::before {
      content: "";
      position: absolute;
      width: 0;
      height: 4px;
      border-radius: 29px;
      background: #00dd9c;
      bottom: -8px;
      left: 0;
      transition: width 0.3s ease-in-out;
    }

    &:hover::before {
      width: 48px;
    }
  }
`;


export const BtnJoin = styled.button`
  border: 0;
  background: transparent;
  color: #fff;
  display: flex;
  width: 206px;
  padding: 24px 48px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 5px;
  border: 1px solid var(--01, #00e3a5);
  transition: all 0.3s;

  &:hover {
    background: #00e3a5;
    color: #080808;
  }
`;

export const BuildFuture = styled.div`
  margin-top: 132px;
  display: flex;
  align-items: center;
`;

export const DivTextBuild = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  span {
    color: #80ab9e;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: 36.4px;
  }

  h1 {
    font-size: 52px;
    font-style: normal;
    font-weight: 700;
    line-height: 64px;
  }
`;

export const BtnGetPaper = styled.button`
  display: flex;
  width: 318px;
  border: 0;
  margin-top: 72px;
  height: 72px;
  padding: 24px 48px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 5px;
  background: var(--01, #00e3a5);
  color: #181818;
  font-weight: bold;
  transition: all 0.3s;

  &:hover {
    background: #03b485;
  }
`;

export const DivLogo = styled.div`
  img {
    width: 935.5px;
    height: 583.163px;
  }
`;

export const DivSecondary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 128px;
`;

export const DivCurrency = styled.div`
  text-align: center;
  span {
    color: #80ab9e;
    text-align: center;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }

  h1 {
    color: #f5fbf2;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 54px */
  }
`;

export const DivInfoCurrency = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 48px;
`;

export const InfoCurrency = styled.div`
  h1 {
    color: var(--01, #00e3a5);
    text-align: center;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 54px */
  }
  span {
    color: #9e9e9e;
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
`;

export const DivTertiary = styled.div`
  margin-top: 128px;
`;

export const Logos = styled.div`
  width: 1447.085px;
  display: flex;
  align-items: center;
  padding: 70px;
  border-radius: 129.482px;
  background: #091d18;
  margin: 0 auto;
  opacity: 0.5;
  justify-content: space-between;
`;

export const DivAboutUs = styled.div`
  display: flex;
  gap: 132px;
  border-radius: 0px 300px 300px 0px;
  background: #09251e;
  margin-top: 144px;
  padding: 80px 130px;
  background: rgba(9, 37, 30, 0.5);
  margin-right: 136px;

  background-image: url(${backgroundfuturistic});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const TextAbout = styled.div`
  display: flex;
  width: 493.072px;
  flex-direction: column;
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
  width: 318px;
  padding: 24px 48px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 5px;
  border: 1px solid var(--01, #00e3a5);
  background-color: transparent;
  color: #fff;
  margin-top: 82px;

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
  width: 317px;
  height: 229px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  span {
    font-size: 22px;
    font-weight: 500;
    line-height: 33px;
    color: #bdf3ff;
  }
  gap: 23px;
  border-radius: 15px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.03) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  position: relative;
  div {
    width: 97px;
    height: 97px;
    background: #ffb413;
    filter: blur(30px);
    position: absolute;
    top: 0;
    left: 50px;
  }
  border: 1px solid #ffffff9b;
  backdrop-filter: blur(25px);
  position: absolute;
  top: 0;
  left: 0;
`;

export const DataProtection = styled.div`
  width: 317px;
  height: 229px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  span {
    font-size: 22px;
    font-weight: 500;
    line-height: 33px;
    color: #bdf3ff;
  }
  gap: 23px;
  border-radius: 15px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.03) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  position: relative;
  div {
    width: 97px;
    height: 97px;
    background: #2fb8eb;
    filter: blur(30px);
    position: absolute;
    top: 0;
    left: 50px;
  }
  border: 1px solid #ffffff9b;
  backdrop-filter: blur(25px);
  position: absolute;
  top: 250px;
  right: 210px;
`;

export const MoneyProtection = styled.div`
  width: 317px;
  height: 229px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  span {
    font-size: 22px;
    font-weight: 500;
    line-height: 33px;
    color: #bdf3ff;
  }
  gap: 23px;
  border-radius: 15px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.03) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  position: relative;
  div {
    width: 97px;
    height: 97px;
    background: #ff5a13;
    filter: blur(30px);
    position: absolute;
    top: 0;
    right: 50px;
  }
  border: 1px solid #ffffff9b;
  backdrop-filter: blur(25px);
  position: absolute;
  top: 100px;
  right: -20px;
`;

export const FastSecure = styled.div`
  width: 317px;
  height: 229px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 23px;
  border-radius: 15px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.03) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  position: relative;
  border: 1px solid #ffffff9b;
  backdrop-filter: blur(25px);
  position: absolute;
  right: -130px;
  bottom: -160px;

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

export const DivQuaternary = styled.div`
  background: #0a1619;
  text-align: center;
  margin-top: 138px;
  display: flex;
  flex-direction: column;
  gap: 63px;
  padding: 80px 0px;

  h1 {
    color: #f5fbf2;
    text-align: center;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
  }

  .btn {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const DivEnd = styled.div`
  height: 225.557px;
  margin-left: 135px;
  border-radius: 295px 0px 0px 295px;
  background: rgba(0, 221, 156, 0.05);
  background-image: url(${journey});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: space-between;
  padding: 24px;
`;

export const DivStart = styled.div`
  padding: 24px;
  height: 225.557px;
  margin-right: 135px;
  border-radius: 0px 295px 295px 0px;
  background: rgba(0, 221, 156, 0.05);
  background-image: url(${journey});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: flex-end;
  justify-content: space-between;
`;

export const DivJourney = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const BtnLetsMore = styled.button`
  display: flex;
  width: 318px;
  padding: 24px 48px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 5px;
  border: 1px solid var(--01, #00e3a5);
  background: transparent;
  color: #fff;
  transition: all 0.3s;

  &:hover {
    background: #00e3a5;
    color: #080808;
  }
`;

export const DivText = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  h1 {
    font-size: 129px;
    font-style: normal;
    font-weight: 700;
    line-height: 150px;
    -webkit-text-stroke: 0.8px #1f4439;
    -webkit-text-fill-color: transparent;
  }
`;

export const Text = styled.div`
  max-width: 450px;

  p {
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
  }
  span {
    color: #80ab9e;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
  }
`;

export const DivQuintenary = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 132px;
  border-radius: 0px 300px 300px 0px;
  margin-top: 144px;
  padding: 130px;
  margin-right: 136px;
  background-image: url(${backgroundfuturistic});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const DivCommunity = styled.div`
  border-radius: 319.5px;
  background: rgba(0, 221, 156, 0.1);
  display: flex;
  align-items: center;

  button{
    background-color:transparent;
    border:0;
    transition: all 0.3s;
    
    &:hover{
      scale:1.1;
    }
  }

  gap: 90px;
  padding: 70px;
  position: relative;

  .left {
    left: -20px;
  }

  .right {
    right: -20px;
  }

  .absolute {
    position: absolute;
  }
`;

export const Comment = styled.div`
  width: 463.978px;
  position: relative;
  display: flex;
  flex-direction: column;
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
  border: 3px solid #00e3a5;
  border-radius: 100%;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const DivSexternary = styled.footer`
  background-image: url(${backgroundfooter});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-top: 132px;
  background-color: rgba(9, 35, 38, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 124px 0px;
`;

export const DivSocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-right: 244px;
`;

export const DivSocial = styled.div`
  display: flex;
  gap: 24px;
`;

export const DivBcTech = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 416.271px;

  h1 {
    font-size: 34px;
    font-style: normal;
    font-weight: 400;
    line-height: 36.4px;
    span {
      color: #00e3a5;
    }
  }

  span {
    color: var(--04, #80ab9e);
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
  }
`;

export const Social = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 100%;
  border: 2px solid #80ab9e;
  transition: all 0.3s;
  svg {
    color: #80ab9e;
  }
  &:hover {
    border: 2px solid #00e3a5;
    scale:1.1;
    svg {
      color: #00e3a5;
    }
  }
`;

export const DivSlatter = styled.div`
  margin-left: 84px;
  display: flex;
  flex-direction: column;
  gap: 70px;
`;

export const DivNewSlatter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 38px;
  h1 {
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
  }
`;

export const DivInput = styled.div`
  display: flex;
  input {
    width: 469px;
    padding: 24px;
    border-radius: 5px 0px 0px 5px;
    border: 1px solid var(--01, #ffffff);
    background: transparent;

    color: #00e3a5;
    font-size: 18px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    transition: all 0.3s;
    &:focus {
      border: 1px solid var(--01, #00e3a5);
      outline: none;
    }
  }

  button {
    display: flex;
    width: 194px;
    padding: 24px 48px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 0px 5px 5px 0px;
    background: var(--01, #00e3a5);
    border: none;
  }
`;

export const DivOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  a {
    margin-bottom: 10px;
    color: var(--04, #80ab9e);
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 50.5px;
    transition: all 0.3s;
    text-decoration: none;
    &:hover {
      color: #f5fbf2;
      font-size: 24px;
      font-style: normal;
      font-weight: bold;
    }
  }
`;

export const Divider = styled.div`
  background: rgba(255, 255, 255, 0.32);
  width: 1px;
  height: 650px;
`;

export const DividerSlatter = styled.div`
  background: rgba(255, 255, 255, 0.32);
  width: 100%;
  height: 1px;
`;

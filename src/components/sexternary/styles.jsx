import { styled } from "styled-components";
import backgroundfooter from "./../../assets/backgroundfootertwo.png";

export const DivSexternary = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(${backgroundfooter});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  margin-top: 132px;
  padding: 124px 0px;

  background-color: rgba(9, 35, 38, 0.4);
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
    scale: 1.1;

    svg {
      color: #00e3a5;
    }
  }
`;

export const DivSlatter = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 84px;
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
    justify-content: center;
    align-items: center;

    width: 194px;

    padding: 24px 48px;
    gap: 8px;

    border-radius: 0px 5px 5px 0px;
    border: none;
    background: var(--01, #00e3a5);

    transition: all 0.3s;

    &:hover {
      background: #03b485;
      color: #fff;
    }
  }
`;

export const DivOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  a {
    margin-bottom: 10px;

    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 50.5px;
    
    color: var(--04, #80ab9e);
    text-decoration: none;

    transition: all 0.3s;

    &:hover {
      color: #f5fbf2;

      font-size: 24px;
      font-style: normal;
      font-weight: bold;
    }
  }
`;

export const Divider = styled.div`
  width: 1px;
  height: 650px;

  background: rgba(255, 255, 255, 0.32);
`;

export const DividerSlatter = styled.div`
  width: 100%;
  height: 1px;

  background: rgba(255, 255, 255, 0.32);
`;

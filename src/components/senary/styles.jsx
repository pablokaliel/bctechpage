import { styled } from "styled-components";
import backgroundfooter from "./../../assets/backgroundfootertwo.png";

export const DivSenary = styled.footer`
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

  @media (max-width: 770px) {
    padding: 15px;
    flex-direction: column;
  }
`;

export const DivSocialMedia = styled.div`
  display: flex;
  flex-direction: column;

  gap: 32px;
  margin-right: 244px;

  @media (max-width: 770px) {
    margin-right: 0;
    margin-bottom: 32px;

    text-align: center;
  }
`;

export const DivSocialDesktop = styled.div`
  gap: 24px;
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    gap: 25px;
  }

  @media (max-width: 770px) {
    justify-content: center;
  }

  @media (max-width: 770px) {
    display: none;
  }
`;

export const DivSocialMobile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 24px;

  div {
    display: flex;
    gap: 25px;
  }

  @media (max-width: 770px) {
    justify-content: center;

    h1 {
      font-size: 20px;
    }
  }

  @media (min-width: 770px) {
    display: none;
  }
`;

export const DivBcTech = styled.div`
  display: flex;
  flex-direction: column;

  gap: 32px;
  width: 416px;

  h1 {
    font-size: 34px;
    font-style: normal;
    font-weight: 400;
    line-height: 36px;

    @media (max-width: 770px) {
      font-size: 20px;
    }
    span {
      color: #00e3a5;
    }
  }

  span {
    color: #80ab9e;

    @media (max-width: 770px) {
      font-size: 14px;
    }

    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
  }

  @media (max-width: 770px) {
    width: 100%;
    text-align: center;
  }
`;

export const SocialMobile = styled.a`
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

  @media (min-width: 770px) {
    display: none;
  }

  @media (max-width: 770px) {
    width: 32px;
    height: 32px;
  }
`;

export const SocialDesktop = styled.a`
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

  @media (max-width: 770px) {
    display: none;
  }
`;

export const LicenseDesktop = styled.p`
  @media (max-width: 770px) {
    display: none;
  }
`;
export const LicenseMobile = styled.p`
  @media (max-width: 770px) {
    text-align: center;
    margin-bottom: 24px;
  }

  @media (min-width: 770px) {
    display: none;
  }
`;

export const DivSlatter = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 84px;
  gap: 70px;

  @media (max-width: 770px) {
    margin-left: 0px;
  }
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
    @media (max-width: 770px) {
      font-size: 24px;
    }
  }
`;

export const DivInput = styled.div`
  display: flex;

  input {
    width: 469px;
    @media (max-width: 770px) {
      width: 100%;
    }

    padding: 24px;

    border-radius: 5px 0px 0px 5px;
    border: 1px solid #ffffff;
    background: transparent;

    color: #00e3a5;

    font-size: 18px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;

    transition: all 0.3s;

    &:focus {
      border: 1px solid #00e3a5;
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
    background: #00e3a5;

    transition: all 0.3s;

    &:hover {
      background: #03b485;
      color: #fff;
    }
    @media (max-width: 770px) {
      font-size: 14px;
    }
  }

  @media (max-width: 770px) {
    width: 100%;
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

    color: #80ab9e;
    text-decoration: none;

    transition: all 0.3s;

    @media (max-width: 770px) {
      font-size: 16px;
    }

    &:hover {
      color: #f5fbf2;

      font-size: 24px;
      font-style: normal;
      font-weight: bold;
    }
  }

  @media (max-width: 770px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const Divider = styled.div`
  width: 1px;
  height: 650px;

  background: rgba(255, 255, 255, 0.32);

  @media (max-width: 770px) {
    display: none;
  }
`;

export const DividerSlatter = styled.div`
  width: 100%;
  height: 1px;

  background: rgba(255, 255, 255, 0.32);
`;

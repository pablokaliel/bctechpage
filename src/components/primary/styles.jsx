import { styled } from "styled-components";
import backgroundprimary from "./../../assets/backgroundprimary.png";

export const DivPrimary = styled.div`
  background-image: url(${backgroundprimary});
  background-size: cover;

  padding: 30px 48px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  height: 150px;

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
    position: relative;

    color: #f5fbf2;
    text-decoration: none;

    transition: all 0.3s;

    &:hover {
      color: var(--01, #00e3a5);
    }

    &::before {
      position: absolute;
      bottom: -8px;
      left: 0;

      content: "";

      width: 0;
      height: 4px;

      border-radius: 29px;
      background: #00dd9c;

      transition: width 0.3s ease-in-out;
    }

    &:hover::before {
      width: 70%;
    }
  }
`;

export const BtnJoin = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid var(--01, #00e3a5);
  border-radius: 5px;

  background: transparent;
  color: #fff;

  width: 206px;

  padding: 24px 48px;
  gap: 8px;

  transition: all 0.3s;

  &:hover {
    background: #00e3a5;
    color: #080808;
  }
`;

export const BuildFuture = styled.div`
  display: flex;
  align-items: center;

  margin-top: 132px;
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
  justify-content: center;
  align-items: center;

  width: 318px;
  height: 72px;
  
  border-radius: 5px;
  border: 0;

  background: var(--01, #00e3a5);
  color: #181818;

  margin-top: 72px;
  padding: 24px 48px;
  gap: 8px;

  font-weight: bold;

  transition: all 0.3s;

  &:hover {
    background: #03b485;
    color: #fff;
  }
`;

export const DivLogo = styled.div`
  img {
    width: 935.5px;
    height: 583.163px;
  }
`;

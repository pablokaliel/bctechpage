import { styled } from "styled-components";
import backgroundprimary from "./../../assets/backgroundprimary.png";

export const DivPrimary = styled.div`
  background-image: url(${backgroundprimary});
  background-size: cover;

  padding: 30px 48px;

  .custom-modal {
    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;

    width: 100%;
    height: 100%;

    background-color: rgba(0, 0, 0, 0.5);
  }

  .modal-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    position:relative;
    max-width: 80%;
    width: 200px;

    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #0d0d0d;

    gap: 12px;
    padding: 20px;

    border-radius: 8px;
  }

  .modal-content a {
    display: block;
    margin: 10px 0;

    text-decoration: none;
    color: #00e3a5;
    font-weight: bold;
  }

  .modal-content button {
    background-color: #333;
    color: white;

    position:absolute;
    top:3px;
    right:3px;

    border: none;
    border-radius: 4px;

    padding: 10px 20px;

    cursor: pointer;
  }

  .modal-content button:hover {
    background-color: #555;
  }

  @media (max-width: 770px) {
    padding: 15px;
  }
`;

export const HeaderDesktop = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  height: 150px;

  border-radius: 100px;

  @media (max-width: 770px) {
    display: none;
  }
`;

export const HeaderMobile = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;

  img {
    width: 40px;
    height: 40px;
  }

  @media (min-width: 770px) {
    display: none;
  }
`;

export const Perfil = styled.div`
  width: 40px;
  height: 40px;

  position: relative;

  div {
    position: absolute;
    top: 0;
    right: 0;

    width: 8px;
    height: 8px;

    background: #00dd9c;
    border-radius: 999px;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Logo = styled.div`
  h1 {
    font-size: 45px;
    font-weight: 400;
    line-height: 36.4px;

    @media (max-width: 770px) {
      font-size: 32px;
    }

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
      color: #00e3a5;
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

  border: 1px solid #00e3a5;
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

  @media (max-width: 770px) {
    flex-direction: column;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

export const DivTextBuild = styled.div`
  display: flex;
  flex-direction: column;

  gap: 16px;

  @media (max-width: 770px) {
    text-align: center;
  }

  span {
    color: #80ab9e;

    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: 36.4px;

    @media (max-width: 770px) {
      font-size: 24px;
    }
  }

  h1 {
    font-size: 52px;
    font-style: normal;
    font-weight: 700;
    line-height: 64px;

    @media (max-width: 770px) {
      font-size: 40px;
    }
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

  background: #00e3a5;
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

  @media (max-width: 770px) {
    width: 201px;
    height: 56px;

    margin-bottom: 30px;
  }
`;

export const DivLogo = styled.div`
  img {
    width: 935px;
    height: 583px;

    @media (max-width: 770px) {
      width: 375px;
      height: 236px;
    }
  }
`;

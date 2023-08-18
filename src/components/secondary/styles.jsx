import { styled } from "styled-components";

export const DivSecondary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 128px;

  @media (max-width: 770px) {
    margin-top: 70px;
    padding: 15px;

    img {
      width: 100%;
      height: 245px;
    }
  }
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
    line-height: 150%;
  }
`;

export const DivInfoCurrency = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 48px;
  gap: 45px;
`;

export const InfoCurrency = styled.div`
  h1 {
    color: #00e3a5;

    text-align: center;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
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

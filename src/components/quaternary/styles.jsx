import { styled } from "styled-components";
import journey from "./../../assets/backgroundjourney.png";

export const DivQuaternary = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  background: #0a1619;

  margin-top: 138px;

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

  @media (max-width: 770px) {
    margin-top: 600px;
  }
`;

export const DivEnd = styled.div`
  display: flex;
  justify-content: space-between;

  height: 225px;

  margin-left: 135px;
  padding: 24px;

  border-radius: 295px 0px 0px 295px;
  background: rgba(0, 221, 156, 0.05);

  background-image: url(${journey});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 770px) {
    margin-left: 0;
  }
`;

export const DivStart = styled.div`
  display: flex;
  justify-content: flex-end;
  justify-content: space-between;

  padding: 24px;
  margin-right: 135px;

  height: 225px;

  border-radius: 0px 295px 295px 0px;
  background: rgba(0, 221, 156, 0.05);

  background-image: url(${journey});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 770px) {
    margin-right: 0;
    height: initial;
  }
`;

export const DivJourney = styled.div`
  display: flex;
  flex-direction: column;

  gap: 32px;
`;

export const BtnLetsMore = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 318px;

  padding: 24px 48px;
  gap: 8px;

  border-radius: 5px;
  border: 1px solid #00e3a5;

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

    @media (max-width: 770px) {
      font-size: 32px;
    }
  }
`;

export const Text = styled.div`
  max-width: 450px;

  p {
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;

    @media (max-width: 770px) {
      font-size: 18px;
    }
  }

  span {
    color: #80ab9e;

    @media (max-width: 770px) {
      font-size: 12px;
    }

    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
  }

  @media (max-width: 770px) {
    max-width: 100%;
  }
`;

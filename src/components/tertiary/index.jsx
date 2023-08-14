import { DivTertiary, Logos, DivAboutUs, TextAbout, BtnLearnMore, DivImagesSecurity, MarketPlace, DataProtection, MoneyProtection, FastSecure } from "./styles";

import protection from "../../assets/protection.svg";
import marketplace from "../../assets/marketplace.svg";
import payment from "../../assets/payment.svg";
import fastsecurity from "../../assets/fastsecurity.svg";

import blockchain from "../../assets/blockchain.svg";
import coinbase from "../../assets/coinbase.svg";
import binance from "../../assets/binance.svg";
import bitmex from "../../assets/bitmex.svg";

function ContainerTertiary() {
  return (
    <DivTertiary>
      <Logos>
        <img src={coinbase} />
        <img src={blockchain} />
        <img src={binance} />
        <img src={bitmex} />
      </Logos>

      <DivAboutUs>
        <div>
          <TextAbout>
            <h1>About Us</h1>
            <span>
              A Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown
            </span>
            <span>
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown
            </span>
          </TextAbout>

          <BtnLearnMore>Learn More</BtnLearnMore>
        </div>

        <DivImagesSecurity>
          <MarketPlace>
            <img src={marketplace} />
            <span>Marketplace</span>
            <div />
          </MarketPlace>

          <DataProtection>
            <img src={protection} />
            <span>Data Protection</span>
            <div />
          </DataProtection>

          <MoneyProtection>
            <img src={payment} />
            <span>Money Protection</span>
            <div />
          </MoneyProtection>

          <FastSecure>
            <img src={fastsecurity} />
            <span>Fast & Secure</span>
            <div />
          </FastSecure>
        </DivImagesSecurity>
      </DivAboutUs>
    </DivTertiary>
  );
}

export default ContainerTertiary;

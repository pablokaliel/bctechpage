import {
  Container,
  DivPrimary,
  Header,
  Logo,
  Development,
  BtnJoin,
  BuildFuture,
  DivTextBuild,
  BtnGetPaper,
  DivLogo,
  DivSecondary,
  DivCurrency,
  DivInfoCurrency,
  InfoCurrency,
  DivTertiary,
  Logos,
  DivAboutUs,
  TextAbout,
  BtnLearnMore,
  DivImagesSecurity,
  MarketPlace,
  DataProtection,
  MoneyProtection,
  FastSecure,
  DivQuaternary,
  DivEnd,
  DivStart,
  BtnLetsMore,
  DivJourney,
  DivText,
  Text,
  DivQuintenary,
  DivCommunity,
  DivImageUser,
  Comment,
  DivSexternary,
  DivSocialMedia,
  DivSocial,
  DivBcTech,
  Social,
  DivSlatter,
  DivNewSlatter,
  DivInput,
  DivOptions,
  Divider,
  DividerSlatter,
} from "./styles";

import city from "../../assets/citypng.png";
import world from "../../assets/backgroundworld.png";

import blockchain from "../../assets/blockchain.svg";
import coinbase from "../../assets/coinbase.svg";
import binance from "../../assets/binance.svg";
import bitmex from "../../assets/bitmex.svg";

import asp from "../../assets/asp.svg";
import user from "../../assets/user.png";
import arrowright from "../../assets/arrowright.svg";
import arrowleft from "../../assets/arrowleft.svg";

import technology from "../../assets/technology.svg";
import research from "../../assets/research.svg";
import consulting from "../../assets/consulting.svg";

import protection from "../../assets/protection.svg";
import marketplace from "../../assets/marketplace.svg";
import payment from "../../assets/payment.svg";
import fastsecurity from "../../assets/fastsecurity.svg";

import { FacebookLogo, InstagramLogo, TwitterLogo } from "@phosphor-icons/react";

function Home() {
  return (
    <Container>

        <DivPrimary>
          <Header>
            <Logo>
              <h1>
                B<span>.</span>CTech
              </h1>
            </Logo>

            <Development>
              <a href="#">About Us</a>
              <a href="#">Services</a>
              <a href="#">How it works</a>
              <a href="#">Community</a>
            </Development>


              <BtnJoin>Join for Free</BtnJoin>

          </Header>

          <BuildFuture>
              <div>
              <DivTextBuild>
                <span>Build the Future with </span>
                <h1>Blockchain technology and Currency</h1>
              </DivTextBuild>

              <BtnGetPaper>Get Whitepaper</BtnGetPaper>
              </div>

            <DivLogo>
              <img src={city} />
            </DivLogo>

          </BuildFuture>
        </DivPrimary>

        <DivSecondary>

            <DivCurrency>
              <span>Archievements</span>
              <h1>Full Decentralised and Currency Security</h1>
            </DivCurrency>

            <DivInfoCurrency>
              <InfoCurrency>
                <h1>1M+</h1>
                <span>Happy Users</span>
              </InfoCurrency>

              <InfoCurrency>
                <h1>1M+</h1>
                <span>Happy Users</span>
              </InfoCurrency>

              <InfoCurrency>
                <h1>1M+</h1>
                <span>Happy Users</span>
              </InfoCurrency>
            </DivInfoCurrency>

            <img src={world} />
        </DivSecondary>

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
                  A Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
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

        <DivQuaternary>
          <h1>How Do We Work Our System And Or Journey</h1>

          <DivJourney>

            <DivEnd>
              <DivText>
                <h1>01</h1>
                <Text>
                  <p>Consulting</p>
                  <span>
                    A Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,{" "}
                  </span>
                </Text>
              </DivText>
              <img src={consulting} />
            </DivEnd>

            <DivStart>
              <img src={research} />
              <DivText>
                <Text>
                  <p>Research & Complaince</p>
                  <span>
                    A Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                  </span>
                </Text>
                <h1>02</h1>
              </DivText>
            </DivStart>

            <DivEnd>
              <DivText>
                <h1>03</h1>
                <Text>
                  <p>Consulting</p>
                  <span>
                    A Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,{" "}
                  </span>
                </Text>
              </DivText>
              <img src={technology} />
            </DivEnd>
          </DivJourney>

          <div className="btn">
            <BtnLetsMore>Journey</BtnLetsMore>
          </div>
        </DivQuaternary>

        <DivQuintenary>
          <h1>Our community with User Reviews</h1>

          <DivCommunity>
            <button className="left absolute"><img  src={arrowleft} /></button>
            <button className="right absolute"><img  src={arrowright} /></button>

            <DivImageUser>
              <div>
                <img src={user} />
              </div>
            </DivImageUser>

            <Comment>
              <img className="asp absolute" src={asp} />
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tenetur voluptas aliquid recusandae dolores! Ipsa, voluptatibus!
                Ullam quidem animi magnam culpa asperiores. Tempora libero
                officiis ipsum reiciendis sunt, commodi incidunt. Obcaecati.
              </span>
              <p>-Dake M. Chile, Business Owner of Bellie</p>
            </Comment>
          </DivCommunity>
        </DivQuintenary>

        <DivSexternary>
          <DivSocialMedia>

            <DivBcTech>
              <h1>
                B<span>.</span>CTech
              </h1>
              <span>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Corrupti praesentium at dolores modi repudiandae ullam facilis
                repellat eum consequatur inventore! Dolorum incidunt
                necessitatibus amet architecto accusantium fugit aperiam
                eligendi labore!
              </span>
            </DivBcTech>

            <DivSocial>

              <Social href="#">
                <FacebookLogo size={32} />
              </Social>

              <Social href="#">
                <InstagramLogo size={32} />
              </Social>

              <Social href="#">
                <TwitterLogo size={32} />
              </Social>
            </DivSocial>

            <p>All Rights reserved@2023 by PabloKaliel</p>
          </DivSocialMedia>

          <Divider />

          <DivSlatter>
            <DivNewSlatter>
              <h1>Newslatter</h1>

              <DivInput>
                <input />
                <button>SUBMIT</button>
              </DivInput>
            </DivNewSlatter>

            <DividerSlatter />

            <DivOptions>
              <a href="#">About Us</a>
              <a href="#">Support</a>
              <a href="#">Whitepaper</a>
              <a href="#">Help & Support</a>
              <a href="#">Blog</a>
              <a href="#">Community</a>
              <a href="#">Activity</a>
              <a href="#">Contact</a>
              <a href="#">Autor Profile</a>
            </DivOptions>
          </DivSlatter>
        </DivSexternary>

    </Container>
  );
}

export default Home;

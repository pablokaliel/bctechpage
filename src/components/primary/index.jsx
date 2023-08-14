import { DivPrimary, Header, Logo, Development, BtnJoin, BuildFuture, DivTextBuild, BtnGetPaper, DivLogo } from "./styles";

import city from "../../assets/citypng.png";

function ContainerPrimary() {
  return (
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
  );
}

export default ContainerPrimary;

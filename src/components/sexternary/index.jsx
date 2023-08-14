import { DivSexternary, DivSocialMedia, DivSocial, DivBcTech, Social, DivSlatter, DivNewSlatter, DivInput, DivOptions, Divider, DividerSlatter } from "./styles";

import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
} from "@phosphor-icons/react";

function ContainerSexternary() {
  return (
    <DivSexternary>
      <DivSocialMedia>
        <DivBcTech>
          <h1>
            B<span>.</span>CTech
          </h1>
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
            praesentium at dolores modi repudiandae ullam facilis repellat eum
            consequatur inventore! Dolorum incidunt necessitatibus amet
            architecto accusantium fugit aperiam eligendi labore!
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
  );
}

export default ContainerSexternary;

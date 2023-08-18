import {
  DivSenary,
  DivSocialMedia,
  DivSocialDesktop,
  DivSocialMobile,
  LicenseDesktop,
  LicenseMobile,
  DivBcTech,
  SocialDesktop,
  SocialMobile,
  DivSlatter,
  DivNewSlatter,
  DivInput,
  DivOptions,
  Divider,
  DividerSlatter,
} from "./styles";

import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
} from "@phosphor-icons/react";

function ContainerSenary() {
  return (
    <DivSenary>
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

        <DivSocialDesktop>
          <h1>Social Media</h1>
          <div>
            <SocialDesktop href="#">
              <FacebookLogo size={32} />
            </SocialDesktop>

            <SocialDesktop href="#">
              <InstagramLogo size={32} />
            </SocialDesktop>

            <SocialDesktop href="#">
              <TwitterLogo size={32} />
            </SocialDesktop>
          </div>
        </DivSocialDesktop>

        <LicenseDesktop>All Rights reserved@2023 by PabloKaliel</LicenseDesktop>
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

        <DivSocialMobile>
          <h1>Social Media</h1>
          <div>
            <SocialMobile href="#">
              <FacebookLogo size={24} />
            </SocialMobile>

            <SocialMobile href="#">
              <InstagramLogo size={24} />
            </SocialMobile>

            <SocialMobile href="#">
              <TwitterLogo size={24} />
            </SocialMobile>
          </div>
        </DivSocialMobile>

        <LicenseMobile>All Rights reserved@2023 by PabloKaliel</LicenseMobile>
      </DivSlatter>
    </DivSenary>
  );
}

export default ContainerSenary;

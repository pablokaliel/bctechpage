import React, { useState } from "react";
import {
  DivPrimary,
  HeaderDesktop,
  HeaderMobile,
  Perfil,
  Logo,
  Development,
  BtnJoin,
  BuildFuture,
  DivTextBuild,
  BtnGetPaper,
  DivLogo,
} from "./styles";

import perfil from "../../assets/perfil.png";
import menu from "../../assets/menu.svg";
import city from "../../assets/citypng.png";

function ContainerPrimary() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <DivPrimary>
      <HeaderDesktop>
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
      </HeaderDesktop>

      <HeaderMobile>
        <img src={menu} onClick={openModal} />
        <Logo>
          <h1>
            B<span>.</span>CTech
          </h1>
        </Logo>
        <Perfil>
          <img src={perfil} />
          <div />
        </Perfil>
      </HeaderMobile>

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

      {isModalOpen && (
        <div className="custom-modal">
          <div className="modal-content">
            <a href="#" onClick={closeModal}>
              About
            </a>
            <a href="#" onClick={closeModal}>
              Services
            </a>
            <a href="#" onClick={closeModal}>
              How it works
            </a>
            <a href="#" onClick={closeModal}>
              Community
            </a>
            <button onClick={closeModal}>X</button>
          </div>
        </div>
      )}
    </DivPrimary>
  );
}

export default ContainerPrimary;

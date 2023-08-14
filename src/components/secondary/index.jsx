import { DivSecondary, DivCurrency, DivInfoCurrency, InfoCurrency } from "./styles";

import world from "../../assets/backgroundworld.png";

function ContainerSecondary() {
  return (
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
  );
}

export default ContainerSecondary;

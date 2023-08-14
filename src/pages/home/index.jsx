import { Container } from "./styles";

import ContainerPrimary from "../../components/primary";
import ContainerSecondary from "../../components/secondary";
import ContainerTertiary from "../../components/tertiary";
import ContainerQuaternary from "../../components/quaternary";
import ContainerQuintenary from "../../components/quintenary";
import ContainerSexternary from "../../components/sexternary";

function Home() {
  return (
    <Container>
      <ContainerPrimary />
      <ContainerSecondary />
      <ContainerTertiary />
      <ContainerQuaternary />
      <ContainerQuintenary />
      <ContainerSexternary />
    </Container>
  );
}

export default Home;

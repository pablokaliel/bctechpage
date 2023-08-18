import { Container } from "./styles";

import ContainerPrimary from "../../components/primary";
import ContainerSecondary from "../../components/secondary";
import ContainerTertiary from "../../components/tertiary";
import ContainerQuaternary from "../../components/quaternary";
import ContainerQuinary from "../../components/quinary";
import ContainerSexternary from "../../components/senary";

function Home() {
  return (
    <Container>
      <ContainerPrimary />
      <ContainerSecondary />
      <ContainerTertiary />
      <ContainerQuaternary />
      <ContainerQuinary />
      <ContainerSexternary />
    </Container>
  );
}

export default Home;

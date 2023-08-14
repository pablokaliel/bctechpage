import { DivQuaternary, DivEnd, DivStart, BtnLetsMore, DivJourney, DivText, Text } from "./styles";

import technology from "../../assets/technology.svg";
import research from "../../assets/research.svg";
import consulting from "../../assets/consulting.svg";

function ContainerQuaternary() {
  return (
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
  );
}

export default ContainerQuaternary;

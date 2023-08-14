import { DivQuintenary, DivCommunity, DivImageUser, Comment } from "./styles";

import asp from "../../assets/asp.svg";
import user from "../../assets/user.png";
import arrowright from "../../assets/arrowright.svg";
import arrowleft from "../../assets/arrowleft.svg";

function ContainerQuintenary() {
  return (
    <DivQuintenary>
      <h1>Our community with User Reviews</h1>

      <DivCommunity>
        <button className="left absolute">
          <img src={arrowleft} />
        </button>
        <button className="right absolute">
          <img src={arrowright} />
        </button>

        <DivImageUser>
          <div>
            <img src={user} />
          </div>
        </DivImageUser>

        <Comment>
          <img className="asp absolute" src={asp} />
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
            voluptas aliquid recusandae dolores! Ipsa, voluptatibus! Ullam
            quidem animi magnam culpa asperiores. Tempora libero officiis ipsum
            reiciendis sunt, commodi incidunt. Obcaecati.
          </span>
          <p>-Dake M. Chile, Business Owner of Bellie</p>
        </Comment>
      </DivCommunity>
    </DivQuintenary>
  );
}

export default ContainerQuintenary;

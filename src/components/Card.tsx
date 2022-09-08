import {
  StyledCard,
  StyledCardBody,
  StyledCardButton,
  StyledCardIcon,
  StyledCardTitle,
} from "../styled/StyledCard.styled";

import Divider from "../assets/images/pattern-divider-desktop.svg";
import Dice from "../assets/images/icon-dice.svg";

import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

type Props = {
  advice: string;
  adviceId: number;
  getNewAdvice: () => void;
};

const Card = ({ advice, adviceId, getNewAdvice }: Props) => {
  return (
    <StyledCard>
      <StyledCardTitle> Advice #{adviceId}</StyledCardTitle>
      <div>
        <StyledCardBody>
          <FaQuoteLeft />
          {advice}
          <FaQuoteRight />
        </StyledCardBody>
      </div>
      <StyledCardIcon src={Divider} alt="divider" />
      <StyledCardButton onClick={getNewAdvice}>
        <img src={Dice} alt="button dice icon" />
      </StyledCardButton>
    </StyledCard>
  );
};

export default Card;

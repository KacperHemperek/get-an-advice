import styled from "styled-components";

export const StyledCard = styled.div`
  margin: 0 1rem;
  max-width: 550px;
  padding: 1.5rem 1rem;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.neutral.darkGrayishBlue};
  color: white;
  border-radius: 16px;

  @media (min-width: ${({ theme }) => theme.tablet}) {
    padding: 2rem 3rem;
  }
`;

export const StyledCardTitle = styled.h1`
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-size: 0.6rem;
  font-weight: 800;
  color: ${({ theme }) => theme.primary.neon};
`;

export const StyledCardBody = styled.p`
  padding: 2.5rem 0;
  font-size: 1.2rem;
  text-align: center;
  margin: 0;
  letter-spacing: 2px;
  font-weight: 800;

  @media (min-width: ${({ theme }) => theme.tablet}) {
    font-size: 1.8rem;
  }

  svg {
    width: 0.45rem;
    margin: 0 3px;
    translate: 0 -3px;

    @media (min-width: ${({ theme }) => theme.tablet}) {
      width: 0.6rem;
      translate: 0 -4px;
    }
  }
`;

export const StyledCardIcon = styled.img`
  width: 100%;
  margin-bottom: 2rem;
`;

export const StyledCardButton = styled.button`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 1.2rem;
  border-radius: 100%;
  translate: 0 50%;
  background-color: ${({ theme }) => theme.primary.neon};
  transition: all 0.1s ease-out;
  cursor: pointer;

  img {
    width: 1.5rem;
  }

  &:hover {
    box-shadow: 0 0 30px -2px ${({ theme }) => theme.primary.neon};
  }
`;

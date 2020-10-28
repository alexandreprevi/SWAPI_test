import styled from "styled-components";

export const Wrapper = styled.div`
  color: var(--yellow);

  border-radius: 1.25rem;
  padding: 0.4rem;
  text-align: center;

  h2 {
    margin: 0.6rem 0 0 0;
    cursor: pointer;

    :hover {
      opacity: 0.6;
    }

    @media screen and (max-width: 768px) {
      font-size: var(--fontMedium);
    }
  }

  p {
    margin: 0.3rem 0;
    @media screen and (max-width: 768px) {
      font-size: var(--fontSmall);
    }
  }
`;

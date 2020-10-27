import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 01.25rem;
  background-color: var(--black);

  h1 {
    color: var(--yellow);

    @media screen and (max-width: 768px) {
      font-size: var(--fontLarge);
    }
  }
`;

export const Content = styled.div``;

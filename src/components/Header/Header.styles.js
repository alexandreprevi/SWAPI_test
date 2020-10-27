import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--black);
  padding: 0.5rem;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: var(--maxWidth);
  padding: 0.5rem 0;
  margin: 0 auto;
  color: var(--white);

  h1 {
    color: var(--yellow);
    text-decoration: none;
  }
`;

import styled from "styled-components";

export const Spinner = styled.div`
  border: 0.3125rem solid var(--yellow);
  border-top: 0.3125rem solid var(--black);
  border-radius: 50%;
  width: 3.125rem;
  height: 3.125rem;
  animation: spin 0.8s linear infinite;
  margin: 1.25rem auto;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

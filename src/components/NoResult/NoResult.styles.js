import styled from "styled-components";

export const Wrapper = styled.div`
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3) 39%,
      rgba(0, 0, 0, 0.3) 41%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    url(${({ image }) => image}), var(--black);
  background-size: 100%, cover;
  background-position: center;
  height: 37.5rem;
  position: relative;
  animation: animateHEroImage 1s;

  @keyframes animateHEroImage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  span {
    opacity: 0.8;
  }
`;

export const Content = styled.div`
  padding: 1.25rem;
  max-width: var(--maxWidth);
  margin: 0 auto;
`;

export const Text = styled.div`
  z-index: 100;
  max-width: 43.75rem;
  position: absolute;
  bottom: 2.5rem;
  margin-right: 1.25rem;
  min-height: 6.25rem;
  color: var(--white);

  h1 {
    font-size: var(--fontXLarge);

    @media screen and (max-width: 720px) {
      font-size: var(--fontLarge);
    }
  }
  p {
    font-size: var(--fontMedium);

    @media screen and (max-width: 720px) {
      font-size: var(--fontSmall);
    }
  }

  @media screen and (max-width: 720px) {
    max-width: 100%;
  }
`;

import React from "react";
import styled from "styled-components";

const Viewers = () => {
  return (
    <Container>
      <Wrap>
        <img src="/images/viewers-disney.png" alt="viewers" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-pixar.png" alt="viewers" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-marvel.png" alt="viewers" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-starwars.png" alt="viewers" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-national.png" alt="viewers" />
      </Wrap>
    </Container>
  );
};

export default Viewers;

const Container = styled.div`
  margin-top: 36px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
  place-items: center;
  grid-gap: 25px;
  padding: 30px 0 26px 0;
`;

const Wrap = styled.div`
cursor: pointer;
  border-radius: 8px;
  border: 3px solid rgba(259, 249, 249, 0.1);
  transition: 200ms ease;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover {
    transform: scale(1.1);
    border: 3px solid rgba(259, 249, 249, 0.7);
  }
`;

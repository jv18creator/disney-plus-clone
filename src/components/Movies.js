import React from "react";
import styled from "styled-components";

const Movies = () => {
  return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>
        <Wrap>
          <img src="" alt="recomended" />
        </Wrap>
        <Wrap>
          <img src="" alt="recomended" />
        </Wrap>
        <Wrap>
          <img src="" alt="recomended" />
        </Wrap>
        <Wrap>
          <img src="" alt="recomended" />
        </Wrap>
      </Content>
    </Container>
  );
};

export default Movies;

const Container = styled.div``;
const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
  /* place-items: center; */
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;
const Wrap = styled.div`
  transition: 250ms ease;
  cursor: pointer;
  border-radius: 8px;
  img {
    width: 100%;
    object-fit: cover;
  }
  &:hover {
      transform: scale(1.05);
  }
`;

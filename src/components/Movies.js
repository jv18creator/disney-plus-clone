import React from "react";
import styled from "styled-components";
import { selectMovies } from "../features/movie/movieSlice";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom'

const Movies = () => {
  const movies = useSelector(selectMovies);
  // console.log(movies);
  return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>
        {movies &&
          movies.map((movie) => (
            <Wrap key={movie.id}>
              <Link to={`/details/${movie.id}`}>
                <img src={movie.cardImg} alt={movie.type} />
              </Link>
            </Wrap>
          ))}
      </Content>
    </Container>
  );
};

export default Movies;

const Container = styled.div``;
const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
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

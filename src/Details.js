import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import db from "./firebase";

const Details = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setMovie(doc.data());
          console.log(movie);
        } else {
        }
      });
  }, []);
  return (
    <Container>
      {movie ? (
        <>
          <Background>
            <img src={movie.backgroundImg} alt="background" />
          </Background>
          <ImageTitle>
            <img src={movie.titleImg} alt={movie.titleImg} />
          </ImageTitle>
          <Controls>
            <PlayButton>
              <img src="/images/play-icon-black.png" alt="play" />
              <span>PLAY</span>
            </PlayButton>
            <TrailerButton>
              <img src="/images/play-icon-white.png" alt="play" />
              <span>Trailer</span>
            </TrailerButton>
            <AddButton>
              <span>+</span>
            </AddButton>
            <GroupWatchButton>
              <img src="/images/group-icon.png" alt="group" />
            </GroupWatchButton>
          </Controls>
          <SubTitle>{movie.subTitle}</SubTitle>
          <Description>{movie.description}</Description>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
};

export default Details;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 36px;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.8;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  width: 35vw;
  height: 30vh;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  /* flex-direction: column; */
`;
const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  letter-spacing: 1.8px;
  padding: 0 24px;
  margin-right: 22px;
  display: flex;
  align-items: center;
  height: 54px;
  background: rgb(249, 249, 249);

  /* &:hover {
    background: rgb(198, 198, 198);
  } */
`;

const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;
`;
const AddButton = styled.button`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  margin-right: 16px;
  span {
    font-size: 30px;
  }
`;
const GroupWatchButton = styled(AddButton)`
  background-color: rgba(0, 0, 0);
`;

const SubTitle = styled.p``;
const Description = styled.p`
  max-width: 550px;
`;

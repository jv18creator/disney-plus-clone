import React, {useEffect} from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Movies from './Movies'
import Viewers from './Viewers'
import db from '../firebase'
import {useDispatch} from 'react-redux'
import {setMovies} from '../features/movie/movieSlice'

const Home = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      let tempMovies = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() }
      })
      // console.log(tempMovies);
      dispatch(setMovies(tempMovies))
    })
  }, [])

    return (
        <Container>
            <ImgSlider />
            <Viewers />
            <Movies />
        </Container>
    )
}

export default Home

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 36px;
  position: relative;
  overflow: hidden;
  &:before {
    content: "";
    position: absolute;
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const ImgSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel {...settings}>
      <Wrap>
        <img src="/images/slider-badging.jpg" alt="slider" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-badag.jpg" alt="slider" />
      </Wrap>
{/*
       <Wrap>
         <img src="/images/slider-badging.jpg" alt="slider" />
       </Wrap>
       <Wrap>
         <img src="/images/slider-badging.jpg" alt="slider" />
       </Wrap> 
*/}
    </Carousel>
  );
};

export default ImgSlider;

const Carousel = styled(Slider)`
    margin-top: 20px;
    ul li button {
        &:before {
            font-size: 10px;
            color: rgba(150, 158, 171);
        }
    }

    li.slick-active button::before {
        color: white;
    }

    button {
        z-index: 1;
        display: none;
    }

    .slick-list {
        overflow: visible;
    }
`;

const Wrap = styled.div`
    img {
        cursor: pointer;
        border: 4px solid transparent;
        border-radius: 4px;
        width: 100%;
        height: 100%;
        transition-duration: 200ms;
        &:hover {
            border: 4px solid rgba(249, 249, 249, .8);
        }
    }
`;

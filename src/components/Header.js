import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Nav>
      <Logo src="/images/logo.svg" alt="logo" />
      <NavMenu>
        <NavItem>
          <img src="images/home-icon.svg" alt="home" />
          <span>Home</span>
        </NavItem>
        <NavItem>
          <img src="images/search-icon.svg" alt="search" />
          <span>search</span>
        </NavItem>
        <NavItem>
          <img src="images/watchlist-icon.svg" alt="watch-list" />
          <span>watchlist</span>
        </NavItem>
        <NavItem>
          <img src="images/original-icon.svg" alt="originals" />
          <span>originals</span>
        </NavItem>
        <NavItem>
          <img src="images/movie-icon.svg" alt="movies" />
          <span>movies</span>
        </NavItem>
        <NavItem>
          <img src="images/series-icon.svg" alt="series" />
          <span>series</span>
        </NavItem>
        <UserImg src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" />
      </NavMenu>
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  height: 70px;
  background-color: #090b13;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow: hidden;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* width: 100%; */
  flex: 1;
`;

const NavItem = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
  img {
    max-width: 20px;
  }
  span {
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 1.44px;
    position: relative;
    ::after {
      content: "";
      height: 2px;
      width: 100%;
      background: #fff;
      position: absolute;
      bottom: -8px;
      left: 0;
      transform: scaleX(0);
      opacity: 0;
      transform-origin: left center;
      transition: all 300ms ease;
    }
  }
  &:hover {
    span:after {
      /* transform-origin: right; */
      transform: scaleX(1);
      opacity: 1;
    }
  }
`;

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  object-fit: cover;
`;

import React, { useEffect } from "react";
import styled from "styled-components";
import {
  selectUserName,
  selectUserPhoto,
  setSignOut,
  setUserLogin,
} from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { auth, provider } from "../firebase";
import { useHistory } from "react-router-dom";

const Header = () => {
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
        history.push("/");
      }
    });
  }, []);

  const SignIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      // console.log(result);
      let user = result.user;
      dispatch(
        setUserLogin({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        })
      );
      history.push("/");
    });
  };

  const SignOut = () => {
    auth.signOut().then(() => {
      dispatch(setSignOut());
      history.push("/login");
    });
  };

  return (
    <Nav>
      <Logo src="/images/logo.svg" alt="logo" />
      {!userName ? (
        <LoginContainer>
          <Login onClick={SignIn}>Login</Login>
        </LoginContainer>
      ) : (
        <>
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
            <UserImg src={userPhoto} alt={userName} onClick={SignOut} />
          </NavMenu>
        </>
      )}
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
  justify-content: space-evenly;
  width: 100%;
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

const Login = styled.div`
  border-radius: 4px;
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  transition: 250ms ease;
  &:hover {
    background: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

const LoginContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" alt="logo" />
        <SignUp>Get ALL There</SignUp>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
          dicta voluptatibus aliquam corrupti architecto tempore, eaque vitae et
          mollitia consequatur
        </Description>
        <CTALogoTwo src="/images/cta-logo-two.png" alt="logo" />
      </CTA>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  height: calc(100vh - 70px);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: top;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.8;
    background-image: url("/images/login-background.jpg");
    background-repeat: no-repeat;
    background-position: top;
    width: 100%;
    z-index: -1;
  }
`;

const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  z-index: 1;
  display: flex;
  flex-direction: column;
`;
const CTALogoOne = styled.img`
  margin: 0 auto;
  width: 80%;
`;

const SignUp = styled.a`
  padding: 17px 0;
  text-align: center;
  color: #f9f9f9;
  border-radius: 4px;
  width: 100%;
  font-weight: bold;
  background: #0063e5;
  font-size: 18px;
  cursor: pointer;
  transition: 250ms;
  text-transform: uppercase;
  margin: 10px 0;
  &:hover {
    background: #0483ee;
  }
`;

const Description = styled.p`
  text-align: center;
  font-size: 13px;
  letter-spacing: 1.5px;
  line-height: 1.5;
`;

const CTALogoTwo = styled.img``;

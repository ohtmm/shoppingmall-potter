import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 4rem;
  border-bottom: 1px solid ${(props) => props.theme.color.darkBlack};
  color: ${(props) => props.theme.color.white};
  background-color: ${(props) => props.theme.color.darkBlack};
  overflow: hidden;
  @media screen and (max-width: 500px) {
    width: 500px;
  }
`;

export const Logo = styled.h1`
  font-size: xx-large;
  color: ${(props) => props.theme.color.white};
  margin: 0 0 0 2rem;
`;

export const ProductsCategory = styled.ul`
  position: absolute;
  left: 40%;
  top: 1rem;
  display: flex;
  align-items: center;
  list-style: none;
  cursor: pointer;

  li {
    margin-right: 1rem;
    transition: all 0.5s linear;
    color: ${(props) => props.theme.color.white};
    margin-right: 2rem;
    :hover {
      color: ${(props) => props.theme.color.vanilla};
      text-decoration: underline;
    }
    @media screen and (max-width: 500px) {
      width: 100%;
      text-align: left;
      font-size: large;
      color: ${(props) => props.theme.color.darkBlack};
    }
  }

  @media screen and (max-width: 500px) {
    z-index: 1000;
    position: fixed;
    width: 40px;
    flex-wrap: wrap;
    top: 3rem;
    left: 0;
    background-color: #fff;
    border-bottom: 2px solid ${(props) => props.theme.color.darkBlack};
  }
`;

export const UserNav = styled.nav`
  display: flex;
  justify-content: space-around;
  width: 14rem;
  margin-right: 2rem;
  font-size: x-large;
  .cartsNum {
    display: block;
    width: 0.8rem;
    height: 0.8rem;
    font-size: 5px;
    text-align: center;
    border-radius: 100%;
    background-color: ${(props) => props.theme.color.deepOrange};
  }
`;

export const UserAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 6rem;
  margin: 0 1rem;
  span {
    font-size: small;
  }
  img {
    display: block;
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 100%;
    outline: 1px solid rgb(34, 34, 34);
    outline-offset: 1px;
  }
`;

export const AuthButton = styled.button`
  position: absolute;
  top: -1rem;
  right: -1rem;
  width: 3rem;
  height: 4rem;
  font-size: 1rem;
  background-color: ${(props) => props.theme.color.white};
  border: none;
  border-radius: 100%;
  cursor: pointer;
  div {
    color: ${(props) => props.theme.color.darkBlack};
    width: 0.5rem;
    height: 1rem;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  margin: 0 0.5rem;
  font-size: medium;
  color: ${(props) => props.theme.color.white};
  cursor: pointer;
`;

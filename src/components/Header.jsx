import React, { useContext, useState } from "react";
import styled from "styled-components";
import logoImg from "/images/tesla-motors-logo-svgrepo-com.svg";
import { CustomMenu } from "./CustomMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";
import { ThemeContext } from "../App";

const Container = styled.div`
  height: 12vh;
  background-color: transparent;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.25rem;
`;

const Logo = styled.a`
  width: 35vh;
  height: 20vh;

  img {
    height: 100%;
    width: 100%;
    cursor: pointer;
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 1rem;
    flex-wrap: nowrap;
    color: white;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 1rem;
    color: white;
  }
`;

const BurgerNav = styled.div`
  position: fixed;
  height: 100vh;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  backdrop-filter: blur(10px);
  border-left: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
  width: 40.09vh;
  z-index: 16;
  list-style: none;
  padding: 1.15rem;
  display: flex;
  flex-direction: column;
  text-align: start;
  justify-content: center;
  gap: 1vh;
  transition: transform 0.2s;
  transform: ${(props) => (props.$show ? "translateX(0)" : "translateX(100%)")};

  li {
    padding: 0.9rem 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    font-weight: 600;
    font-size: 1.8vh;
  }

  li a {
    color: black;
  }
`;

const CustomClose = styled.div`
    position: absolute;
    right: 3vh;
    top: 4.8vh;
    cursor: pointer;
  }
`;

export const Header = () => {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const {setBlur} = useContext(ThemeContext);
  const cars = useSelector(selectCars);

  return (
    <div>
      <Container>
        <Logo>
          <img src={logoImg} alt="" />
        </Logo>

        <Menu>
          {cars &&
            cars.map((car, index) => {
              return (
                <a key={index} href="#">
                  {car}
                </a>
              );
            })}
        </Menu>

        <RightMenu>
          <a href="#">Shop</a>
          <a href="#">Tesla Account</a>
          <CustomMenu
            onClick={() => {
              setBurgerStatus(true);
              setBlur("15px")
            }}
          />
        </RightMenu>

        <BurgerNav $show={burgerStatus}>
          <CustomClose
            onClick={() => {
              setBurgerStatus(false);
              setBlur("none")
            }}
          >
            <FontAwesomeIcon icon={faX} style={{ color: "#000000" }} />
          </CustomClose>
          {cars &&
            cars.map((car, index) => {
              return (
                <li key={index}>
                  <a href="#">{car}</a>
                </li>
              );
            })}
          <li>
            <a href="#">Existing Inventory</a>
          </li>
          <li>
            <a href="#">Used Inventory</a>
          </li>
          <li>
            <a href="#">Trade-in</a>
          </li>
          <li>
            <a href="#">Cybertruck</a>
          </li>
          <li>
            <a href="#">Roadster</a>
          </li>
          <li>
            <a href="#">Semi</a>
          </li>
          <li>
            <a href="#">Charging</a>
          </li>
          <li>
            <a href="#">Charging</a>
          </li>
          <li>
            <a href="#">Utilities</a>
          </li>
        </BurgerNav>
      </Container>
    </div>
  );
};

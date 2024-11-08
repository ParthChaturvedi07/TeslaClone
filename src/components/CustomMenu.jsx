import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const BurgerMenu = styled.div`
cursor: pointer;
`;

export const CustomMenu = ({onClick}) => {
  return (
    <BurgerMenu onClick={onClick}>
      <FontAwesomeIcon icon={faBars} style={{ color: "#ffffff" }} />
    </BurgerMenu>
  );
};

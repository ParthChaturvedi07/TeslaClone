import React, { useContext } from "react";
import styled from "styled-components";
import Section from "./Section";
import Cybertruck from "/images/935px-Cybertrucklogo.svg.png"
import { ThemeContext } from "../App";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  z-index: 10;
  backdrop-filter: ${({ $blur }) => $blur};
  transition: backdrop-filter 0.3s ease;
`;

export const Home = () => {

  const {blur} = useContext(ThemeContext)

  return (
    <Container $blur={blur}>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg="tesla_car_images_with_on_headlights_with_smokey_background__sjlnmfucbtjgsgzfzojn_0.png"
        LeftBtnText="Custom order"
        RightBtnText="Existing Inventory"
      />
      <Section
        title="Model Y"
        description="0% APR Available"
        backgroundImg="tesla2.png"
        LeftBtnText="Order Now"
        RightBtnText="Demo Drive"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImg="tesla_car_images_with_on_headlights_with_smokey_background__o0rj1xcy3052u9indzig_3.png"
        LeftBtnText="Order Now"
        RightBtnText="Demo Drive"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImg="tesla_car_images_with_on_headlights_with_smokey_background__xkhjya47r4zc6bamjw8m_2.png"
        LeftBtnText="Order Now"
        RightBtnText="Demo Drive"
      />
      <Section
        title={<img src= {Cybertruck}></img>}
        description="Order Online for Touchless Delivery"
        backgroundImg="wallhaven-k7jx7m_3840x2160.png"
        LeftBtnText="Order Now"
        RightBtnText="Demo Drive"
      />
      <Section
        title="Lower Cost Solar Panels in INDIA"
        description="Money-back guarantee"
        backgroundImg="tesla-solar-panel-roof-03-1.png"
        LeftBtnText="Order Now"
        RightBtnText="Learn More"
      />
      <Section
        title="Solar for New Roofs"
        description="Solar Roofs costs less than new roof plus Solar Panels"
        backgroundImg="SR-Photo2-smaller-2.png"
        LeftBtnText="Order Now"
        RightBtnText="Learn More"
      />
      <Section
        title="Accessories"
        description="Order ONline for Touchless Delivery"
        backgroundImg="photo-1663008519764-0616547c493a.avif"
        LeftBtnText="Order Now"
        RightBtnText="Learn More"
      />
      <Section
        title="Power Wall"
        description="Order ONline for Touchless Delivery"
        backgroundImg="tesla_car_images_with_on_headlights_with_smokey_background__sjlnmfucbtjgsgzfzojn_0.png"
        LeftBtnText="Shop Now"
      />
      <Section
        title="We are Tesla"
        description="Order ONline for Touchless Delivery"
        backgroundImg="tesla_car_images_with_on_headlights_with_smokey_background__sjlnmfucbtjgsgzfzojn_0.png"
        LeftBtnText="Custom order"
        RightBtnText="Existing Inventory"
      />
    </Container>
  );
};

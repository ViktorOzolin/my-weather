import React from "react";
import styled from "styled-components";
import Icon from "./Icon";
import Title from "./Title";
import icon from "../assets/icons/005-cloudy.png";

const StyledDay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const Temperature = styled.span`
  color: #fff;
  font-weight: 300;
  font-size: 1.8rem;
`;
const Day: React.FC = () => {
  return (
    <StyledDay>
      <Title size="12px">TUE</Title>
      <Icon src={icon} height="50%" padding="" />
      <Temperature>4&deg;</Temperature>
    </StyledDay>
  );
};

export default Day;

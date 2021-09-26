import React from "react";
import styled from "styled-components";
import Title from "./Title";
import Icon from "./Icon";
import icon from "../assets/icons/036-night.png"
const StyledToday = styled.div`
  display: flex;
  padding: 35px 20px 35px 35px;
  min-width: 25%;
`;

const TodayInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  span:nth-child(2) {
    color: #fff;
    font-weight: 300;
    font-size: 3.2rem;
  }
`;

const Today: React.FC = () => {
    
  return (
    <StyledToday>
      <Icon src={icon} height="100%" width="100px" padding="0 20px 0 0"/>
      <TodayInfo>
        <Title size="15px">TODAY</Title>
        <span>12&deg;</span>
      </TodayInfo>
    </StyledToday>
  );
};

export default Today;

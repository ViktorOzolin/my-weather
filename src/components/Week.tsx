import React from "react";
import styled from "styled-components";
import Day from "./Day";

const StyledWeek = styled.div`
    padding: 10px;
    display: flex;
    

`;

const Week: React.FC = () => {
  return (
    <StyledWeek>
      <Day />
      <Day />
      <Day />
      <Day />
      <Day />
      <Day />
    </StyledWeek>
  );
};

export default Week;

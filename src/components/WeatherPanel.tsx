import React from "react";
import styled from "styled-components";
import Today from "./Today";
import Week from "./Week";

const Panel = styled.div`
  height: 25%;
  backdrop-filter: saturate(180%) blur(3px);
  background-color: hsl(229deg 25% 27% / 88%);
  display: flex;
  width: 100%;
  border-radius: 6px;
  padding: 20px;
`;

const WeatherPanel: React.FC = () => {
  return (
    <Panel>
      <Today />
      <Week />
    </Panel>
  );
};

export default WeatherPanel;

import React from 'react';
import styled from "styled-components";
import WeatherPanel from './components/WeatherPanel';

const App:React.FC = () => {

const Wrapper = styled.div`
    margin: 10% auto;
    background: url(https://img1.goodfon.ru/wallpaper/nbig/0/ef/nature-autumn-fall-trees-sky.jpg);
    background-size: cover;
    height: 700px;
    width: 1000px;
    position: relative;
    border-radius: 6px;
    display: flex;
    align-items: flex-end;

`


  return (
    <div className="App">
      <Wrapper>
        <WeatherPanel />
      </Wrapper>
        
    </div>
  );
}

export default App;

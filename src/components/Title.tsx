import React from "react";
import styled from "styled-components";

type StyledTitleProps = {
    size: string
}

const StyledTitle = styled.span<StyledTitleProps>`
  background-color: hsl(227deg 28% 25% / 98%);
  color: #fff;
  padding: 2px 10px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 2px 3px 11px 0px #00032361;
  color: #fff;
  font-weight: 400;
  font-size: ${props => props.size || '14px' };
`;
interface TitlePropsTypes  {
    children: React.ReactNode
    size: string
}
const Title: React.FC<TitlePropsTypes> = (props) => {
  return <StyledTitle {...props}>{props.children}</StyledTitle>;
};

export default Title;

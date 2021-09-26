import React from "react";
import styled from "styled-components";


const StyledIcon = styled.div`
  display: flex;
  align-items: center;
  
`;
const IconImage = styled.img`
  max-width: 100%;
  height: ${(props: IconPropsType) => props.height};
  width: ${(props: IconPropsType) => props.width};
  padding: ${(props: IconPropsType) => props.padding};
  
`

interface IconPropsType {
    src: string
    padding?: string
    height?: string
    width?: string
  
}
const Icon: React.FC<IconPropsType> = (props) => {
    return(
    <StyledIcon>
        <IconImage  {...props}/>
    </StyledIcon>
    )
}


export default Icon
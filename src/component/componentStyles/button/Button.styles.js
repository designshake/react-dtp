import styled from "styled-components";

export const LogButton = styled.button `
  
  background-color:var(--orange);
  display:inline-block;
  font-size:1.4rem;
  color: var(--white);
  font-weight:bold;
  text-align: center;
  width:100%;
  height:4rem;
  border-radius: 3px 3px;
  cursor: pointer;
  margin-top:2rem;
  
    &:hover {
      color:var(--white);
    }
    
`

export const GraysmallBtn = styled.button`

  display:inline-block;
  width:9rem;
  height:4rem;
  border-radius: 40px;
  background-color: var(--grayc3);
  text-align: center;
  font-size: 1.5rem;
  font-weight:bold;
  color:var(--white);
  cursor: pointer;
  line-height:4rem;
  margin:5rem 10px 0;

    &:hover {
      background-color: var(--mainRed);
      color: var(--white);
    }
  
`

export const RedXLBtn = styled(GraysmallBtn)`

    background-color: var(--redType1);
    color:var(--white);
    width:14rem;

    &:hover {
      background-color: var(--redType1);
      color: var(--white);
      
    }

`


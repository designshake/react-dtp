import styled from "styled-components";

import skonsmall from './../../../assets/images/img_logo_skon.png'
import mainlog from './../../../assets/images/img_logo_xl.png'


export const Loginlogo = styled.div `
  .logFaImg {
    width:18.2rem;
    height: 5rem;
    background:url(${skonsmall});
    background-size:contain;
    background-repeat: no-repeat;
    position: absolute;
    right:0;
    border:none;
  }
`

export const MainLogo = styled.button `
  .mainlogs {
    background:url(${mainlog});
    width: 18rem;
    height:15rem;
    display: inline-block;
    position:absolute;
    top:10rem;
    left:8.7rem;
    cursor: pointer;
    background-size:80%;
    background-repeat: no-repeat;
  }
  
`
import styled from "styled-components";

import skonsmall from './../../../assets/images/img_logo_skon.png'
import mainlog from './../../../assets/images/img_logo_xl.png'


export const Loginlogo = styled.div `
  .logFaImg {
    width:18rem;
    height:4.2rem;
    background:url(${skonsmall});
    position: absolute;
    right:0;
    border:none;
  }
`

export const MainLogo = styled.button `
  .mainlogs {
    background:url(${mainlog});
    width: 26rem;
    height:6.9rem;
    display: inline-block;
    position:absolute;
    top:14rem;
    left:4.7rem;
    cursor: pointer;
  }
  
`
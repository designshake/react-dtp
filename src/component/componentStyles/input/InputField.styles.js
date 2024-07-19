import styled from "styled-components";

import imgId from './../../../assets/images/img_id.png'
import imgPw from './../../../assets/images/img_pw.png'

export const BasicInputField = styled.input `

  width:100%; 
  height:3.4rem;
  border-bottom:1px solid var(--orange);
  display: inline-block;
  padding-left:4rem;
  background-image:url(${imgId});
  background-repeat: no-repeat;
  background-position: 4px 5px;
  letter-spacing: -1px;

`

export const PasswordInputField = styled(BasicInputField)`

  background-image:url(${imgPw}) ;

`
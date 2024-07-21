import React from 'react'
import { GraysmallBtn, RedXLBtn } from '../componentStyles/button/Button.styles'
import { CgArrowLongRight } from "react-icons/cg";

const CardSection = () => {
  return (
    <div id='cardSection'>
      <ul className='cardWrap'>
        <li className='currentCard'>
            <h2>SKON</h2>
              <p>정확한 통계를 통해 직관적인 지표를 전달하여 정확한 정보제공</p>
              <RedXLBtn as='a'>접속하기<CgArrowLongRight /></RedXLBtn>
        </li>
        <li>
            <h2>SKJP</h2>
              <p>2024년 오픈예정</p>
              <GraysmallBtn as='a'>둘러보기</GraysmallBtn>
              <GraysmallBtn as='a'>권한신청</GraysmallBtn>
        </li>
        <li>
            <h2>SKBA</h2>
              <p>2024년 오픈예정</p>
              <GraysmallBtn as='a'>둘러보기</GraysmallBtn>
              <GraysmallBtn as='a'>권한신청</GraysmallBtn>
        </li>
        <li>
            <h2>SKCO</h2>
              <p>2024년 오픈예정</p>
              <GraysmallBtn as='a'>둘러보기</GraysmallBtn>
              <GraysmallBtn as='a'>권한신청</GraysmallBtn>
        </li>
      </ul>
    </div>
    
  )
}

export default CardSection